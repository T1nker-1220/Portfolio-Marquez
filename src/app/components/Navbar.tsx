'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-morphism py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </Link>

        <div className="flex items-center space-x-8">
          <Link href="#home" className="hover:gradient-text transition-all">
            Home
          </Link>
          <Link href="#about" className="hover:gradient-text transition-all">
            About
          </Link>
          <Link href="#projects" className="hover:gradient-text transition-all">
            Projects
          </Link>
          <Link href="#contact" className="hover:gradient-text transition-all">
            Contact
          </Link>
        </div>

        <Link 
          href="https://github.com/T1nker-1220" 
          target="_blank"
          className="text-2xl hover:text-[#00DC82] transition-all"
        >
          <FaGithub />
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar; 