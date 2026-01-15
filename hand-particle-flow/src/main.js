/**
 * main.js
 * Entry point - integrates Three.js scene with MediaPipe hand tracking
 */

import './style.css';
import * as THREE from 'three';
import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';
import { ParticleSystem } from './ParticleSystem.js';
import { mapMediaPipeToThreeJS, lerpVector3 } from './Utils.js';

// ==================== GLOBAL STATE ====================
let scene, camera, renderer, particleSystem;
let trailOverlay; // For the ghosting/trail effect
let handPosition = { x: 0, y: 0, z: 0 };
let smoothedHandPosition = { x: 0, y: 0, z: 0 };
let handDetected = false;

// Finger trail (ribbon effect)
let fingerTrail = [];
const MAX_TRAIL_LENGTH = 20;
let trailLine = null;

// ==================== INITIALIZATION ====================

/**
 * Initialize Three.js scene, camera, renderer
 */
function initThreeJS() {
  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  // Camera
  const aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
  camera.position.z = 15;

  // Renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: false // We'll handle trails manually
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Append canvas to container
  const container = document.getElementById('canvas-container');
  container.appendChild(renderer.domElement);

  // Create trail overlay (semi-transparent plane for ghosting effect)
  createTrailOverlay();

  // Particle System
  particleSystem = new ParticleSystem(5000, 10);
  scene.add(particleSystem.getObject());

  // Add ambient lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // Handle window resize
  window.addEventListener('resize', onWindowResize);

  console.log('✅ Three.js initialized');
}

/**
 * Create a semi-transparent overlay plane for trail effect
 */
function createTrailOverlay() {
  const geometry = new THREE.PlaneGeometry(100, 100);
  const material = new THREE.MeshBasicMaterial({
    color: 0x000000,
    transparent: true,
    opacity: 0.05, // Lower = longer trails
    depthWrite: false
  });

  trailOverlay = new THREE.Mesh(geometry, material);
  trailOverlay.position.z = 14; // Just in front of camera
  trailOverlay.renderOrder = 1000; // Render last
  scene.add(trailOverlay);
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

  console.log('✅ MediaPipe initialized');
}

/**
 * Handle MediaPipe hand detection results
 */
function onHandResults(results) {
  if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
    const landmarks = results.multiHandLandmarks[0];

    // Get index finger tip (landmark 8)
    const indexFingerTip = landmarks[8];

    // Map to Three.js coordinates
    const mapped = mapMediaPipeToThreeJS(
      indexFingerTip.x,
      indexFingerTip.y,
      indexFingerTip.z,
      10 // worldRange
    );

    handPosition = mapped;
    handDetected = true;

    // Update finger trail
    updateFingerTrail(mapped);
  } else {
    handDetected = false;
  }
}

/**
 * Update finger trail positions
 */
function updateFingerTrail(position) {
  fingerTrail.push({ ...position });

  // Keep only last N positions
  if (fingerTrail.length > MAX_TRAIL_LENGTH) {
    fingerTrail.shift();
  }

  // Update trail line geometry
  if (fingerTrail.length >= 2) {
    updateTrailLine();
  }
}

/**
 * Create/update the finger trail line
 */
function updateTrailLine() {
  // Remove old trail
  if (trailLine) {
    scene.remove(trailLine);
    trailLine.geometry.dispose();
    trailLine.material.dispose();
  }

  // Create new trail geometry
  const points = fingerTrail.map(pos => new THREE.Vector3(pos.x, pos.y, pos.z));
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  // Create gradient colors (fade from bright to dim)
  const colors = new Float32Array(fingerTrail.length * 3);
  for (let i = 0; i < fingerTrail.length; i++) {
    const alpha = i / fingerTrail.length; // 0 to 1
    colors[i * 3] = 0.0 + alpha * 1.0;     // R: 0 -> 1
    colors[i * 3 + 1] = 0.8 + alpha * 0.2; // G: 0.8 -> 1
    colors[i * 3 + 2] = 1.0;                // B: 1
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Create line material
  const material = new THREE.LineBasicMaterial({
    vertexColors: true,
    linewidth: 2,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });

  trailLine = new THREE.Line(geometry, material);
  scene.add(trailLine);
}

/**
 * Handle window resize
 */
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// ==================== ANIMATION LOOP ====================

/**
 * Main animation loop
 */
function animate() {
  requestAnimationFrame(animate);

  // Smooth hand position with lerp to reduce jitter
  if (handDetected) {
    smoothedHandPosition = lerpVector3(smoothedHandPosition, handPosition, 0.2);
  }

  // Update particle system with hand position
  const handVector = new THREE.Vector3(
    smoothedHandPosition.x,
    smoothedHandPosition.y,
    smoothedHandPosition.z
  );
  particleSystem.updateHandPosition(handVector, handDetected);
  particleSystem.update();

  // Render scene
  renderer.render(scene, camera);
}

// ==================== STARTUP ====================

/**
 * Initialize everything and start animation
 */
async function init() {
  try {
    // Initialize Three.js first
    initThreeJS();

    // Start animation loop immediately (so particles are visible)
    animate();

    // Initialize MediaPipe (async)
    await initMediaPipe();

    // Hide loading screen
    const loadingEl = document.getElementById('loading');
    loadingEl.classList.add('hidden');

    console.log('✅ Application ready');
  } catch (error) {
    console.error('❌ Initialization error:', error);

    // Show error to user
    const loadingEl = document.getElementById('loading');
    loadingEl.innerHTML = `
      <div class="loading-text">Error</div>
      <div class="loading-subtext">
        ${error.message || 'Failed to initialize. Please check console.'}
      </div>
    `;
  }
}

// Start the application
init();
