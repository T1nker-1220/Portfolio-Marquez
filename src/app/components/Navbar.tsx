'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

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
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
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

        {/* GitHub Icon - Desktop */}
        <Link 
          href="https://github.com/T1nker-1220" 
          target="_blank"
          className="hidden md:block text-2xl hover:text-[#00DC82] transition-all"
        >
          <FaGithub />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-screen w-[250px] glass-morphism md:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <Link 
                  href="#home" 
                  className="text-xl hover:gradient-text transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="#about" 
                  className="text-xl hover:gradient-text transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="#projects" 
                  className="text-xl hover:gradient-text transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link 
                  href="#contact" 
                  className="text-xl hover:gradient-text transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  href="https://github.com/T1nker-1220" 
                  target="_blank"
                  className="text-2xl hover:text-[#00DC82] transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaGithub />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;