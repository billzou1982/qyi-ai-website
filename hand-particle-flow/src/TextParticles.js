/**
 * TextParticles.js
 * Generates particle positions from text using canvas or sphere
 */

/**
 * Generate particle positions for Earth sphere with realistic colors
 * Uses Fibonacci sphere distribution for even particle placement
 * Mimics Google Earth appearance with realistic ocean/land distribution
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

    // Calculate latitude and longitude for realistic Earth mapping
    const lat = Math.asin(y / radius); // -PI/2 to PI/2
    const lon = Math.atan2(z, x);      // -PI to PI

    // Normalize to 0-1 range
    const latNorm = (lat + Math.PI / 2) / Math.PI; // 0 at south pole, 1 at north pole
    const lonNorm = (lon + Math.PI) / (2 * Math.PI);

    // Multi-octave noise for realistic continents
    // Combine multiple frequencies for natural landmass shapes
    const noise1 = Math.sin(x * 2.8 + z * 1.3) * Math.cos(y * 2.1);
    const noise2 = Math.sin(x * 5.2) * Math.cos(z * 4.8) * 0.5;
    const noise3 = Math.sin(y * 8.5 + x * 3.2) * 0.25;
    const continentNoise = noise1 + noise2 + noise3;

    // Latitude-based bias: more ocean near equator, ice at poles
    const polarFactor = Math.abs(latNorm - 0.5) * 2; // 0 at equator, 1 at poles

    // Land/ocean threshold (aim for ~30% land, 70% ocean)
    const landThreshold = 0.2 - polarFactor * 0.15;
    const isLand = continentNoise > landThreshold;

    // Polar regions (latitude > 70° or < -70°)
    const isPolar = polarFactor > 0.77;

    if (isPolar) {
      // Polar ice caps (white with slight blue tint)
      const iceVariation = Math.random() * 0.1;
      colors[i3] = 0.9 + iceVariation;      // R
      colors[i3 + 1] = 0.95 + iceVariation * 0.5; // G
      colors[i3 + 2] = 1.0;                  // B
    } else if (isLand) {
      // Land elevation based on noise
      const elevation = (continentNoise - landThreshold) / (1.0 - landThreshold);

      if (elevation > 0.7) {
        // High mountains (snow-capped, gray-brown)
        const snowAmount = (elevation - 0.7) / 0.3;
        colors[i3] = 0.5 + snowAmount * 0.4 + Math.random() * 0.1;     // R
        colors[i3 + 1] = 0.45 + snowAmount * 0.5 + Math.random() * 0.05; // G
        colors[i3 + 2] = 0.4 + snowAmount * 0.6;                        // B
      } else if (elevation > 0.4) {
        // Mid-elevation (forests/plains - green to yellow-green)
        const forestDensity = Math.sin(lonNorm * 12.5 + latNorm * 8.3) * 0.5 + 0.5;
        colors[i3] = 0.25 + forestDensity * 0.15 + Math.random() * 0.1;    // R
        colors[i3 + 1] = 0.5 + forestDensity * 0.3 + Math.random() * 0.1;  // G
        colors[i3 + 2] = 0.2 + Math.random() * 0.1;                        // B
      } else {
        // Low elevation (beaches, grasslands - yellow-green to tan)
        colors[i3] = 0.6 + Math.random() * 0.2;      // R
        colors[i3 + 1] = 0.55 + Math.random() * 0.15; // G
        colors[i3 + 2] = 0.3 + Math.random() * 0.1;  // B
      }
    } else {
      // Ocean - depth variation based on distance from land
      const oceanDepth = Math.abs(continentNoise - landThreshold) / landThreshold;
      const depthFactor = Math.min(oceanDepth * 1.5, 1.0);

      // Deep ocean (dark blue) to shallow (lighter blue)
      colors[i3] = 0.05 + (1 - depthFactor) * 0.2;         // R
      colors[i3 + 1] = 0.2 + (1 - depthFactor) * 0.4;      // G
      colors[i3 + 2] = 0.4 + (1 - depthFactor) * 0.4;      // B
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
