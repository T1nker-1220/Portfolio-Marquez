'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/utils/constants';

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % personalInfo.skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
      
      <motion.div 
        className="text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-6xl font-bold mb-6"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I&apos;m{' '}
          <span className="gradient-text">
            John Nathaniel Marquez
          </span>
        </motion.h1>

        <div className="h-20 overflow-hidden">
          <motion.div
            animate={{ y: -currentSkill * 80 }}
            transition={{ duration: 0.5 }}
          >
            {personalInfo.skills.map((skill, index) => (
              <div key={index} className="h-20 flex items-center justify-center">
                <h2 className="text-4xl font-semibold gradient-text">
                  {skill}
                </h2>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#about"
            className="glass-morphism px-8 py-3 rounded-full inline-block
                     hover:scale-105 transition-transform duration-300
                     border border-[#00DC82]/30"
          >
            Discover More
          </a>
        </motion.div>
      </motion.div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[20vw] h-[20vw] rounded-full bg-gradient-to-r 
                       from-[#00DC82]/20 to-[#0047E1]/20 blur-3xl"
            animate={{
              x: [Math.random() * 100, Math.random() * -100],
              y: [Math.random() * 100, Math.random() * -100],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero; 