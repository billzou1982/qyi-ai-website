/**
 * Utils.js
 * Utility functions for coordinate mapping and smoothing
 */

/**
 * Maps MediaPipe normalized coordinates (0-1) to Three.js world coordinates
 * @param {number} mpX - MediaPipe X coordinate (0-1)
 * @param {number} mpY - MediaPipe Y coordinate (0-1)
 * @param {number} mpZ - MediaPipe Z coordinate (optional, typically -0.1 to 0.1)
 * @param {number} worldRange - The range of Three.js world coordinates (e.g., 10 means -10 to +10)
 * @returns {{x: number, y: number, z: number}} Three.js world coordinates
 */
export function mapMediaPipeToThreeJS(mpX, mpY, mpZ = 0, worldRange = 10) {
  // Clamp input to 0-1 to avoid outlier jumps
  const cx = Math.max(0, Math.min(1, mpX));
  const cy = Math.max(0, Math.min(1, mpY));

  // MediaPipe X: 0 (left) -> 1 (right)
  // Three.js X: -range (left) -> +range (right)
  // Mirrored for "mirror image" feel
  const x = (1 - cx) * worldRange * 2 - worldRange;

  // MediaPipe Y: 0 (top) -> 1 (bottom)
  // Three.js Y: +range (top) -> -range (bottom)
  const y = -(cy * worldRange * 2 - worldRange);

  // V4: Ignore Z for panning to keep it stable on 2D plane
  const z = 0;

  return { x, y, z };
}

/**
 * Linear interpolation for smooth coordinate transitions
 * @param {number} current - Current value
 * @param {number} target - Target value
 * @param {number} factor - Interpolation factor (0-1), typically 0.1-0.3
 * @returns {number} Interpolated value
 */
export function lerp(current, target, factor = 0.2) {
  return current + (target - current) * factor;
}

/**
 * Vector3 lerp for smooth hand position transitions
 * @param {Object} current - Current position {x, y, z}
 * @param {Object} target - Target position {x, y, z}
 * @param {number} factor - Interpolation factor
 * @returns {Object} Smoothed position {x, y, z}
 */
export function lerpVector3(current, target, factor = 0.2) {
  return {
    x: lerp(current.x, target.x, factor),
    y: lerp(current.y, target.y, factor),
    z: lerp(current.z, target.z, factor)
  };
}

/**
 * Clamps a value between min and max
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Calculates distance between two 3D points
 * @param {Object} p1 - Point 1 {x, y, z}
 * @param {Object} p2 - Point 2 {x, y, z}
 * @returns {number} Distance
 */
export function distance3D(p1, p2) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const dz = p2.z - p1.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
