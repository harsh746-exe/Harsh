'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 px-8 max-w-7xl mx-auto">
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
            <p>
            Hey! I&apos;m Harsh, and I&apos;m all about building awesome software that makes a difference. My journey started back in college at Mumbai University where I first got a taste of coding. I was instantly hooked by how powerful and fun it could be to solve problems with just a few lines of code.
            </p>
            
            <p>
            These days, I&apos;m working on my Master&apos;s in Computer Engineering at Syracuse University, diving deep into all sorts of technologies and tackling complex challenges. I&apos;ve spent some time at Tata Consultancy Services (TCS), where I got my hands dirty improving system efficiencies and automating processes to keep things running smoothly.
            </p>

            <p>
            I love using my coding skills to build things that not only work well but also improve people&apos;s lives. Every project is a new adventure, and I&apos;m always eager to see where the next line of code will take me.
            </p>



            <p>Here are a few technologies I&apos;ve been working with recently:</p>
            
            <motion.ul 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-2 text-sm font-mono mt-4"
            >
              {[
    "Python & Java",
    "JavaScript & TypeScript",
    "ReactJS & Node.js",
    "TensorFlow & Keras",
    "AWS & Microsoft Azure",
    "Docker & Kubernetes"
].map((tech) => (                <li key={tech} className="flex items-center">
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
              ease: "easeInOut",
              repeatType: "reverse",
              repeatDelay: 0
            }}
            whileHover={{ 
              scale: 1.05,
              rotate: [0, -2, 2, 0],
              transition: { duration: 0.5 }
            }}
          >
            <Image
              src="/assets/images/about.png"
              alt="Harsh Dwivedi 3D Avatar"
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