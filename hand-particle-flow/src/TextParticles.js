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

  // V3: Distinct layers. 10% Atmosphere, 90% Surface
  const atmosphereCount = Math.floor(particleCount * 0.15);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;

    // Fibonacci sphere distribution
    const t = i / particleCount;
    const inclination = Math.acos(1 - 2 * t);
    const azimuth = angleIncrement * i;

    // V3: Atmosphere particles are slightly larger and have variations in depth
    const isAtmosphere = i < atmosphereCount;
    const currentRadius = isAtmosphere
      ? radius * (1.02 + Math.random() * 0.05)
      : radius;

    // Convert spherical to Cartesian coordinates
    const x = currentRadius * Math.sin(inclination) * Math.cos(azimuth);
    const y = currentRadius * Math.sin(inclination) * Math.sin(azimuth);
    const z = currentRadius * Math.cos(inclination);

    positions[i3] = x;
    positions[i3 + 1] = y;
    positions[i3 + 2] = z;

    if (isAtmosphere) {
      // Atmospheric glow: soft cyan-blue with variable opacity (handled by color intensity)
      colors[i3] = 0.1;
      colors[i3 + 1] = 0.4;
      colors[i3 + 2] = 0.8;
      continue;
    }

    // Default Surface Colors (will be overridden by texture if available)
    const lat = Math.asin(y / radius);
    const latNorm = (lat + Math.PI / 2) / Math.PI;
    const noise1 = Math.sin(x * 3.0 + z * 1.5) * Math.cos(y * 2.5);
    const continentNoise = noise1;
    const polarFactor = Math.abs(latNorm - 0.5) * 2;
    const landThreshold = 0.1;

    if (polarFactor > 0.85) {
      colors[i3] = 0.9; colors[i3 + 1] = 0.9; colors[i3 + 2] = 1.0;
    } else if (continentNoise > landThreshold) {
      colors[i3] = 0.2; colors[i3 + 1] = 0.4; colors[i3 + 2] = 0.15;
    } else {
      colors[i3] = 0.0; colors[i3 + 1] = 0.1; colors[i3 + 2] = 0.5;
    }
  }

  return { positions, colors };
}

/**
 * Generate Earth colors from a texture map with simple lighting.
 * @param {Float32Array} positions - Particle positions (x, y, z).
 * @param {number} radius - Sphere radius.
 * @param {Object} textureData - { data: Uint8ClampedArray, width: number, height: number }
 * @param {Object} options - Optional lighting settings.
 * @returns {Float32Array} Colors array.
 */
export function generateEarthColorsFromTexture(positions, radius, textureData, options = {}) {
  const { data, width, height } = textureData;
  const colors = new Float32Array(positions.length);

  for (let i = 0; i < positions.length; i += 3) {
    const x = positions[i];
    const y = positions[i + 1];
    const z = positions[i + 2];

    const currentRadius = Math.sqrt(x * x + y * y + z * z);

    // V3: Preserve atmosphere particles (those with radius > original radius)
    if (currentRadius > radius * 1.01) {
      colors[i] = 0.1;
      colors[i + 1] = 0.4;
      colors[i + 2] = 0.8;
      continue;
    }

    const lat = Math.asin(y / currentRadius);
    const lon = Math.atan2(z, x);

    const u = (lon + Math.PI) / (2 * Math.PI);
    const v = 1 - (lat + Math.PI / 2) / Math.PI;

    const px = Math.min(width - 1, Math.max(0, Math.floor(u * (width - 1))));
    const py = Math.min(height - 1, Math.max(0, Math.floor(v * (height - 1))));
    const idx = (py * width + px) * 4;

    // V3: Sample colors and apply land-vibrancy boost
    let r = data[idx] / 255;
    let g = data[idx + 1] / 255;
    let b = data[idx + 2] / 255;

    // Detect land (yellowish/greenish/brownish vs blue/dark)
    const isLand = (g > b * 1.05) || (r > b * 1.05 && g > 0.2);

    if (isLand) {
      // V3: Boost land colors for visibility
      r = Math.min(1.0, r * 1.15);
      g = Math.min(1.0, g * 1.15);
    } else {
      // Deep ocean colors - keep them rich but dark
      r *= 0.7;
      g *= 0.7;
      b = Math.min(1.0, b * 1.05);
    }

    colors[i] = r;
    colors[i + 1] = g;
    colors[i + 2] = b;
  }

  return colors;
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
