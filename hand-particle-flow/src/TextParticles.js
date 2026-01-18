/**
 * TextParticles.js
 * Generates particle positions from text using canvas or sphere
 */

/**
 * Generate particle positions for Earth sphere with realistic colors
 * Uses Fibonacci sphere distribution for even particle placement
 * @param {number} radius - Sphere radius
 * @param {number} particleCount - Number of particles to generate
 * @returns {Object} { positions: Float32Array, colors: Float32Array }
 */
export function generateEarthSphere(radius, particleCount) {
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  // Golden ratio for Fibonacci sphere
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  const angleIncrement = Math.PI * 2 * goldenRatio;

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;

    // Fibonacci sphere distribution
    const t = i / particleCount;
    const inclination = Math.acos(1 - 2 * t);
    const azimuth = angleIncrement * i;

    // Convert spherical to Cartesian coordinates
    const x = radius * Math.sin(inclination) * Math.cos(azimuth);
    const y = radius * Math.sin(inclination) * Math.sin(azimuth);
    const z = radius * Math.cos(inclination);

    positions[i3] = x;
    positions[i3 + 1] = y;
    positions[i3 + 2] = z;

    // Generate Earth-like colors based on latitude and noise
    // Use y-coordinate (latitude) and some randomness for landmass distribution
    const latitude = y / radius; // -1 to 1
    const noise = Math.sin(x * 3.5) * Math.cos(z * 3.5) + Math.sin(y * 2.7);

    // Determine if ocean or land based on latitude and noise
    const isLand = noise > 0.1 - Math.abs(latitude) * 0.3;

    if (isLand) {
      // Land: varies from green (low) to brown (high) to white (polar)
      if (Math.abs(latitude) > 0.7) {
        // Polar ice caps (white/light blue)
        colors[i3] = 0.9 + Math.random() * 0.1;     // R
        colors[i3 + 1] = 0.95 + Math.random() * 0.05; // G
        colors[i3 + 2] = 1.0;                        // B
      } else if (noise > 0.5) {
        // Mountains (brown/gray)
        colors[i3] = 0.5 + Math.random() * 0.2;     // R
        colors[i3 + 1] = 0.4 + Math.random() * 0.1; // G
        colors[i3 + 2] = 0.3 + Math.random() * 0.1; // B
      } else {
        // Vegetation (green)
        colors[i3] = 0.2 + Math.random() * 0.2;     // R
        colors[i3 + 1] = 0.6 + Math.random() * 0.2; // G
        colors[i3 + 2] = 0.2 + Math.random() * 0.1; // B
      }
    } else {
      // Ocean: deep blue to light blue
      const depth = 0.3 + Math.random() * 0.4;
      colors[i3] = 0.0 + depth * 0.2;               // R
      colors[i3 + 1] = 0.2 + depth * 0.5;           // G
      colors[i3 + 2] = 0.5 + depth * 0.5;           // B
    }
  }

  return { positions, colors };
}

/**
 * Generate particle positions from text
 * @param {string} text - Text to convert to particles
 * @param {number} particleCount - Number of particles to generate
 * @param {number} worldRange - World coordinate range
 * @returns {Float32Array} Positions array for particles
 */
export function generateTextParticles(text, particleCount, worldRange = 10) {
  // Create offscreen canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas size with generous padding
  const fontSize = 200;
  canvas.width = text.length * fontSize * 1.2; // Increased for more padding
  canvas.height = fontSize * 1.5;
  
  // Draw text
  ctx.fillStyle = 'white';
  ctx.font = `bold ${fontSize}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  
  // Get pixel data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;
  
  // Find all white pixels (text pixels)
  const textPixels = [];
  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const index = (y * canvas.width + x) * 4;
      const alpha = pixels[index + 3];
      if (alpha > 128) { // Pixel is part of text
        textPixels.push({ x, y });
      }
    }
  }
  
  // Sample particles from text pixels
  const positions = new Float32Array(particleCount * 3);
  const scaleX = (worldRange * 2) / canvas.width;
  const scaleY = (worldRange * 2) / canvas.height;
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    
    if (textPixels.length > 0) {
      // Pick random pixel from text
      const pixel = textPixels[Math.floor(Math.random() * textPixels.length)];
      
      // Convert to world coordinates (centered)
      positions[i3] = (pixel.x - canvas.width / 2) * scaleX;
      positions[i3 + 1] = -(pixel.y - canvas.height / 2) * scaleY; // Flip Y
      positions[i3 + 2] = (Math.random() - 0.5) * 2; // Slight depth variation
    } else {
      // Fallback to random position
      positions[i3] = (Math.random() - 0.5) * worldRange * 2;
      positions[i3 + 1] = (Math.random() - 0.5) * worldRange * 2;
      positions[i3 + 2] = (Math.random() - 0.5) * worldRange;
    }
  }
  
  return positions;
}
