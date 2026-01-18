# Hand-Controlled 3D Particle Flow

A web-based interactive visual experiment featuring real-time 3D particle physics controlled by hand gestures through your webcam.

## Features

- **Real-time Hand Tracking**: Uses MediaPipe Hands to track your index finger in 3D space
- **Physics-Based Particles**: 5000 particles with repulsion, attraction, and friction forces
- **Visual Trail Effects**: Beautiful ghosting/trailing effects on both particles and finger movement
- **Optimized Performance**: BufferGeometry and efficient physics calculations for smooth 60fps

## Tech Stack

- **Vite** - Fast build tool and dev server
- **Three.js** - 3D rendering engine
- **MediaPipe Hands** - Real-time hand tracking ML model
- **Vanilla JavaScript** - ES6+ modules

## Installation

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

Then open your browser to the URL shown (typically `http://localhost:5173`).

**Important**: You must grant camera permissions when prompted.

## Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

To preview the production build:

```bash
npm run preview
```

## How It Works

### 1. Hand Tracking
- MediaPipe Hands detects your hand through the webcam
- The index finger tip (landmark 8) position is extracted
- Coordinates are mapped from MediaPipe's normalized space (0-1) to Three.js world coordinates

### 2. Particle Physics
Each particle is affected by multiple forces:
- **Home Force**: Particles are drawn back to their original positions (spring-like)
- **Repulsion Force**: Hand presence pushes particles away (inverse-square law)
- **Friction**: Velocity dampening prevents infinite acceleration

### 3. Visual Effects
- **Particle Trails**: Semi-transparent overlay plane creates ghosting effect
- **Finger Ribbon**: Line geometry follows the finger tip with gradient colors
- **Dynamic Colors**: Particle colors change based on velocity (cyan → white)

## File Structure

```
src/
├── main.js           # Entry point, integrates Three.js + MediaPipe
├── ParticleSystem.js # Particle physics and rendering
├── Utils.js          # Coordinate mapping and helper functions
└── style.css         # Fullscreen styling
```

## Performance Notes

- Designed for desktop Chrome/Edge (Chromium-based browsers)
- Runs at 60fps with 5000 particles on modern hardware
- Uses `BufferGeometry` and `Float32Array` for efficient memory usage
- No sprite objects created in loops (performance-friendly)

## Browser Compatibility

**Recommended**: Chrome or Edge (latest version)

MediaPipe Hands requires:
- WebAssembly support
- WebGL support
- Camera access (HTTPS or localhost)

## Customization

You can adjust physics parameters in `ParticleSystem.js`:

```javascript
this.params = {
  homeForce: 0.02,        // Strength of return-to-home
  repulsionForce: 0.5,    // Hand repulsion strength
  repulsionRadius: 3,     // Effective radius of hand influence
  friction: 0.95,         // Velocity damping
  maxVelocity: 0.5        // Speed limit
};
```

## License

MIT

## Credits

Built with:
- [Three.js](https://threejs.org/)
- [MediaPipe](https://google.github.io/mediapipe/)
- [Vite](https://vitejs.dev/)
