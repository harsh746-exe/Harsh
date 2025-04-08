'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useColor } from '@/context/ColorContext';

const experiences = [
  {
    company: 'NEXIS Student Technology Lab',
    title: 'AI Researcher',
    duration: 'Jan 2025 - Present · 4 mos',
    points: [
      'Explored core concepts in AI and machine learning to build practical solutions backed by solid research.',
      'Applied machine learning techniques to solve real-world problems, focusing on usability and performance.',
      'Worked closely with teammates on forward-thinking tech projects, sharing ideas and turning them into working systems.'
    ]
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    title: 'Assistant System Engineer',
    duration: 'January 2024 - July 2024',
    points: [
      'Automated monitoring and issue resolution using Python scripting and PowerShell, reducing system downtime by 30% and ensuring 99.9% uptime for critical operations by enabling real-time detection and faster recovery.',
      'Managed servers and user accounts on Azure Cloud with ManageEngine and Microsoft 365, implementing RBAC to enhance security compliance and reduce unauthorized access incidents by 40%.',
      'Built scripts for automated log analysis, patch management, and resource allocation using Python and PowerShell, cutting manual workload by 15 hours per week and improving efficiency by 20%.'
    ]
  },
  {
    company: 'Picky with Picks',
    title: 'Freelance Web Developer',
    duration: 'November 2022 - January 2023',
    points: [
      'Built responsive single-page applications (SPAs) using ReactJS for dynamic user interfaces and Node.js with Express.js for backend, ensuring efficient data handling and reducing API response times by 20%.',
      'Enhanced code maintainability and reduced runtime errors by 20% through the use of TypeScript for type safety, while employing RESTful APIs for seamless data integration between client and server sides.'
    ]
  },
  {
    company: 'AICTE',
    title: 'Cloud Intern',
    duration: 'October 2021 - December 2021',
    points: [
      'Deployed cloud-native applications on AWS (EC2 Instances), integrating Docker containers and managing them with Kubernetes to ensure automated scaling and 99.9% uptime, improving scalability by 40%.',
      'Implemented serverless functions using AWS Lambda for asynchronous processing and Terraform for infrastructure as code (IaC), streamlining resource provisioning and reducing server costs by 20%.'
    ]
  },
  {
    company: 'TCR Innovations',
    title: 'Data Intern',
    duration: 'June 2021 - August 2021',
    points: [
      'Built scalable data pipelines using Python, Pandas, and Flask for ETL processes, reducing data transformation times by 30% and improving data accuracy, while ensuring secure data exchange through RESTful APIs.',
      'Developed interactive dashboards using ReactJS and Power BI, transforming complex datasets into actionable insights, reducing data analysis times by 40%, and enabling real-time monitoring for stakeholders.'
    ]
  }
];

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
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
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
        <div className="max-w-4xl mx-auto px-8">
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

            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              {/* Vertical Company Tabs */}
              <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-[rgb(var(--text-secondary))]">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.company}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all duration-300
                      ${activeTab === index 
                        ? 'text-[rgb(var(--primary))] border-[rgb(var(--primary))] bg-[rgba(var(--primary),0.1)]' 
                        : 'text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))] hover:bg-[rgba(var(--primary),0.1)]'}
                      ${index === activeTab 
                        ? 'border-b-2 md:border-b-0 md:border-l-2' 
                        : 'border-b-2 md:border-b-0 md:border-l-2 border-transparent'}`
                  }
                  >
                    {exp.company}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="flex-1">
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