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
  };
}

export const heroData: HeroData = {
  greeting: 'Hi, my name is',
  name: 'Harsh Dwivedi.',
  title: 'Software Engineer & AI Enthusiast',
  description:
    "I'm a software engineer enthusiastic about emerging technologies and their transformative potential, currently focused on building innovative projects that leverage the power of AI.",
  resumeUrl: '/assets/resume/Harsh_Resume.pdf',
  socialLinks: {
    github: 'https://github.com/harsh746-exe',
    linkedin: 'https://www.linkedin.com/in/harsh-dwivedi-854b39202/',
    email: 'edwivediharsh@gmail.com',
  },
};
