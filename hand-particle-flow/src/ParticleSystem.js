/**
 * ParticleSystem.js  
 * Enhanced particle system with text formation and gesture interactions
 */

import * as THREE from 'three';

export class ParticleSystem {
  constructor(particleCount = 5000, worldRange = 10, textPositions = null) {
    this.particleCount = particleCount;
    this.worldRange = worldRange;

    // Particle states
    this.STATE_FORMED = 'formed';      // Text is formed and static
    this.STATE_SCATTERED = 'scattered'; // Particles are scattered
    this.currentState = this.STATE_FORMED;

    // Transform properties
    this.textOffset = new THREE.Vector3(0, 0, 0);  // Text position offset
    this.textScale = 1.0;                          // Text scale
    this.targetScale = 1.0;

    // Physics parameters
    this.params = {
      homeForce: 0.05,          // Strength of return to text position
      scatterForce: 2.0,        // Force when scattering
      friction: 0.92,           // Velocity damping
      maxVelocity: 1.5,         // Maximum particle velocity
    };

    // Initialize particle data
    this.initParticles(textPositions);
    this.createThreeJSObjects();
  }

  /**
   * Initialize particle positions
   */
  initParticles(textPositions) {
    const count = this.particleCount;

    this.positions = new Float32Array(count * 3);
    this.textPositions = textPositions || new Float32Array(count * 3); // Original text formation
    this.velocities = new Float32Array(count * 3);
    this.colors = new Float32Array(count * 3);

    // Initialize particles at text positions
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Current position = text position
      this.positions[i3] = this.textPositions[i3];
      this.positions[i3 + 1] = this.textPositions[i3 + 1];
      this.positions[i3 + 2] = this.textPositions[i3 + 2];

      // Initialize velocity to zero
      this.velocities[i3] = 0;
      this.velocities[i3 + 1] = 0;
      this.velocities[i3 + 2] = 0;

      // Initialize color (cyan/teal)
      this.colors[i3] = 0.2;      // R
      this.colors[i3 + 1] = 0.8;  // G
      this.colors[i3 + 2] = 1.0;  // B
    }
  }

  /**
   * Create Three.js geometry and material
   */
  createThreeJSObjects() {
    this.geometry = new THREE.BufferGeometry();

    this.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(this.positions, 3)
    );

    this.geometry.setAttribute(
      'color',
      new THREE.BufferAttribute(this.colors, 3)
    );

    this.material = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      sizeAttenuation: true
    });

    this.points = new THREE.Points(this.geometry, this.material);
  }

  /**
   * Move text (one finger gesture)
   */
  moveText(delta) {
    this.textOffset.x += delta.x;
    this.textOffset.y += delta.y;
  }

  /**
   * Scale text (pinch gesture)
   */
  scaleText(scaleDelta) {
    this.targetScale += scaleDelta * 0.05;
    this.targetScale = Math.max(0.3, Math.min(this.targetScale, 3.0)); // Clamp
  }

  /**
   * Scatter particles (fist gesture)
   */
  scatter(center) {
    this.currentState = this.STATE_SCATTERED;
    
    const count = this.particleCount;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Random direction from center
      const angle = Math.random() * Math.PI * 2;
      const elevation = (Math.random() - 0.5) * Math.PI;
      const force = this.params.scatterForce * (0.5 + Math.random() * 0.5);
      
      this.velocities[i3] += Math.cos(angle) * Math.cos(elevation) * force;
      this.velocities[i3 + 1] += Math.sin(elevation) * force;
      this.velocities[i3 + 2] += Math.sin(angle) * Math.cos(elevation) * force;
    }
  }

  /**
   * Reform text (five fingers gesture)
   */
  reform() {
    this.currentState = this.STATE_FORMED;
    // Particles will gradually return to text positions
  }

  /**
   * Main update loop
   */
  update() {
    const count = this.particleCount;
    const posAttr = this.geometry.attributes.position;
    const colorAttr = this.geometry.attributes.color;

    // Smoothly interpolate scale
    this.textScale += (this.targetScale - this.textScale) * 0.1;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      if (this.currentState === this.STATE_FORMED) {
        // Calculate target position (text position + offset + scale)
        const targetX = this.textPositions[i3] * this.textScale + this.textOffset.x;
        const targetY = this.textPositions[i3 + 1] * this.textScale + this.textOffset.y;
        const targetZ = this.textPositions[i3 + 2] * this.textScale + this.textOffset.z;

        // Apply force toward target position
        const dx = targetX - this.positions[i3];
        const dy = targetY - this.positions[i3 + 1];
        const dz = targetZ - this.positions[i3 + 2];

        this.velocities[i3] += dx * this.params.homeForce;
        this.velocities[i3 + 1] += dy * this.params.homeForce;
        this.velocities[i3 + 2] += dz * this.params.homeForce;

        // Color: more cyan when formed
        this.colors[i3] = 0.2;
        this.colors[i3 + 1] = 0.8;
        this.colors[i3 + 2] = 1.0;

      } else if (this.currentState === this.STATE_SCATTERED) {
        // In scattered mode, particles fly freely with gravity-like effect
        this.velocities[i3 + 1] -= 0.01; // Slight downward force

        // Color: more white/yellow when scattered
        const velMag = Math.sqrt(
          this.velocities[i3] ** 2 +
          this.velocities[i3 + 1] ** 2 +
          this.velocities[i3 + 2] ** 2
        );
        const intensity = Math.min(velMag / this.params.maxVelocity, 1.0);
        
        this.colors[i3] = 0.5 + intensity * 0.5;
        this.colors[i3 + 1] = 0.7 + intensity * 0.3;
        this.colors[i3 + 2] = 0.8 + intensity * 0.2;
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
    return this.points;
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
