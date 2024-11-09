'use client';
import { motion } from 'framer-motion';
import { personalInfo } from '@/utils/constants';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="glass-morphism rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00DC82]/10 to-[#0047E1]/10" />
          
          <motion.h2 
            className="text-4xl font-bold mb-8 gradient-text"
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                I am an aspiring web designer with a passion for creating visually appealing 
                and user-friendly websites. With a solid understanding of HTML and CSS, 
                I&apos;m excited to explore the world of web design further.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <div className="glass-morphism p-4 rounded-lg">
                <h4 className="font-semibold">{personalInfo.education.school}</h4>
                <p className="text-gray-300">{personalInfo.education.course}</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {personalInfo.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="glass-morphism p-4 rounded-lg text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 