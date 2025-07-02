import { Experience } from './types';

export const experiences: Experience[] = [
  {
    company: 'iConsult Collaborative',
    title: 'Team Lead & Full-Stack Developer',
    duration: 'Mar 2025 – Present',
    points: [
      'Led a 4-member Agile team, managing system architecture, backlog grooming, and code reviews, increasing delivery speed.',
      'Developed and deployed a scalable, SEO-optimized web app using Next.js, React, and Tailwind CSS, achieving 45% faster load times and a Lighthouse SEO score of 95+.',
      'Developed multi-floor, multi-date occupancy visualizations with Recharts to deliver real-time insights into gym equipment usage.',
      'Architected client-side routing and state management using React Router and Context API to support seamless navigation.',
      'Simulated backend services using AWS S3 and DynamoDB, and automated analytics data generation using Node.js scripts.',
      'Implemented Git Actions CI/CD workflows, reducing deployment time by 40% and enabling zero-downtime production updates.',
    ],
  },
  {
    company: 'NEXIS AI Lab',
    title: 'AI Researcher',
    duration: 'Jan 2025 – Present',
    points: [
      'Researching explainability in large language models by integrating token-level saliency into a retrieval-augmented generation (RAG) workflow.',
      'Applied embedding-based semantic similarity to compare entities, enhancing RAG-driven document retrieval and relevance.',
      'Integrating LLMs into CLI tools via Poetry and LangChain, enabling intelligent code workflows like code optimization.',
      'Exploring emerging techniques in interpretable NLP (attention rollouts, attribution mapping) to improve LLM traceability.',
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    title: 'Assistant System Engineer',
    duration: 'Jan 2024 - Jul 2024',
    points: [
      'Provided IT infrastructure support for ENI, managing user access, Azure resources, and enterprise systems across Europe.',
      'Collaborated with DevOps and cloud teams to administer servers, optimize Azure resources, and ensure compliance with RBAC and data security protocols.',
      'Developed Python scripts to automate ticket resolution and routine tasks via ServiceNow APIs, reducing resolution time by 30%.',
      'Led the migration of over 1,500 user profiles, resources, and SharePoint data to new domains during organizational restructuring.',
    ],
  },
  {
    company: 'Picky with Picks',
    title: 'Full-Stack Developer (Freelance)',
    duration: 'Nov 2022 – Jan 2023',
    points: [
      'Delivered a responsive single-page application using ReactJS, TypeScript, Node.js, and Express.js, ensuring seamless client-server communication with minimal load times.',
      'Designed and integrated RESTful APIs, improving backend maintainability and reducing client-side runtime errors by 40%.',
      'Reduced load time by 35% through API throttling, lazy loading, and error boundary implementation.',
      'Implemented form validation, session storage, and modular state logic to enhance UX and reduce submission bugs across workflows.',
    ],
  },
  {
    company: 'TCR Innovation',
    title: 'Data Engineering Intern',
    duration: 'Jun 2021 – Aug 2021',
    points: [
      'Built automated ETL pipelines using Python, Pandas, and Flask, reducing manual processing time by 50% and improving accuracy across financial datasets.',
      'Developed real-time dashboards with Power BI, enabling KPI monitoring with under 2s latency across 10,000+ data points.',
      'Designed RESTful APIs with modular service architecture to support secure and scalable multi-client data ingestion pipelines.',
    ],
  },
];
