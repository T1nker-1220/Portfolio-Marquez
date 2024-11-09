import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';
import ParticlesBackground from '@/app/components/ParticlesBackground';

export default function Home() {
  return (
    <main className="relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
