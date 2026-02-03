import { Project } from './types';

export const projects: Project[] = [
  {
    title: 'RAG-Based Capability Matrix Analysis System',
    description:
      'Designed and implemented a Retrieval-Augmented Generation (RAG) pipeline for intelligent document comparison and capability analysis across technical specifications, research papers, and compliance reports.',
    tech: ['Python', 'LangChain', 'FAISS', 'Chroma', 'FastAPI', 'Docker'],
    duration: 'Jan 2026 – Present',
    points: [
      'Designed and implemented a Retrieval-Augmented Generation (RAG) pipeline for intelligent document comparison and capability analysis across technical specifications, research papers, and compliance reports.',
      'Developed backend services using LangChain, OpenAI API, and FAISS/Chroma vector stores to retrieve contextually relevant document segments with reasoning, confidence scores, and supporting evidence.',
      'Built RAG-based capability matrix and organizational search engine using FAISS, LangChain, and LLM-based reasoning to semantically retrieve past performance data and generate reasoning on organizational fit for new SOW requirements.',
      'Optimized text chunking, semantic search, and vector store caching to reduce retrieval latency and improve LLM accuracy on large-scale document collections.',
    ],
    image: '/assets/projects/rag-system.png',
  },
  {
    title: 'CodeFlow-AI',
    description:
      'A CLI + web-based AI pair programmer with contextual memory using FastAPI, LangChain agents, and RAG. Multi-turn task planning and architecture suggestions via prompt chaining and user session tracking.',
    tech: ['Python', 'LangChain', 'OpenAI API', 'FastAPI', 'CLI'],
    duration: 'May 2025 – Present',
    points: [
      'Developed a CLI + web-based AI pair programmer with contextual memory using FastAPI, LangChain agents, and RAG.',
      'Project multi-turn task planning and architecture suggestions via prompt chaining and user session tracking.',
      'Designed FastAPI interfaces for local and remote collaboration, with customizable prompt templates for different dev use cases.',
    ],
    image: '/assets/projects/codeflowai.png',
  },
  {
    title: 'DevPack',
    description:
      'A command-line toolkit for intelligent workflows like code analysis, test generation, and refactoring using LLMs. Modular CLI commands with Poetry and workflow YAMLs, automating coding tasks with GPT backend integration.',
    tech: ['Python', 'LangChain', 'OpenAI API', 'Poetry', 'CLI'],
    duration: 'Mar 2025 – Present',
    points: [
      'Built DevPack, a command-line toolkit for intelligent workflows like code analysis, test generation, and refactoring using LLMs.',
      'Engineered modular CLI commands with Poetry and workflow YAMLs, automating coding tasks with GPT backend integration.',
      'Reduced manual coding effort by 40% in testing by streamlining multi-step dev operations via configurable, explainable prompts.',
    ],
    image: '/assets/projects/devpack.png',
  },
  {
    title: 'Apache Superset Docker Setup',
    description:
      'A comprehensive Docker-based setup for Apache Superset, an open-source data visualization and business intelligence platform, featuring containerized services with PostgreSQL and Redis integration.',
    tech: ['Docker', 'Docker Compose', 'PostgreSQL', 'Redis', 'Apache Superset', 'Python'],
    duration: 'February 2024 - Present',
    points: [
      'Architected a containerized Apache Superset environment using Docker and Docker Compose, enabling rapid deployment and consistent development environments.',
      'Implemented PostgreSQL 13 as the metadata database and Redis for caching, optimizing query performance and system reliability.',
      'Configured secure environment variables and Docker volumes for data persistence, ensuring robust data management and system security.',
    ],
    image: '/assets/projects/superset.png',
  },
  {
    title: 'Text Generation Inference',
    description:
      'Optimized large-scale text generation system using Hugging Face Transformers and PyTorch, with FastAPI integration for efficient model serving.',
    tech: ['Python', 'Hugging Face', 'PyTorch', 'FastAPI'],
    duration: 'January 2024 - April 2024',
    points: [
      'Optimized Hugging Face Transformers for large-scale text generation tasks, reducing inference time by 30% through model parallelism.',
      'Developed and deployed RESTful APIs using FastAPI to serve text generation models with sub-200ms latency.',
      'Enhanced model accuracy by 15% using mixed-precision training and fine-tuning in PyTorch.',
    ],
    image: '/assets/projects/testgen.png',
  },
  {
    title: 'Trello Clone',
    description:
      'A full-stack task management application built with Python, Flask, MongoDB, and ReactJS, handling over 5,000 requests per day with optimized performance.',
    tech: ['Python', 'Flask', 'MongoDB', 'ReactJS', 'RESTful APIs'],
    duration: 'October 2024 - December 2024',
    points: [
      'Designed and developed RESTful APIs using Flask to handle over 5,000 requests per day efficiently, optimizing performance to achieve an average latency of 120ms.',
      'Utilized MongoDB to manage and store over 10,000 tasks efficiently, implementing indexing to reduce query time by 30%, enhancing data retrieval speed.',
    ],
    image: '/assets/projects/trello.png',
  },
  {
    title: 'Streamlit Project',
    description:
      'Enhanced the Streamlit framework with optimized component rendering and custom React components, improving performance and user experience.',
    tech: ['Python', 'Streamlit', 'React', 'JavaScript'],
    duration: 'October 2024 - December 2024',
    points: [
      'Optimized the Streamlit framework by enhancing component rendering efficiency, reducing load times by 25% for data-intensive applications.',
      'Developed custom components using React and JavaScript, seamlessly integrating them with the Streamlit API.',
      'Designed a modular architecture in Python to simplify adding new widgets and features, cutting development time by 30%.',
    ],
    image: '/assets/projects/streamlit.png',
  },
  {
    title: 'Sign Language Recognition',
    description:
      'Real-time hand gesture recognition system using CNN and OpenCV, processing over 10,000 images with 90% accuracy.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'CNN'],
    duration: 'January 2022 - April 2022',
    points: [
      'Developed a CNN model using TensorFlow to classify over 10,000 images with 90% accuracy for real-time hand gesture recognition.',
      'Optimized the CNN model to reduce prediction latency by 20%, enabling quicker response times.',
      'Integrated OpenCV for real-time video processing with sub-200ms frame processing time.',
    ],
    image: '/assets/projects/signlang.jpeg',
  },
];
