import { Experience } from './types';

export const experiences: Experience[] = [
  {
    company: 'iConsult Collaborative',
    title: 'Team Lead & Software Developer',
    duration: 'Mar 2025 – Present',
    points: [
      'Leading an Agile team, streamlining sprint planning, backlog grooming, and PR workflows in Jira and GitLab to boost delivery velocity and improve architecture decision cycles.',
      'Developed and deployed a scalable, SEO-optimized web app (Next.js, TypeScript, React, Tailwind CSS) with lazy loading and SSR, achieving a Lighthouse SEO score of 95+.',
      'Implemented client-side routing and server-rendered navigation via Next.js App Router and Context API, improving load speed and in-app UX.',
      'Built secure RESTful backend APIs and microservices for AWS DynamoDB with Cognito-based authentication, session management, and role-based access control.',
      'Deployed containerized CI/CD workflows with GitHub Actions, Docker, and AWS EC2, cutting deployment time by 40% and enabling zero-downtime releases with automated rollback.',
      'Developing a high-speed API layer for AWS ElastiCache (Redis) to support real-time queries and planning Apache Kafka integration for event-driven streaming.',
    ],
  },
  {
    company: 'NEXIS AI Lab',
    title: 'AI Researcher',
    duration: 'Jan 2025 – Present',
    points: [
      'Designed token-level saliency visualizations for RAG pipelines using LangChain, OpenAI API, and PyTorch, improving explainability for technical and non-technical audiences.',
      'Applied embedding-based semantic similarity search using FAISS and Hugging Face Transformers to enhance entity matching and improve document retrieval accuracy.',
      'Experimenting with interpretable NLP methods (attention rollouts, attribution mapping, SHAP) to boost model traceability and decision transparency.',
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    title: 'Assistant System Engineer',
    duration: 'Jun 2023 – Jul 2024',
    points: [
      'Delivered backend support for European IT operations, integrating Python scripting into enterprise systems to improve uptime, security, and compliance checks.',
      'Automated ticket resolution and infrastructure tasks with Python scripts integrated into ServiceNow REST APIs, reducing manual workload by 4 hours/day and cutting resolution time by 30%.',
      'Built monitoring scripts with PowerShell, Python, and Azure Monitor APIs to track uptime, detect anomalies, and speed up incident response; implemented unit testing and integration testing to validate functionality.',
      'Created internal tooling for Azure Active Directory and RBAC policy management, strengthening authentication workflows and security governance.',
      'Partnered with DevOps teams to manage servers and Azure resources via CLI and IaC practices, improving deployment speed, scalability, and ensuring compliance with security protocols.',
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
