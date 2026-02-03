import { Experience } from './types';

export const experiences: Experience[] = [
  {
    company: 'RELI Group Inc',
    title: 'Platform Engineering Intern',
    duration: 'Jan 2026 – Present',
    points: [
      'Built an NLP-based compliance matrix system using spaCy, PySBD, and Sentence Transformers to extract, categorize, and surface contractual requirements from SOWs, enabling proposal teams to review and track all compliance obligations.',
      'Designed and deployed an acronym annotation and validation engine using deterministic parsing logic and the Schwartz–Hearst algorithm, replacing a $10K/year third-party subscription while improving proposal document quality and review efficiency.',
      'Developed an RAG-based capability matrix and organizational search engine using FAISS, LangChain, and LLM-based reasoning to semantically retrieve past performance data and generate reasoning on organizational fit for new SOW requirements.',
      'Deployed document analysis and RAG services using Azure App Service and Azure Functions, storing documents and persisted vector indexes in Azure Blob Storage, while researching data isolation, security boundaries, and responsible AI deployment to enable future governed, agentic AI workflows.',
    ],
  },
  {
    company: 'iConsult Collaborative',
    title: 'Team Lead & Full Stack Engineer',
    duration: 'Mar 2025 – Dec 2025',
    points: [
      'Led a five-member engineering team to design and ship Gymin, a real-time fitness and sensor analytics platform, improving sprint throughput by 20% through structured planning, reviews, and delivery workflows.',
      'Built a scalable backend using Python and FastAPI to process continuous sensor and user activity streams, adding async execution, Redis caching, and a Kafka-based event pipeline to support sub-100ms API responses.',
      'Implemented structured logging, metrics, and health checks for backend services using AWS CloudWatch, improving production visibility and speeding up incident triage for API and pipeline failures.',
      'Developed and shipped the Gymin webapp using Next.js and React with server-side rendering and optimized routing to improve load performance; integrated Cognito authentication and RBAC for secure multi-tenant access.',
      'Deployed containerized CI/CD workflows with Docker and GitHub Actions on AWS EC2, reducing deployment time by 40% and enabling zero-downtime releases with automated rollback.',
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
    duration: 'Oct 2022 – Jul 2024',
    points: [
      'Delivered backend IT operations for ENI Energy\'s EU infrastructure by integrating automation scripts into enterprise systems, improving uptime by 15% and strengthening security compliance across 100+ servers.',
      'Automated core backend workflows using Python, REST APIs, and ServiceNow integration, reducing manual workload by 4 hours per day and accelerating ticket resolution by 30%.',
      'Designed monitoring and alerting microservices with Python, PowerShell, and Azure Monitor APIs to track performance and failures across 200+ servers, cutting incident detection time by 25%.',
      'Improved system performance by refactoring legacy Python utilities into modular, reusable components and optimizing database queries and caching strategies, reducing API latency by 35% under peak load.',
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
