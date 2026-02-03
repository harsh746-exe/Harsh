export interface AboutData {
  name: string;
  title: string;
  description: string[];
  technologies: string[];
  image: string;
}

export const aboutData: AboutData = {
  name: 'Harsh',
  title: 'AI Engineer & Backend Developer',
  description: [
    "Hey! I'm Harsh, and I'm all about building awesome software that makes a difference. My journey started back in college at Mumbai University where I first got a taste of coding. I was instantly hooked by how powerful and fun it could be to solve problems with just a few lines of code.",
    "These days, I'm working on my Master's in Computer Engineering at Syracuse University, diving deep into all sorts of technologies and tackling complex challenges. I've built real-time platforms and backend automation at iConsult and RELI Group, and spent time at Tata Consultancy Services (TCS) improving system efficiencies and automating processes.",
    "I love using my coding skills to build things that not only work well but also improve people's lives. I specialize in Python, FastAPI, Redis, SQL, and distributed systems, with applied experience in NLP, LLMs, RAG, and production-grade APIs.",
  ],
  technologies: [
    'Python & Java',
    'JavaScript & TypeScript',
    'React & Next.js',
    'FastAPI & Node.js',
    'AWS & Microsoft Azure',
    'Docker & Kubernetes',
    'Redis & Kafka',
    'LangChain & RAG',
  ],
  image: '/assets/images/about.png',
};
