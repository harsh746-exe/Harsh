import Image from 'next/image';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { heroData } from '@/data/hero';
import { useTheme } from '@/context/ThemeContext';

interface BottomBarProps {
  isPacmanActive: boolean;
  isSnakeActive: boolean;
  setIsPacmanActive: (value: boolean) => void;
  setIsSnakeActive: (value: boolean) => void;
}

const BottomBar = ({
  isPacmanActive,
  isSnakeActive,
  setIsPacmanActive,
  setIsSnakeActive,
}: BottomBarProps) => {
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
    <div className="fixed bottom-0 left-0 w-full z-50 bg-[rgb(var(--background))] border-t border-[rgb(var(--primary))] flex justify-between items-center px-4 py-2 lg:hidden">
      <div className="flex gap-2">
        <button
          onClick={() => handleGameToggle('snake')}
          className={`text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))] transition-all p-2 ${
            isSnakeActive ? 'text-[rgb(var(--primary))]' : ''
          }`}
          aria-label="Toggle Snake"
        >
          <Image
            src="https://img.icons8.com/emoji/48/snake-emoji.png"
            alt="Snake Game"
            width={20}
            height={20}
          />
        </button>
        <button
          onClick={() => handleGameToggle('pacman')}
          className={`text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))] transition-all p-2 ${
            isPacmanActive ? 'text-[rgb(var(--primary))]' : ''
          }`}
          aria-label="Toggle Pacman"
        >
          <svg className="w-5 h-5" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" fill="#F2D648" />
            <circle cx="60" cy="30" r="5" fill="#333333" />
            <path d="M100,74 L44,48 L100,21" fill="rgb(var(--background))" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={toggleTheme}
          className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))] transition-all p-2"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
        </button>
      </div>
      <div className="flex gap-2">
        <a
          href={heroData.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))] transition-all p-2"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href={heroData.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))] transition-all p-2"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          href={`mailto:${heroData.socialLinks.email}`}
          className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))] transition-all p-2"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.01 4.857A2 2 0 0 1 4 4h16a2 2 0 0 1 1.99 0.857L12 13.414 2.01 4.857zM2 6.697V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.697l-8 7.2-8-7.2z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BottomBar;
