'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useColor } from '@/context/ColorContext';
import { experiences } from '@/data';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const { setVisibility } = useColor();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisibility('experience', entry.isIntersecting);
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
      id="experience"
      className="min-h-screen flex items-center bg-[rgb(var(--background))] mt-20"
    >
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-4 lg:pl-20 lg:pr-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-12 flex items-center">
              <span className="text-[rgb(var(--primary))] font-mono mr-4">02.</span>
              Where I&apos;ve Worked
            </h2>

            <div className="md:grid md:grid-cols-12 gap-4 md:gap-8 flex flex-col md:flex-row">
              {/* Vertical Company Tabs */}
              <div className="md:col-span-4 min-w-[150px] md:min-w-[220px] md:pr-8 flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-[rgb(var(--text-secondary))]">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.company}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all duration-300
                      ${
                        activeTab === index
                          ? 'text-[rgb(var(--primary))] border-[rgb(var(--primary))] bg-[rgba(var(--primary),0.1)]'
                          : 'text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))] hover:bg-[rgba(var(--primary),0.1)]'
                      }
                      ${
                        index === activeTab
                          ? 'border-b-2 md:border-b-0 md:border-l-2'
                          : 'border-b-2 md:border-b-0 md:border-l-2 border-transparent'
                      }`}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="md:col-span-8 flex-1">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[350px]"
                >
                  <h3 className="text-xl text-[rgb(var(--text-primary))] mb-2">
                    {experiences[activeTab].title}
                  </h3>
                  <p className="text-sm font-mono text-[rgb(var(--text-secondary))] mb-4">
                    {experiences[activeTab].duration}
                  </p>
                  <ul className="space-y-4">
                    {experiences[activeTab].points.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start text-[rgb(var(--text-secondary))]"
                      >
                        <span className="text-[rgb(var(--primary))] mr-2 mt-1.5">▹</span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
