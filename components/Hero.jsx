import dynamic from 'next/dynamic';

// Import AnimatedBackground with SSR disabled
const AnimatedBackground = dynamic(() => import('./AnimatedBackground'), {
  ssr: false
});

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative">
      <AnimatedBackground />
      {/* Rest of your Hero content */}
    </section>
  );
} 