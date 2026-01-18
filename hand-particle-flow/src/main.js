/**
 * main.js
 * Enhanced particle system with gesture control and video background
 */

import './style.css';
import * as THREE from 'three';
import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';
import { ParticleSystem } from './ParticleSystem.js';
import { GestureRecognizer } from './GestureRecognizer.js';
import { generateEarthSphere } from './TextParticles.js';
import { mapMediaPipeToThreeJS } from './Utils.js';

// ==================== GLOBAL STATE ====================
let scene, camera, renderer, particleSystem;
let videoTexture, videoPlane;
let gestureRecognizer;
let previousGesture = null;
let previousHandCenter = null;

// ==================== INITIALIZATION ====================

/**
 * Initialize Three.js scene with video background
 */
function initThreeJS() {
  // Scene
  scene = new THREE.Scene();

  // Camera
  const aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
  camera.position.z = 15;

  // Renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const container = document.getElementById('canvas-container');
  container.appendChild(renderer.domElement);

  // Calculate sphere radius to occupy 1/5 of screen height
  // At camera.position.z = 15 with FOV = 75°:
  // viewport height = 2 * tan(FOV/2) * distance ≈ 22.2
  // sphere diameter should be 22.2 / 5 ≈ 4.44
  // sphere radius ≈ 2.2
  const vFOV = THREE.MathUtils.degToRad(camera.fov);
  const viewportHeight = 2 * Math.tan(vFOV / 2) * camera.position.z;
  const sphereRadius = (viewportHeight / 5) / 2; // Diameter/5, then /2 for radius

  // Generate Earth sphere particles with realistic colors
  const particleCount = 6000; // Increased for better sphere coverage
  const earthData = generateEarthSphere(sphereRadius, particleCount);

  // Particle System with Earth sphere
  particleSystem = new ParticleSystem(
    particleCount,
    10,
    earthData.positions,
    earthData.colors
  );
  scene.add(particleSystem.getObject());

  // Gesture recognizer
  gestureRecognizer = new GestureRecognizer();

  // Handle window resize
  window.addEventListener('resize', onWindowResize);

  console.log('✅ Three.js initialized with Earth sphere (radius:', sphereRadius.toFixed(2), ')');
}

/**
 * Create video background plane
 */
function createVideoBackground(videoElement) {
  // Create video texture
  videoTexture = new THREE.VideoTexture(videoElement);
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;
  videoTexture.format = THREE.RGBAFormat;

  // Video plane position
  const planeZ = -10;

  // Calculate actual distance from camera to plane
  // Camera is at z=15, plane at z=-10, so distance = 15 - (-10) = 25
  const distanceFromCamera = camera.position.z - planeZ;

  // Calculate plane size to match camera frustum at the plane's position
  const vFOV = THREE.MathUtils.degToRad(camera.fov);
  const height = 2 * Math.tan(vFOV / 2) * distanceFromCamera;
  const width = height * camera.aspect;

  // Create plane geometry that exactly covers the view
  const planeGeometry = new THREE.PlaneGeometry(width, height);
  const planeMaterial = new THREE.MeshBasicMaterial({
    map: videoTexture,
    side: THREE.FrontSide,
    depthWrite: false
  });

  videoPlane = new THREE.Mesh(planeGeometry, planeMaterial);
  videoPlane.position.z = planeZ; // Behind particles
  videoPlane.renderOrder = -1; // Render first
  scene.add(videoPlane);

  console.log('✅ Video background created:', width.toFixed(2), 'x', height.toFixed(2),
              'distance:', distanceFromCamera);
}

/**
 * Initialize MediaPipe Hands
 */
async function initMediaPipe() {
  const videoElement = document.getElementById('webcam');

  // Configure Hands
  const hands = new Hands({
    locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }
  });

  hands.setOptions({
    maxNumHands: 1,
    modelComplexity: 1,
    minDetectionConfidence: 0.7,
    minTrackingConfidence: 0.7
  });

  hands.onResults(onHandResults);

  // Setup camera
  const cameraUtil = new Camera(videoElement, {
    onFrame: async () => {
      await hands.send({ image: videoElement });
    },
    width: 1280,
    height: 720
  });

  await cameraUtil.start();

  // Create video background after camera starts
  createVideoBackground(videoElement);

  console.log('✅ MediaPipe initialized');
}

