# Harsh Dwivedi's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing my skills, projects, and experience in software development.

## Features

- 🎨 Modern UI/UX with a clean, professional design
- 🌗 Dark/Light mode support with smooth transitions
- 🎮 Interactive elements including Snake & Pacman games
- 📱 Fully responsive design for all devices
- 🚀 Optimized performance with Next.js
- 🖼️ Image optimization and lazy loading
- ⚡ Fast page loads with dynamic imports
- 🎯 SEO optimized with metadata
- 🎭 Smooth animations using Framer Motion
- 🎨 Custom color themes for different sections

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **State Management**: React Context
- **Deployment**: Vercel

## Project Structure

```
├── public/
│   └── assets/
│       ├── favicon/     # Favicon files
│       ├── images/      # Static images
│       ├── projects/    # Project screenshots
│       └── resume/      # Resume PDF
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # React components
│   │   ├── About.tsx   # About section
│   │   ├── Contact.tsx # Contact section
│   │   ├── Experience.tsx # Experience section
│   │   ├── Hero.tsx    # Hero section
│   │   ├── Navbar.tsx  # Navigation bar
│   │   ├── Projects.tsx # Projects section
│   │   └── RetroGames.tsx # Games section
│   ├── context/        # React context providers
│   │   └── ColorContext.tsx # Theme context
│   └── types/          # TypeScript types
├── .eslintrc.json     # ESLint configuration
├── .prettierrc        # Prettier configuration
├── next.config.js     # Next.js configuration
├── postcss.config.js  # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/harsh746-exe/portfolio.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

## Running Production Build

```bash
npm start
```

## Development

- **Linting**: ESLint with TypeScript support
- **Formatting**: Prettier
- **Type Checking**: TypeScript
- **Code Quality**: ESLint rules for best practices

## License

This project is open source and available under the MIT License.

## Contact

- Email: eharshdwivedi@gmail.com
- LinkedIn: [Harsh Dwivedi](https://www.linkedin.com/in/harsh-dwivedi-854b39202/)
- GitHub: [harsh746-exe](https://github.com/harsh746-exe)
