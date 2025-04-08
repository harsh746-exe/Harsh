'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useColor } from '@/context/ColorContext';

const projects = [
  {
    title: 'DevChat',
    description: 'AI-powered development assistant that leverages LangChain and OpenAI API for intelligent code suggestions and automated task handling. Features a React-based chat interface with real-time interactions.',
    tech: ['Python', 'TypeScript', 'React', 'Node.js', 'LangChain', 'OpenAI API'],
    duration: 'March 2025 - Present',
    points: [
      'Developed AI-powered DevChat, leveraging LangChain and OpenAI API to generate intelligent code suggestions and responses, enhancing developer productivity by automating repetitive tasks.',
      'Built and optimized a React-based chat interface with Node.js and TypeScript, ensuring seamless real-time interactions while improving backend efficiency for faster response times.'
    ],
    image: '/assets/projects/DevChat.png'
  },
  {
    title: 'Apache Superset Docker Setup',
    description: 'A comprehensive Docker-based setup for Apache Superset, an open-source data visualization and business intelligence platform, featuring containerized services with PostgreSQL and Redis integration.',
    tech: ['Docker', 'Docker Compose', 'PostgreSQL', 'Redis', 'Apache Superset', 'Python'],
    duration: 'February 2024 - Present',
    points: [
      'Architected a containerized Apache Superset environment using Docker and Docker Compose, enabling rapid deployment and consistent development environments.',
      'Implemented PostgreSQL 13 as the metadata database and Redis for caching, optimizing query performance and system reliability.',
      'Configured secure environment variables and Docker volumes for data persistence, ensuring robust data management and system security.'
    ],
    image: '/assets/projects/superset.png'
  },
  {
    title: 'Text Generation Inference',
    description: 'Optimized large-scale text generation system using Hugging Face Transformers and PyTorch, with FastAPI integration for efficient model serving.',
    tech: ['Python', 'Hugging Face', 'PyTorch', 'FastAPI'],
    duration: 'January 2024 - April 2024',
    points: [
      'Optimized Hugging Face Transformers for large-scale text generation tasks, reducing inference time by 30% through model parallelism.',
      'Developed and deployed RESTful APIs using FastAPI to serve text generation models with sub-200ms latency.',
      'Enhanced model accuracy by 15% using mixed-precision training and fine-tuning in PyTorch.'
    ],
    image: '/assets/projects/testgen.png'
  },
  {
    title: 'Trello Clone',
    description: 'A full-stack task management application built with Python, Flask, MongoDB, and ReactJS, handling over 5,000 requests per day with optimized performance.',
    tech: ['Python', 'Flask', 'MongoDB', 'ReactJS', 'RESTful APIs'],
    duration: 'October 2024 - December 2024',
    points: [
      'Designed and developed RESTful APIs using Flask to handle over 5,000 requests per day efficiently, optimizing performance to achieve an average latency of 120ms.',
      'Utilized MongoDB to manage and store over 10,000 tasks efficiently, implementing indexing to reduce query time by 30%, enhancing data retrieval speed.'
    ],
    image: '/assets/projects/trello.png'
  },
  {
    title: 'Streamlit Project',
    description: 'Enhanced the Streamlit framework with optimized component rendering and custom React components, improving performance and user experience.',
    tech: ['Python', 'Streamlit', 'React', 'JavaScript'],
    duration: 'October 2024 - December 2024',
    points: [
      'Optimized the Streamlit framework by enhancing component rendering efficiency, reducing load times by 25% for data-intensive applications.',
      'Developed custom components using React and JavaScript, seamlessly integrating them with the Streamlit API.',
      'Designed a modular architecture in Python to simplify adding new widgets and features, cutting development time by 30%.'
    ],
    image: '/assets/projects/streamlit.png'
  },
  {
    title: 'Sign Language Recognition',
    description: 'Real-time hand gesture recognition system using CNN and OpenCV, processing over 10,000 images with 90% accuracy.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'CNN'],
    duration: 'January 2022 - April 2022',
    points: [
      'Developed a CNN model using TensorFlow to classify over 10,000 images with 90% accuracy for real-time hand gesture recognition.',
      'Optimized the CNN model to reduce prediction latency by 20%, enabling quicker response times.',
      'Integrated OpenCV for real-time video processing with sub-200ms frame processing time.'
    ],
    image: '/assets/projects/signlang.jpeg'
  }
];

const Projects = () => {
  const sectionRef = useRef(null);
  const { setVisibility } = useColor();

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisibility('projects', entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [setVisibility]);

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-12 flex items-center">
          <span className="text-[rgb(var(--primary))] mr-4 font-mono">03.</span>
          Some Things I&apos;ve Built
        </h2>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative grid md:grid-cols-12 gap-4 md:gap-8">
                <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-[rgba(var(--primary),0.1)]">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-[rgba(var(--primary),0.1)] mix-blend-multiply" />
                  </div>
                </div>
                
                <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-[rgb(var(--text-primary))]">{project.title}</h3>
                    <p className="text-sm font-mono text-[rgb(var(--text-secondary))]">{project.duration}</p>
                    <div className="bg-[rgba(var(--primary),0.1)] p-6 rounded-lg">
                      <p className="text-[rgb(var(--text-secondary))]">{project.description}</p>
                    </div>
                    <ul className="space-y-2">
                      {project.points.map((point, idx) => (
                        <li key={idx} className="text-[rgb(var(--text-secondary))] text-sm flex items-start">
                          <span className="text-[rgb(var(--primary))] mr-2 mt-1">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-[rgb(var(--primary))] text-sm font-mono">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Show All Projects Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <a 
              href="https://github.com/harsh746-exe?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative grid md:grid-cols-12 gap-4 md:gap-8 bg-[rgba(var(--primary),0.05)] rounded-lg p-6 hover:bg-[rgba(var(--primary),0.1)] transition-all duration-300">
                <div className="md:col-span-4 flex items-center justify-center">
                  <div className="relative w-32 h-32 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-full h-full text-[rgb(var(--primary))]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="md:col-span-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-3xl font-bold text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--primary))] transition-colors">
                        See All Projects
                      </h3>
                      <svg 
                        className="w-6 h-6 text-[rgb(var(--primary))] transform translate-x-0 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <p className="text-lg text-[rgb(var(--text-secondary))] group-hover:text-[rgb(var(--text-primary))] transition-colors">
                      Explore all my work on GitHub, featuring various projects from small utilities to fullstack and open source applications.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                      {['15+ Projects', 'open source'].map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-[rgba(var(--primary),0.1)] rounded-full text-[rgb(var(--primary))] text-sm font-mono group-hover:bg-[rgba(var(--primary),0.2)] transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 