/**
 * Handle MediaPipe hand detection results
 */
function onHandResults(results) {
  if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) {
    previousGesture = null;
    previousHandCenter = null;
    return;
  }

  const landmarks = results.multiHandLandmarks[0];
  const gesture = gestureRecognizer.recognize(landmarks);

  handleGesture(gesture, landmarks);
}

/**
 * Handle different gestures
 * 3 core gestures:
 * - Fist: scatter particles
 * - Open palm: reform sphere
 * - Move hand (2-4 fingers): move sphere
 */
function handleGesture(gesture, landmarks) {
  const worldRange = 10;

  switch (gesture.type) {
    case 'fist':
      // Scatter particles
      if (previousGesture !== 'fist') {
        const center = mapMediaPipeToThreeJS(
          gesture.data.x,
          gesture.data.y,
          gesture.data.z,
          worldRange
        );
        particleSystem.scatter(center);
        console.log('✊ Fist: Scattered particles!');
      }
      break;

    case 'open_palm':
      // Reform sphere
      if (previousGesture !== 'open_palm') {
        particleSystem.reform();
        console.log('🖐️ Open palm: Reforming Earth sphere!');
      }
      break;

    case 'move_hand':
      // Move sphere with hand movement (2-4 fingers)
      if (gesture.data && gesture.data.delta) {
        const delta = mapMediaPipeToThreeJS(
          gesture.data.delta.x,
          gesture.data.delta.y,
          gesture.data.delta.z,
          worldRange
        );

        // Only move if delta is significant (avoid jitter)
        const magnitude = Math.sqrt(delta.x ** 2 + delta.y ** 2);
        if (magnitude > 0.1) {
          particleSystem.moveSphere(delta);
          console.log('👋 Moving sphere:', gesture.data.fingerCount, 'fingers');
        }
      }
      break;

    default:
      previousHandCenter = null;
      break;
  }

  // Reset gesture state when switching gestures
  if (previousGesture !== gesture.type) {
    previousHandCenter = null;
    gestureRecognizer.reset();
  }

  previousGesture = gesture.type;
}

/**
 * Handle window resize
 */
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Update video background plane size
  if (videoPlane) {
    // Calculate actual distance from camera to plane
    const distanceFromCamera = camera.position.z - videoPlane.position.z;
    const vFOV = THREE.MathUtils.degToRad(camera.fov);
    const height = 2 * Math.tan(vFOV / 2) * distanceFromCamera;
    const width = height * camera.aspect;

    videoPlane.geometry.dispose();
    videoPlane.geometry = new THREE.PlaneGeometry(width, height);
  }
}

// ==================== ANIMATION LOOP ====================

/**
 * Main animation loop
 */
function animate() {
  requestAnimationFrame(animate);

  // Update particle system
  particleSystem.update();

  // Render scene
  renderer.render(scene, camera);
}

// ==================== STARTUP ====================

/**
 * Initialize Three.js (no camera yet)
 */
function initWithoutCamera() {
  initThreeJS();
  animate();
  console.log('✅ Three.js initialized, waiting for user interaction');
}

/**
 * Start camera experience after user clicks
 */
async function startCameraExperience() {
  const startOverlay = document.getElementById('start-overlay');
  const loadingEl = document.getElementById('loading');

  try {
    startOverlay.classList.add('hidden');
    loadingEl.style.display = 'flex';

    await initMediaPipe();

    loadingEl.classList.add('hidden');
    console.log('✅ Application ready');
  } catch (error) {
    console.error('❌ Camera initialization error:', error);

    const errorMsg = error.name === 'NotAllowedError'
      ? '摄像头权限被拒绝。请点击地址栏左侧图标，允许摄像头权限后刷新页面。'
      : (error.message || '初始化失败，请检查浏览器控制台。');

    loadingEl.innerHTML = `
      <div class="loading-text">摄像头权限错误</div>
      <div class="loading-subtext">${errorMsg}</div>
      <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #00d4ff; border: none; border-radius: 8px; color: white; cursor: pointer; font-size: 1rem;">
        重新尝试
      </button>
    `;

    loadingEl.style.display = 'flex';
  }
}

// Initialize and start
initWithoutCamera();

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', startCameraExperience);
