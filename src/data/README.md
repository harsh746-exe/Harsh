# Portfolio Data Structure

This directory contains all the data for the portfolio website in a modular, TypeScript-based structure. This makes it easy to update content without touching the component code.

## Structure

```
src/data/
├── types.ts          # TypeScript interfaces for all data structures
├── index.ts          # Main export file for all data
├── hero.ts           # Hero section data (name, title, description, social links)
├── about.ts          # About section data (description, technologies)
├── projects.ts       # Projects data (title, description, tech stack, etc.)
├── experience.ts     # Work experience data
├── education.ts      # Education history
├── skills.ts         # Skills and technologies
├── awards.ts         # Awards and achievements
├── publications.ts   # Publications and research
├── languages.ts      # Language proficiencies
└── README.md         # This file
```

## How to Update Content

### Adding a New Project

1. Open `src/data/projects.ts`
2. Add a new project object to the `projects` array:

```typescript
{
  title: 'Your Project Name',
  description: 'Brief description of your project',
  tech: ['React', 'Node.js', 'MongoDB'],
  duration: 'January 2024 - March 2024',
  points: [
    'Key achievement or feature 1',
    'Key achievement or feature 2',
    'Key achievement or feature 3'
  ],
  image: '/assets/projects/your-project.png'
}
```

### Adding New Experience

1. Open `src/data/experience.ts`
2. Add a new experience object to the `experiences` array:

```typescript
{
  company: 'Company Name',
  title: 'Your Job Title',
  duration: 'Start Date - End Date',
  points: [
    'Key responsibility or achievement 1',
    'Key responsibility or achievement 2'
  ]
}
```

### Updating Personal Information

1. **Hero Section**: Edit `src/data/hero.ts` to update name, title, description, and social links
2. **About Section**: Edit `src/data/about.ts` to update personal description and technologies
3. **Contact Information**: Update social links in `src/data/hero.ts`

### Adding New Skills

1. Open `src/data/skills.ts`
2. Add new skill categories or update existing ones:

```typescript
{
  title: 'New Skill Category',
  description: `
    ![devicon](https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/technology/technology-original.svg)
    ![devicon](https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/another/another-original.svg)
  `
}
```

## Benefits of This Structure

1. **Separation of Concerns**: Data is separated from presentation logic
2. **Easy Updates**: Content can be updated without touching component code
3. **Type Safety**: TypeScript interfaces ensure data consistency
4. **Maintainability**: Clear structure makes it easy to find and update specific content
5. **Scalability**: Easy to add new sections or modify existing ones

## Data Types

All data structures are defined in `src/data/types.ts`. This ensures type safety and provides IntelliSense support when editing data files.

## Importing Data

Components import data from the main index file:

```typescript
import { projects, experiences, heroData } from '@/data';
```

Or import specific data files:

```typescript
import { projects } from '@/data/projects';
import { heroData } from '@/data/hero';
```
