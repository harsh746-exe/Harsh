'use client';

import { useState, useEffect, useRef } from 'react';
import { useColor } from '@/context/ColorContext';

interface Position {
  x: number;
  y: number;
}

interface CharacterElement {
  id: string;
  element: HTMLSpanElement;
  originalOpacity: string;
  isEaten: boolean;
  rect: DOMRect;
}

interface RetroGamesProps {
  isPacmanActive: boolean;
  isSnakeActive: boolean;
  setIsPacmanActive: (value: boolean) => void;
  setIsSnakeActive: (value: boolean) => void;
}

const RetroGames = ({
  isPacmanActive,
  isSnakeActive,
  setIsPacmanActive,
  setIsSnakeActive,
}: RetroGamesProps) => {
  const [pacmanPos, setPacmanPos] = useState<Position>({ x: 100, y: 100 });
  const [pacmanDirection, setPacmanDirection] = useState<'UP' | 'DOWN' | 'LEFT' | 'RIGHT'>('RIGHT');
  const [mouthFrame, setMouthFrame] = useState<number>(0);
  const [characters, setCharacters] = useState<CharacterElement[]>([]);
  const [snake, setSnake] = useState<Position[]>([]);
  const [snakeFood, setSnakeFood] = useState<Position | null>(null);
  const [snakeDirection, setSnakeDirection] = useState<'UP' | 'DOWN' | 'LEFT' | 'RIGHT'>('RIGHT');
  const sectionRef = useRef(null);
  const { setVisibility } = useColor();

  // Initialize snake when game becomes active
  useEffect(() => {
    if (isSnakeActive && snake.length === 0) {
      setSnake([
        { x: 100, y: 100 },
        { x: 90, y: 100 },
        { x: 80, y: 100 },
      ]);
      setSnakeFood({
        x: Math.floor(Math.random() * (window.innerWidth - 100)),
        y: Math.floor(Math.random() * (window.innerHeight - 100)),
      });
    } else if (!isSnakeActive) {
      setSnake([]);
      setSnakeFood(null);
    }
  }, [isSnakeActive, snake.length]);

  // Initialize text elements
  useEffect(() => {
    if (isPacmanActive) {
      const wrapTextNodes = (
        node: Node,
        characters: CharacterElement[],
        charIndex: { value: number }
      ) => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent) {
          const text = node.textContent;
          if (!text.trim()) return;

          const wrapper = document.createElement('span');
          wrapper.className = 'text-wrapper';
          wrapper.style.cssText = 'display: inline;';

          const wrappedText = Array.from(text)
            .map(char => {
              if (!char.trim()) {
                return char;
              }
              const charSpan = document.createElement('span');
              charSpan.textContent = char;
              charSpan.className = 'character';
              charSpan.style.cssText = 'display: inline;';
              charSpan.setAttribute('data-char-index', charIndex.value.toString());
              charIndex.value++;

              characters.push({
                id: `char-${charIndex.value - 1}`,
                element: charSpan,
                originalOpacity: '1',
                isEaten: false,
                rect: new DOMRect(),
              });

              return charSpan.outerHTML;
            })
            .join('');

          wrapper.innerHTML = wrappedText;
          node.parentNode?.replaceChild(wrapper, node);
        } else {
          Array.from(node.childNodes).forEach(child => {
            wrapTextNodes(child, characters, charIndex);
          });
        }
      };

      const elements = document.querySelectorAll(
        'p, h1, h2, h3, h4, h5, h6, span:not(.character):not(.text-wrapper), a, li'
      );
      const newCharacters: CharacterElement[] = [];
      const charIndex = { value: 0 };

      elements.forEach(element => {
        if (element.closest('.text-wrapper')) return;

        const htmlElement = element as HTMLElement;
        const originalHTML = htmlElement.innerHTML;
        htmlElement.setAttribute('data-original-html', originalHTML);

        wrapTextNodes(element, newCharacters, charIndex);
      });

      requestAnimationFrame(() => {
        const charElements = document.querySelectorAll('.character');
        newCharacters.forEach((char, index) => {
          const element = charElements[index] as HTMLSpanElement;
          if (element) {
            char.element = element;
            char.rect = element.getBoundingClientRect();
          }
        });
        setCharacters(newCharacters);
      });
    } else {
      const elements = document.querySelectorAll('[data-original-html]');
      elements.forEach(element => {
        const htmlElement = element as HTMLElement;
        const originalHtml = htmlElement.getAttribute('data-original-html');
        if (originalHtml) {
          htmlElement.innerHTML = originalHtml;
          htmlElement.removeAttribute('data-original-html');
        }
      });
      setCharacters([]);
    }
  }, [isPacmanActive]);

  // Update character positions
  useEffect(() => {
    if (!isPacmanActive || characters.length === 0) return;

    const updateRects = () => {
      const charElements = document.querySelectorAll('.character');
      setCharacters(prev =>
        prev.map((char, index) => {
          const element = charElements[index] as HTMLSpanElement;
          return {
            ...char,
            element,
            rect: element ? element.getBoundingClientRect() : char.rect,
          };
        })
      );
    };

    // Initial update
    updateRects();

    // Update on scroll and resize
    window.addEventListener('scroll', updateRects);
    window.addEventListener('resize', updateRects);

    return () => {
      window.removeEventListener('scroll', updateRects);
      window.removeEventListener('resize', updateRects);
    };
  }, [isPacmanActive, characters.length]);

  // Pacman movement and character eating
  useEffect(() => {
    if (!isPacmanActive) return;

    const movePacman = () => {
      setPacmanPos(prev => {
        const newPos = { ...prev };
        const step = 5;

        switch (pacmanDirection) {
          case 'UP':
            newPos.y -= step;
            break;
          case 'DOWN':
            newPos.y += step;
            break;
          case 'LEFT':
            newPos.x -= step;
            break;
          case 'RIGHT':
            newPos.x += step;
            break;
        }

        // Wrap around screen
        newPos.x = (newPos.x + window.innerWidth) % window.innerWidth;
        newPos.y = (newPos.y + window.innerHeight) % window.innerHeight;

        // Check for character collisions
        characters.forEach(char => {
          if (!char.isEaten && char.element) {
            const rect = char.element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distance = Math.hypot(centerX - newPos.x, centerY - newPos.y);

            if (distance < 20) {
              // Eating distance
              char.element.style.transition = 'opacity 0.15s ease';
              char.element.style.opacity = '0';
              setCharacters(prev =>
                prev.map(item => (item.id === char.id ? { ...item, isEaten: true } : item))
              );
            }
          }
        });

        return newPos;
      });
    };

    const moveInterval = setInterval(movePacman, 50);
    return () => clearInterval(moveInterval);
  }, [isPacmanActive, pacmanDirection, characters]);

  // Key press handling
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Handle escape key to stop games
      if (e.key.toLowerCase() === 'escape') {
        if (isPacmanActive) {
          // Reset Pacman state and HTML
          setPacmanPos({ x: 100, y: 100 });
          setPacmanDirection('RIGHT');
          setMouthFrame(0);
          setCharacters([]);
          // Reset HTML
          const elements = document.querySelectorAll('[data-original-html]');
          elements.forEach(element => {
            const htmlElement = element as HTMLElement;
            const originalHtml = htmlElement.getAttribute('data-original-html');
            if (originalHtml) {
              htmlElement.innerHTML = originalHtml;
              htmlElement.removeAttribute('data-original-html');
            }
          });
          setIsPacmanActive(false);
        }
        if (isSnakeActive) {
          // Reset Snake state
          setSnake([]);
          setSnakeFood(null);
          setSnakeDirection('RIGHT');
          setIsSnakeActive(false);
        }
        return;
      }

      if (isPacmanActive) {
        // Pacman controls
        switch (e.key.toLowerCase()) {
          case 'arrowup':
          case 'w':
            if (pacmanDirection !== 'DOWN') setPacmanDirection('UP');
            break;
          case 'arrowdown':
          case 's':
            if (pacmanDirection !== 'UP') setPacmanDirection('DOWN');
            break;
          case 'arrowleft':
          case 'a':
            if (pacmanDirection !== 'RIGHT') setPacmanDirection('LEFT');
            break;
          case 'arrowright':
          case 'd':
            if (pacmanDirection !== 'LEFT') setPacmanDirection('RIGHT');
            break;
        }
      } else if (isSnakeActive) {
        // Snake controls
        switch (e.key.toLowerCase()) {
          case 'arrowup':
          case 'w':
            if (snakeDirection !== 'DOWN') setSnakeDirection('UP');
            break;
          case 'arrowdown':
          case 's':
            if (snakeDirection !== 'UP') setSnakeDirection('DOWN');
            break;
          case 'arrowleft':
          case 'a':
            if (snakeDirection !== 'RIGHT') setSnakeDirection('LEFT');
            break;
          case 'arrowright':
          case 'd':
            if (snakeDirection !== 'LEFT') setSnakeDirection('RIGHT');
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [
    isPacmanActive,
    isSnakeActive,
    pacmanDirection,
    snakeDirection,
    setIsPacmanActive,
    setIsSnakeActive,
  ]);

  // Snake movement
  useEffect(() => {
    if (!isSnakeActive) return;

    const moveSnake = () => {
      setSnake(prevSnake => {
        if (prevSnake.length === 0) return prevSnake;

        const newSnake = [...prevSnake];
        const head = { ...newSnake[0] };

        switch (snakeDirection) {
          case 'UP':
            head.y -= 10;
            break;
          case 'DOWN':
            head.y += 10;
            break;
          case 'LEFT':
            head.x -= 10;
            break;
          case 'RIGHT':
            head.x += 10;
            break;
        }

        // Wrap around screen
        head.x = (head.x + window.innerWidth) % window.innerWidth;
        head.y = (head.y + window.innerHeight) % window.innerHeight;

        if (
          snakeFood &&
          Math.abs(head.x - snakeFood.x) < 15 &&
          Math.abs(head.y - snakeFood.y) < 15
        ) {
          setSnakeFood({
            x: Math.floor(Math.random() * (window.innerWidth - 100)),
            y: Math.floor(Math.random() * (window.innerHeight - 100)),
          });
        } else {
          newSnake.pop();
        }

        return [head, ...newSnake];
      });
    };

    const gameInterval = setInterval(moveSnake, 140);
    return () => clearInterval(gameInterval);
  }, [isSnakeActive, snakeDirection, snakeFood]);

  // Pacman mouth animation
  useEffect(() => {
    if (!isPacmanActive) return;

    const animateMouth = () => {
      setMouthFrame(prev => (prev + 1) % 5);
    };

    const mouthInterval = setInterval(animateMouth, 140); // 0.7s / 5 frames = 140ms per frame
    return () => clearInterval(mouthInterval);
  }, [isPacmanActive]);

  const getMouthClipPath = (frame: number) => {
    switch (frame) {
      case 0: // 0%
        return 'polygon(100% 74%, 44% 48%, 100% 21%)';
      case 1: // 25%
        return 'polygon(100% 60%, 44% 48%, 100% 40%)';
      case 2: // 50%
        return 'polygon(100% 50%, 44% 48%, 100% 50%)';
      case 3: // 75%
        return 'polygon(100% 59%, 44% 48%, 100% 35%)';
      case 4: // 100%
        return 'polygon(100% 74%, 44% 48%, 100% 21%)';
      default:
        return 'polygon(100% 74%, 44% 48%, 100% 21%)';
    }
  };

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisibility('about', entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [setVisibility]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {isPacmanActive && (
        <div
          className="absolute w-[32px] h-[32px]"
          style={{
            left: pacmanPos.x,
            top: pacmanPos.y,
            transform: `translate(-50%, -50%) ${
              pacmanDirection === 'LEFT'
                ? 'scale(-1, 1)'
                : `rotate(${
                    pacmanDirection === 'RIGHT' ? 0 : pacmanDirection === 'DOWN' ? 90 : 270 // UP
                  }deg)`
            }`,
          }}
        >
          {/* Base yellow circle */}
          <div
            className="w-full h-full rounded-full relative"
            style={{ backgroundColor: '#F2D648' }}
          >
            {/* Eye */}
            <div
              className="absolute w-[3px] h-[3px] rounded-full"
              style={{
                backgroundColor: '#333333',
                top: '6px',
                right: '13px',
              }}
            />
            {/* Mouth */}
            <div
              className="absolute inset-0"
              style={{
                background: 'rgb(var(--background))',
                clipPath: getMouthClipPath(mouthFrame),
              }}
            />
          </div>
        </div>
      )}

      {isSnakeActive && (
        <>
          {/* Snake segments */}
          {snake.map((segment, i) => (
            <div
              key={`snake-${i}`}
              className="absolute w-[10px] h-[10px] bg-[rgb(var(--primary))] rounded-sm"
              style={{
                left: segment.x,
                top: segment.y,
                opacity: 1 - (i / snake.length) * 0.5,
              }}
            />
          ))}

          {/* Snake food */}
          {snakeFood && (
            <div
              className="absolute w-3 h-3 bg-red-500 rounded-full animate-pulse"
              style={{
                left: snakeFood.x,
                top: snakeFood.y,
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default RetroGames;
