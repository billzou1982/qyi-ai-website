/**
 * ParticleSystem.js  
 * Enhanced particle system with text formation and gesture interactions
 */

import * as THREE from 'three';

export class ParticleSystem {
  constructor(particleCount = 5000, worldRange = 10, textPositions = null, initialColors = null) {
    this.particleCount = particleCount;
    this.worldRange = worldRange;

    // V4: States
    this.STATE_SOLID = 'solid';
    this.STATE_SHATTERING = 'shattering';
    this.STATE_SHATTERED = 'shattered';
    this.STATE_REFORMING = 'reforming';
    this.currentState = this.STATE_SOLID;

    // Transform properties
    this.sphereOffset = new THREE.Vector3(0, 0, 0);
    this.targetPosition = new THREE.Vector3(0, 0, 0);
    this.lastTargetUpdateTime = 0;
    this.sphereRadius = 1.0; // Updated later
    this.sphereScale = 1.0;
    this.bounds = null;

    // V4: Mesh & Texture properties
    this.mesh = null;
    this.textureLoader = new THREE.TextureLoader();

    // Physics parameters
    this.params = {
      homeForce: 0.1,           // V4: Gentler for reform
      scatterForce: 3.5,        // V4: Explosive shatter
      friction: 0.88,           // V4: High friction for precision
      maxVelocity: 5.0,
      lerpFactor: 0.2,
    };

    // Initialize particle data
    this.initParticles(textPositions, initialColors);
    this.createThreeJSObjects();
  }

