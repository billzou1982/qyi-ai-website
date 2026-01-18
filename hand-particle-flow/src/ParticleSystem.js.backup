/**
 * ParticleSystem.js
 * Advanced particle system with physics-based interactions
 */

import * as THREE from 'three';

export class ParticleSystem {
  constructor(particleCount = 5000, worldRange = 10) {
    this.particleCount = particleCount;
    this.worldRange = worldRange;

    // Physics parameters
    this.params = {
      homeForce: 0.02,          // Strength of return-to-home force
      repulsionForce: 0.5,       // Strength of hand repulsion
      repulsionRadius: 3,        // Radius of hand influence
      friction: 0.95,            // Velocity damping (0-1)
      maxVelocity: 0.5,          // Maximum particle velocity
      colorSpeed: 0.01           // Speed of color change based on velocity
    };

    // Hand position (updated from external source)
    this.handPosition = new THREE.Vector3(0, 0, 0);
    this.handActive = false;

    // Initialize particle data
    this.initParticles();
    this.createThreeJSObjects();
  }

  /**
   * Initialize particle positions, velocities, and home positions
   */
  initParticles() {
    const count = this.particleCount;

    // Position arrays
    this.positions = new Float32Array(count * 3);
    this.homePositions = new Float32Array(count * 3);
    this.velocities = new Float32Array(count * 3);
    this.colors = new Float32Array(count * 3);

    // Initialize each particle
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Random position within cube
      const x = (Math.random() - 0.5) * this.worldRange * 2;
      const y = (Math.random() - 0.5) * this.worldRange * 2;
      const z = (Math.random() - 0.5) * this.worldRange * 1.5;

      // Set positions
      this.positions[i3] = x;
      this.positions[i3 + 1] = y;
      this.positions[i3 + 2] = z;

      // Store home position
      this.homePositions[i3] = x;
      this.homePositions[i3 + 1] = y;
      this.homePositions[i3 + 2] = z;

      // Initialize velocity to zero
      this.velocities[i3] = 0;
      this.velocities[i3 + 1] = 0;
      this.velocities[i3 + 2] = 0;

      // Initialize color (cyan/teal)
      this.colors[i3] = 0.0;      // R
      this.colors[i3 + 1] = 0.8;  // G
      this.colors[i3 + 2] = 1.0;  // B
    }
  }

  /**
   * Create Three.js geometry and material
   */
  createThreeJSObjects() {
    // Create buffer geometry
    this.geometry = new THREE.BufferGeometry();

    // Set attributes
    this.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(this.positions, 3)
    );

    this.geometry.setAttribute(
      'color',
      new THREE.BufferAttribute(this.colors, 3)
    );

    // Create material with additive blending for glow effect
    this.material = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      sizeAttenuation: true
    });

    // Create points object
    this.points = new THREE.Points(this.geometry, this.material);
  }

  /**
   * Update hand position from external source (MediaPipe)
   * @param {THREE.Vector3} position - Hand position in world coordinates
   * @param {boolean} active - Whether hand is detected
   */
  updateHandPosition(position, active = true) {
    this.handPosition.copy(position);
    this.handActive = active;
  }

  /**
   * Main physics update loop - called every frame
   */
  update() {
    const count = this.particleCount;
    const posAttr = this.geometry.attributes.position;
    const colorAttr = this.geometry.attributes.color;

    // Temporary vectors for calculations (reused for performance)
    const particlePos = new THREE.Vector3();
    const toHome = new THREE.Vector3();
    const toHand = new THREE.Vector3();

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Current position
      particlePos.set(
        this.positions[i3],
        this.positions[i3 + 1],
        this.positions[i3 + 2]
      );

      // --- FORCE 1: Home Force (Spring back to original position) ---
      toHome.set(
        this.homePositions[i3] - this.positions[i3],
        this.homePositions[i3 + 1] - this.positions[i3 + 1],
        this.homePositions[i3 + 2] - this.positions[i3 + 2]
      );

      // Apply home force to velocity
      this.velocities[i3] += toHome.x * this.params.homeForce;
      this.velocities[i3 + 1] += toHome.y * this.params.homeForce;
      this.velocities[i3 + 2] += toHome.z * this.params.homeForce;

      // --- FORCE 2: Hand Repulsion Force ---
      if (this.handActive) {
        toHand.copy(this.handPosition).sub(particlePos);
        const distance = toHand.length();

        // Only apply force if within repulsion radius
        if (distance < this.params.repulsionRadius) {
          // Normalize and scale by inverse square law (closer = stronger)
          const forceMagnitude =
            this.params.repulsionForce *
            (1 - distance / this.params.repulsionRadius) ** 2;

          // Apply repulsion (opposite direction to hand)
          toHand.normalize().multiplyScalar(-forceMagnitude);

          this.velocities[i3] += toHand.x;
          this.velocities[i3 + 1] += toHand.y;
          this.velocities[i3 + 2] += toHand.z;
        }
      }

      // --- Apply Friction (Damping) ---
      this.velocities[i3] *= this.params.friction;
      this.velocities[i3 + 1] *= this.params.friction;
      this.velocities[i3 + 2] *= this.params.friction;

      // --- Clamp Velocity ---
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

      // --- Update Position ---
      this.positions[i3] += this.velocities[i3];
      this.positions[i3 + 1] += this.velocities[i3 + 1];
      this.positions[i3 + 2] += this.velocities[i3 + 2];

      // --- Update Color Based on Velocity ---
      const normalizedVel = velMagnitude / this.params.maxVelocity;

      // Interpolate between cyan (slow) and white (fast)
      this.colors[i3] = normalizedVel * 0.8;           // R: 0 -> 0.8
      this.colors[i3 + 1] = 0.8 + normalizedVel * 0.2; // G: 0.8 -> 1.0
      this.colors[i3 + 2] = 1.0;                        // B: 1.0 (constant)
    }

    // Mark attributes as needing update
    posAttr.needsUpdate = true;
    colorAttr.needsUpdate = true;
  }

  /**
   * Get the Three.js points object for adding to scene
   * @returns {THREE.Points} The points object
   */
  getObject() {
    return this.points;
  }

  /**
   * Clean up resources
   */
  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
