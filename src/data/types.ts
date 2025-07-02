export interface Project {
  title: string;
  description: string;
  tech: string[];
  duration: string;
  points: string[];
  image: string;
  link?: string;
}

export interface Experience {
  company: string;
  title: string;
  duration: string;
  points: string[];
}

export interface Education {
  title: string;
  description?: string[];
  grade?: string;
  date: string;
}

export interface Skill {
  title: string;
  description: string;
}

export interface Award {
  title: string;
  description?: string[];
  date: string;
}

export interface Publication {
  title: string;
  description?: string[];
  date: string;
  link?: string;
}

export interface Language {
  name: string;
  proficiency: string;
}
