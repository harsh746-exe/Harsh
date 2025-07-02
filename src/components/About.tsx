'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { aboutData } from '@/data/about';

const About = () => {
  return (
    <section id="about" className="py-20 px-8 max-w-7xl mx-auto lg:pl-32 lg:pr-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-8 flex items-center">
            <span className="text-[rgb(var(--primary))] font-mono mr-4">01.</span>
            About Me
          </h2>

          <div className="space-y-4 text-[rgb(var(--text-secondary))]">
            {aboutData.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <p>Here are a few technologies I&apos;ve been working with recently:</p>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-2 text-sm font-mono mt-4"
            >
              {aboutData.technologies.map(tech => (
                <li key={tech} className="flex items-center">
                  <span className="text-[rgb(var(--primary))] mr-2">▹</span>
                  {tech}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mx-auto"
        >
          <motion.div
            className="relative w-full max-w-[437px] aspect-square rounded-lg overflow-hidden"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
              repeatType: 'reverse',
              repeatDelay: 0,
            }}
            whileHover={{
              scale: 1.05,
              rotate: [0, -2, 2, 0],
              transition: { duration: 0.5 },
            }}
          >
            <Image
              src={aboutData.image}
              alt={`${aboutData.name} Dwivedi 3D Avatar`}
              width={437}
              height={437}
              className="w-full h-full object-contain drop-shadow-2xl transition-all duration-300"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
