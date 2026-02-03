'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import TypeWriter from './TypeWriter';
import { heroData } from '@/data/hero';
import BottomBar from './BottomBar';

interface HeroProps {
  isPacmanActive: boolean;
  isSnakeActive: boolean;
  setIsPacmanActive: (value: boolean) => void;
  setIsSnakeActive: (value: boolean) => void;
}

const Hero = ({
  isPacmanActive,
  isSnakeActive,
  setIsPacmanActive,
  setIsSnakeActive,
}: HeroProps) => {
  const { theme, toggleTheme } = useTheme();

  const handleGameToggle = (game: 'pacman' | 'snake') => {
    if (game === 'pacman') {
      setIsPacmanActive(!isPacmanActive);
      setIsSnakeActive(false);
    } else {
      setIsSnakeActive(!isSnakeActive);
      setIsPacmanActive(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-4">
      <div className="max-w-6xl mx-auto px-4 lg:pl-32 lg:pr-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[rgb(var(--primary))] text-xl font-mono mb-5"
        >
          <TypeWriter text={heroData.greeting} delay={150} />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[rgb(var(--text-primary))] text-4xl sm:text-7xl font-bold mb-4 relative hover:text-[rgb(var(--primary))] transition-colors"
        >
          <TypeWriter text={heroData.name} delay={100} />
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[rgb(var(--primary))] text-2xl sm:text-5xl font-bold mb-6"
        >
          <TypeWriter text={heroData.title} delay={75} />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[rgb(var(--text-secondary))] max-w-xl text-lg mb-12"
        >
          {heroData.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4"
        >
          <a
            href={heroData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-[rgb(var(--primary))] text-[rgb(var(--primary))] rounded hover:bg-[rgba(var(--primary),0.1)] transition-all font-mono"
          >
            Checkout my resume!
          </a>
          <Link
            href="#projects"
            className="inline-block px-8 py-4 border-2 border-[rgb(var(--primary))] text-[rgb(var(--primary))] rounded hover:bg-[rgba(var(--primary),0.1)] transition-all font-mono"
          >
            Check out my projects!
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="fixed left-12 bottom-0 hidden lg:block"
        >
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => handleGameToggle('snake')}
                  className={`text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))] hover:-translate-y-1 transition-all p-2 ${
                    isSnakeActive ? 'text-[rgb(var(--primary))]' : ''
                  }`}
                  aria-label="Toggle Snake"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Image
                      src="https://img.icons8.com/emoji/48/snake-emoji.png"
                      alt="Snake Game"
                      width={20}
                      height={20}
                    />
                  </div>
                </button>
                <button
                  onClick={() => handleGameToggle('pacman')}
                  className={`text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))] hover:-translate-y-1 transition-all p-2 ${
                    isPacmanActive ? 'text-[rgb(var(--primary))]' : ''
                  }`}
                  aria-label="Toggle Pacman"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="50" fill="#F2D648" />
                      <circle cx="60" cy="30" r="5" fill="#333333" />
                      <path
                        d="M100,74 L44,48 L100,21"
                        fill="rgb(var(--background))"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>
              <button
                onClick={toggleTheme}
                className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))] hover:-translate-y-1 transition-all p-2"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <SunIcon className="w-6 h-6" />
                ) : (
                  <MoonIcon className="w-6 h-6" />
                )}
              </button>
            </div>
            <a
              href={heroData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))] hover:-translate-y-1 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={heroData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))] hover:-translate-y-1 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <div className="h-24 w-[1px] bg-[rgb(var(--text-secondary))] opacity-30"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="fixed right-12 bottom-0 hidden lg:block"
        >
          <div className="flex flex-col items-center space-y-6">
            {heroData.socialLinks.phone && (
              <a
                href={`tel:${heroData.socialLinks.phone.replace(/\s/g, '')}`}
                className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))] hover:-translate-y-1 transition-all font-mono tracking-widest [writing-mode:vertical-rl]"
              >
                {heroData.socialLinks.phone}
              </a>
            )}
            <a
              href={`mailto:${heroData.socialLinks.email}`}
              className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))] hover:-translate-y-1 transition-all font-mono tracking-widest [writing-mode:vertical-rl]"
            >
              {heroData.socialLinks.email}
            </a>
            <div className="h-24 w-[1px] bg-[rgb(var(--text-secondary))] opacity-30"></div>
          </div>
        </motion.div>
      </div>
      <BottomBar
        isPacmanActive={isPacmanActive}
        isSnakeActive={isSnakeActive}
        setIsPacmanActive={setIsPacmanActive}
        setIsSnakeActive={setIsSnakeActive}
      />
    </section>
  );
};

export default Hero;
