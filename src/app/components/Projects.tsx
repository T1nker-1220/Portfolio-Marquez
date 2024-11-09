'use client';
import { motion } from 'framer-motion';
import { projects } from '@/utils/constants';
import Image from 'next/image';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group perspective"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                className="relative glass-morphism rounded-xl overflow-hidden"
                whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block gradient-text hover:scale-105 transition-transform"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 