  /**
   * Initialize particle positions
   */
  initParticles(textPositions, initialColors) {
    const count = this.particleCount;

    this.positions = new Float32Array(count * 3);
    this.textPositions = textPositions || new Float32Array(count * 3); // Original sphere formation
    this.velocities = new Float32Array(count * 3);
    this.colors = new Float32Array(count * 3);
    this.initialColors = initialColors || new Float32Array(count * 3); // Store original Earth colors

    // Initialize particles at sphere positions
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Current position = sphere position
      this.positions[i3] = this.textPositions[i3];
      this.positions[i3 + 1] = this.textPositions[i3 + 1];
      this.positions[i3 + 2] = this.textPositions[i3 + 2];

      // Initialize velocity to zero
      this.velocities[i3] = 0;
      this.velocities[i3 + 1] = 0;
      this.velocities[i3 + 2] = 0;

      // Use provided colors or default to Earth ocean blue
      if (initialColors) {
        this.colors[i3] = initialColors[i3];
        this.colors[i3 + 1] = initialColors[i3 + 1];
        this.colors[i3 + 2] = initialColors[i3 + 2];
        this.initialColors[i3] = initialColors[i3];
        this.initialColors[i3 + 1] = initialColors[i3 + 1];
        this.initialColors[i3 + 2] = initialColors[i3 + 2];
      } else {
        this.colors[i3] = 0.1;      // R
        this.colors[i3 + 1] = 0.3;  // G
        this.colors[i3 + 2] = 0.7;  // B
        this.initialColors[i3] = 0.1;
        this.initialColors[i3 + 1] = 0.3;
        this.initialColors[i3 + 2] = 0.7;
      }
    }
  }

  /**
   * Create Three.js geometry, material, and Mesh
   */
  createThreeJSObjects() {
    // 1. Particle System (The "Shards")
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));

    const pointTexture = this.createPointTexture();
    this.material = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0, // Hidden until shatter
      depthWrite: false,
      map: pointTexture,
      sizeAttenuation: true
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.points.visible = false; // V4: Hide by default

    // 2. Main Earth Mesh
    const sphereGeom = new THREE.SphereGeometry(1, 64, 64);
    const sphereMat = new THREE.MeshStandardMaterial({
      roughness: 0.7,
      metalness: 0.1,
      emissive: new THREE.Color(0x000000)
    });

    this.mesh = new THREE.Mesh(sphereGeom, sphereMat);
    this.group = new THREE.Group();
    this.group.add(this.mesh);
    this.group.add(this.points);

    // Initial scale
    this.mesh.scale.setScalar(this.sphereScale);
  }

  /**
   * Load texture and apply to mesh
   */
  loadTexture(url) {
    this.textureLoader.load(url, (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      this.mesh.material.map = texture;
      this.mesh.material.needsUpdate = true;
      console.log('✅ Earth Mesh texture loaded');
    });
  }

  setRadius(radius) {
    this.sphereRadius = radius;
    this.mesh.scale.setScalar(radius);
  }

  /**
   * Set target position for the sphere (handled in update via lerp)
   */
  setTargetPosition(pos) {
    this.targetPosition.copy(pos);
    this.lastTargetUpdateTime = Date.now();
  }

  /**
   * Move sphere (multi-finger gesture)
   */
  moveSphere(delta) {
    this.sphereOffset.x += delta.x;
    this.sphereOffset.y += delta.y;
  }

  /**
   * Scale sphere (pinch gesture - removed for simplicity)
   */
  scaleSphere(scaleDelta) {
    this.targetScale += scaleDelta * 0.05;
    this.targetScale = Math.max(0.3, Math.min(this.targetScale, 3.0)); // Clamp
  }

  /**
   * Trigger Scatter/Shatter sequence
   */
  scatter(center) {
    if (this.currentState !== this.STATE_SOLID) return;

    this.currentState = this.STATE_SHATTERING;
    this.mesh.visible = false;
    this.points.visible = true;
    this.material.opacity = 1.0;

    // Force impulse for particles
    const count = this.particleCount;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = Math.sqrt(
        this.textPositions[i3] ** 2 +
        this.textPositions[i3 + 1] ** 2 +
        this.textPositions[i3 + 2] ** 2
      ) || 1;

      // Direction from center of sphere
      const dirX = this.textPositions[i3] / radius;
      const dirY = this.textPositions[i3 + 1] / radius;
      const dirZ = this.textPositions[i3 + 2] / radius;

      const force = this.params.scatterForce * (0.8 + Math.random() * 0.4);
      this.velocities[i3] = dirX * force;
      this.velocities[i3 + 1] = dirY * force;
      this.velocities[i3 + 2] = dirZ * force;
    }

    setTimeout(() => {
      this.currentState = this.STATE_SHATTERED;
    }, 100);
  }

  /**
   * Trigger Reform sequence
   */
  reform() {
    if (this.currentState !== this.STATE_SHATTERED) return;
    this.currentState = this.STATE_REFORMING;
  }

  /**
   * Main update loop
   */
  update() {
    const count = this.particleCount;
    const posAttr = this.geometry.attributes.position;
    const colorAttr = this.geometry.attributes.color;

    // V2: Directly lerp sphereOffset to targetPosition for 1:1 hand tracking
    // V3: Check if target was recently updated; if not, return to center
    const now = Date.now();
    const handLost = (now - this.lastTargetUpdateTime) > 500; // 500ms fallback

    const actualTarget = handLost ? new THREE.Vector3(0, 0, 0) : this.targetPosition;
    const currentLerp = handLost ? 0.05 : this.params.lerpFactor; // Slower return to center

    this.sphereOffset.x += (actualTarget.x - this.sphereOffset.x) * currentLerp;
    this.sphereOffset.y += (actualTarget.y - this.sphereOffset.y) * currentLerp;
    this.sphereOffset.z += (actualTarget.z - this.sphereOffset.z) * currentLerp;

    // Strict boundary locking with smooth resistance
    if (this.bounds) {
      const margin = 0.5; // Padding from edge
      this.sphereOffset.x = Math.max(this.bounds.minX + margin, Math.min(this.bounds.maxX - margin, this.sphereOffset.x));
      this.sphereOffset.y = Math.max(this.bounds.minY + margin, Math.min(this.bounds.maxY - margin, this.sphereOffset.y));
    }

    // Dynamic shading parameters
    const ambient = 0.15;
    const diffuse = 0.85;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      if (this.currentState === this.STATE_FORMED) {
        // Calculate target position (sphere position + offset + scale)
        const targetX = this.textPositions[i3] * this.sphereScale + this.sphereOffset.x;
        const targetY = this.textPositions[i3 + 1] * this.sphereScale + this.sphereOffset.y;
        const targetZ = this.textPositions[i3 + 2] * this.sphereScale + this.sphereOffset.z;

        // Apply force toward target position
        const dx = targetX - this.positions[i3];
        const dy = targetY - this.positions[i3 + 1];
        const dz = targetZ - this.positions[i3 + 2];

        this.velocities[i3] += dx * this.params.homeForce;
        this.velocities[i3 + 1] += dy * this.params.homeForce;
        this.velocities[i3 + 2] += dz * this.params.homeForce;

        // V2: Dynamic Shading (Day/Night side)
        // Only apply to atmosphere/outer particles if needed or to all
        const nx = this.textPositions[i3]; // Normalized position (since original radius is fixed)
        const ny = this.textPositions[i3 + 1];
        const nz = this.textPositions[i3 + 2];

        // Simplified dot product for shading
        const lightLen = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
        const lightFactor = Math.max(0, (nx / lightLen) * this.lightSource.x + (ny / lightLen) * this.lightSource.y + (nz / lightLen) * this.lightSource.z);
        const shade = ambient + diffuse * lightFactor;

        this.colors[i3] = this.initialColors[i3] * shade;
        this.colors[i3 + 1] = this.initialColors[i3 + 1] * shade;
        this.colors[i3 + 2] = this.initialColors[i3 + 2] * shade;

      } else if (this.currentState === this.STATE_SCATTERED) {
        // In scattered mode, particles fly freely
        // Removed downward force to prevent particles falling out of view

        // Brighten colors slightly when scattered, but keep Earth tones
        const velMag = Math.sqrt(
          this.velocities[i3] ** 2 +
          this.velocities[i3 + 1] ** 2 +
          this.velocities[i3 + 2] ** 2
        );
        const intensity = Math.min(velMag / this.params.maxVelocity, 1.0) * 0.3;

        this.colors[i3] = Math.min(this.initialColors[i3] + intensity, 1.0);
        this.colors[i3 + 1] = Math.min(this.initialColors[i3 + 1] + intensity, 1.0);
        this.colors[i3 + 2] = Math.min(this.initialColors[i3 + 2] + intensity, 1.0);
      }

      // Apply friction
      this.velocities[i3] *= this.params.friction;
      this.velocities[i3 + 1] *= this.params.friction;
      this.velocities[i3 + 2] *= this.params.friction;

      // Clamp velocity
      const velMagnitude = Math.sqrt(
        this.velocities[i3] ** 2 +
        this.velocities[i3 + 1] ** 2 +
        this.velocities[i3 + 2] ** 2
      );

      if (velMagnitude > this.params.maxVelocity) {
        const scale = this.params.maxVelocity / velMagnitude;
        this.velocities[i3] *= scale;
        this.velocities[i3 + 1] *= scale;
        this.velocities[i3 + 2] *= scale;
      }

      // Update position
      this.positions[i3] += this.velocities[i3];
      this.positions[i3 + 1] += this.velocities[i3 + 1];
      this.positions[i3 + 2] += this.velocities[i3 + 2];
    }

    posAttr.needsUpdate = true;
    colorAttr.needsUpdate = true;
  }

  getObject() {
    return this.group;
  }

  createPointTexture() {
    const size = 128; // Higher resolution
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(
      size / 2, size / 2, 0,
      size / 2, size / 2, size / 2
    );

    // Softer gradient for "Google Earth" particle feel
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  setBounds(bounds) {
    this.bounds = bounds;
  }

  setColors(newColors) {
    if (!newColors || newColors.length !== this.colors.length) {
      return;
    }

    this.colors.set(newColors);
    this.initialColors.set(newColors);
    this.geometry.attributes.color.needsUpdate = true;
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
