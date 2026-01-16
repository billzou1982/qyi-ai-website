/**
 * GestureRecognizer.js
 * Recognizes different hand gestures from MediaPipe landmarks
 */

export class GestureRecognizer {
  constructor() {
    this.previousGesture = null;
    this.previousFingerDistance = null;
  }

  /**
   * Recognize gesture from hand landmarks
   * @param {Array} landmarks - MediaPipe hand landmarks
   * @returns {Object} Gesture information
   */
  recognize(landmarks) {
    if (!landmarks || landmarks.length === 0) {
      return { type: 'none', data: null };
    }

    const extendedFingers = this.countExtendedFingers(landmarks);
    
    // Fist (no extended fingers)
    if (extendedFingers === 0) {
      return {
        type: 'fist',
        data: this.getHandCenter(landmarks)
      };
    }
    
    // One finger (index only)
    if (extendedFingers === 1 && this.isFingerExtended(landmarks, 8)) {
      return {
        type: 'one_finger',
        data: {
          position: landmarks[8], // Index finger tip
          center: this.getHandCenter(landmarks)
        }
      };
    }
    
    // Two fingers (for pinch/zoom)
    if (extendedFingers === 2) {
      const indexTip = landmarks[8];
      const thumbTip = landmarks[4];
      const middleTip = landmarks[12];

      // Use index and middle finger distance (more reliable than thumb-index)
      const distance = this.calculateDistance(indexTip, middleTip);

      const gesture = {
        type: 'two_fingers',
        data: {
          distance,
          center: this.getHandCenter(landmarks),
          indexTip,
          middleTip,
          pinchDelta: 0
        }
      };

      // Calculate pinch delta for zoom
      if (this.previousFingerDistance !== null) {
        gesture.data.pinchDelta = distance - this.previousFingerDistance;
      } else {
        gesture.data.pinchDelta = 0;
      }

      this.previousFingerDistance = distance;
      return gesture;
    }
    
    // Five fingers (open palm)
    if (extendedFingers >= 5) {
      return {
        type: 'five_fingers',
        data: this.getHandCenter(landmarks)
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
    this.previousFingerDistance = null;
  }
}
