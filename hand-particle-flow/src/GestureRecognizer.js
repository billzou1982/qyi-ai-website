/**
 * GestureRecognizer.js
 * Recognizes 3 core hand gestures from MediaPipe landmarks
 */

export class GestureRecognizer {
  constructor() {
    this.previousGesture = null;
    this.previousHandCenter = null;
  }

  /**
   * Recognize gesture from hand landmarks
   * Simplified to 3 gestures:
   * - Fist (0-1 fingers): scatter particles
   * - Open palm (5 fingers): reform sphere
   * - Multiple fingers (2-4): move sphere
   *
   * @param {Array} landmarks - MediaPipe hand landmarks
   * @returns {Object} Gesture information
   */
  recognize(landmarks) {
    if (!landmarks || landmarks.length === 0) {
      return { type: 'none', data: null };
    }

    const extendedFingers = this.countExtendedFingers(landmarks);
    const handCenter = this.getHandCenter(landmarks);

    // Fist (0-1 extended fingers) - scatter
    if (extendedFingers <= 1) {
      return {
        type: 'fist',
        data: handCenter
      };
    }

    // Open palm (5 fingers) - reform
    if (extendedFingers >= 5) {
      return {
        type: 'open_palm',
        data: handCenter
      };
    }

    // Multiple fingers (2-4) - move sphere
    if (extendedFingers >= 2 && extendedFingers <= 4) {
      const moveDelta = { x: 0, y: 0, z: 0 };

      // Calculate movement delta if we have previous position
      if (this.previousHandCenter) {
        moveDelta.x = handCenter.x - this.previousHandCenter.x;
        moveDelta.y = handCenter.y - this.previousHandCenter.y;
        moveDelta.z = handCenter.z - this.previousHandCenter.z;
      }

      this.previousHandCenter = handCenter;

      return {
        type: 'move_hand',
        data: {
          center: handCenter,
          delta: moveDelta,
          fingerCount: extendedFingers
        }
      };
    }

    // Default
    return { type: 'unknown', data: null };
  }

  /**
   * Count extended fingers
   */
  countExtendedFingers(landmarks) {
    let count = 0;
    
    // Thumb (special case - check horizontal distance)
    const thumbTip = landmarks[4];
    const thumbBase = landmarks[2];
    if (Math.abs(thumbTip.x - thumbBase.x) > 0.05) {
      count++;
    }
    
    // Other fingers (check if tip is above base)
    const fingers = [
      { tip: 8, base: 6 },   // Index
      { tip: 12, base: 10 }, // Middle
      { tip: 16, base: 14 }, // Ring
      { tip: 20, base: 18 }  // Pinky
    ];
    
    for (const finger of fingers) {
      if (this.isFingerExtended(landmarks, finger.tip, finger.base)) {
        count++;
      }
    }
    
    return count;
  }

  /**
   * Check if finger is extended
   */
  isFingerExtended(landmarks, tipIndex, baseIndex = null) {
    if (baseIndex === null) {
      baseIndex = tipIndex - 2;
    }
    const tip = landmarks[tipIndex];
    const base = landmarks[baseIndex];
    return tip.y < base.y - 0.02; // Tip is above base
  }

  /**
   * Calculate distance between two points
   */
  calculateDistance(p1, p2) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const dz = (p2.z || 0) - (p1.z || 0);
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  /**
   * Get center of hand (palm)
   */
  getHandCenter(landmarks) {
    const wrist = landmarks[0];
    const middleMCP = landmarks[9];
    return {
      x: (wrist.x + middleMCP.x) / 2,
      y: (wrist.y + middleMCP.y) / 2,
      z: ((wrist.z || 0) + (middleMCP.z || 0)) / 2
    };
  }

  /**
   * Reset state
   */
  reset() {
    this.previousGesture = null;
    this.previousHandCenter = null;
  }
}
