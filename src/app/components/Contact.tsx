'use client';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '@/utils/constants';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let&apos;s Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.a
            href={`mailto:${personalInfo.social.email}`}
            className="glass-morphism p-6 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaEnvelope className="text-3xl gradient-text" />
            <span>Email Me</span>
          </motion.a>

          <motion.a
            href={personalInfo.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-morphism p-6 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaFacebook className="text-3xl gradient-text" />
            <span>Facebook</span>
          </motion.a>

          <motion.a
            href={personalInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-morphism p-6 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaInstagram className="text-3xl gradient-text" />
            <span>Instagram</span>
          </motion.a>

          <motion.a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-morphism p-6 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaGithub className="text-3xl gradient-text" />
            <span>GitHub</span>
          </motion.a>

          <motion.a
            href={`https://wa.me/${personalInfo.social.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-morphism p-6 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaWhatsapp className="text-3xl gradient-text" />
            <span>WhatsApp</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 