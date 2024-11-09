import dynamic from 'next/dynamic';

// Use dynamic import for Three.js components
const ThreeScene = dynamic(() => import('./ThreeSceneComponent'), {
  ssr: false
});

export default ThreeScene; 