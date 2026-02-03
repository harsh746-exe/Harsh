export interface HeroData {
  greeting: string;
  name: string;
  title: string;
  description: string;
  resumeUrl: string;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
    phone?: string;
  };
}

export const heroData: HeroData = {
  greeting: 'Hi, my name is',
  name: 'Harsh Dwivedi.',
  title: 'AI Engineer & Backend Developer',
  description:
    'AI Engineer and Backend developer with 3+ years of experience building real-time platforms, backend automation services, and production-grade systems across energy, fintech, and tech consulting. Skilled in Python, FastAPI, Redis, SQL, and distributed system design, with applied experience using NLP, LLMs, embeddings, and RAG architecture to enhance product features.',
  resumeUrl: '/assets/resume/Harsh_Resume.pdf',
  socialLinks: {
    github: 'https://github.com/harsh746-exe',
    linkedin: 'https://www.linkedin.com/in/harsh-dwivedi-854b39202/',
    email: 'edwivediharsh@gmail.com',
    phone: '+1 (680) 216-2032',
  },
};
