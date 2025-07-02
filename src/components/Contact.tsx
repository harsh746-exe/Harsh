'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useColor } from '@/context/ColorContext';

const Contact = () => {
  const sectionRef = useRef(null);
  const { setVisibility } = useColor();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisibility('contact', entry.isIntersecting);
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setVisibility]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen flex items-center bg-[rgb(var(--background))]"
    >
      <div className="w-full">
        <div className="max-w-4xl mx-auto px-8 py-32 lg:pl-32 lg:pr-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-4 flex items-center justify-center">
              <span className="text-[rgb(var(--primary))] mr-4 font-mono">04.</span>
              What's Next?
            </h2>
            <h3 className="text-4xl font-bold text-[rgb(var(--text-primary))] mb-6">
              Get In Touch
            </h3>
            <p className="text-[rgb(var(--text-secondary))] mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want
              to say hi, I'll try my best to get back to you!
            </p>
            <a
              href="mailto:eharshdwivedi@gmail.com"
              className="inline-block px-8 py-4 border-2 border-[rgb(var(--primary))] text-[rgb(var(--primary))] rounded hover:bg-[rgba(var(--primary),0.1)] transition-all"
            >
              Say Hello
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
