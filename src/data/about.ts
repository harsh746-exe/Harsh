export interface AboutData {
  name: string;
  title: string;
  description: string[];
  technologies: string[];
  image: string;
}

export const aboutData: AboutData = {
  name: 'Harsh',
  title: 'Software Engineer & AI Researcher',
  description: [
    "Hey! I'm Harsh, and I'm all about building awesome software that makes a difference. My journey started back in college at Mumbai University where I first got a taste of coding. I was instantly hooked by how powerful and fun it could be to solve problems with just a few lines of code.",
    "These days, I'm working on my Master's in Computer Engineering at Syracuse University, diving deep into all sorts of technologies and tackling complex challenges. I've spent some time at Tata Consultancy Services (TCS), where I got my hands dirty improving system efficiencies and automating processes to keep things running smoothly.",
    "I love using my coding skills to build things that not only work well but also improve people's lives. Every project is a new adventure, and I'm always eager to see where the next line of code will take me.",
  ],
  technologies: [
    'Python & Java',
    'JavaScript & TypeScript',
    'ReactJS & Node.js',
    'TensorFlow & Keras',
    'AWS & Microsoft Azure',
    'Docker & Kubernetes',
  ],
  image: '/assets/images/about.png',
};
