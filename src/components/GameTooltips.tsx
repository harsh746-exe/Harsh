'use client';

import { useState } from 'react';

const GameTooltips = () => {
  const [showSnakeTooltip, setShowSnakeTooltip] = useState(false);
  const [showPacmanTooltip, setShowPacmanTooltip] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 z-[9999] pointer-events-auto flex gap-4">
      <div className="relative">
        <span 
          className="text-[rgb(var(--text-secondary))] font-mono text-lg cursor-pointer hover:text-[rgb(var(--primary))] transition-colors"
          onMouseEnter={() => setShowSnakeTooltip(true)}
          onMouseLeave={() => setShowSnakeTooltip(false)}
        >
          S
        </span>
        {showSnakeTooltip && (
          <div className="absolute bottom-full left-0 mb-2">
            <div className="bg-[rgb(var(--background))] text-[rgb(var(--text-secondary))] text-sm px-3 py-2 rounded border border-[rgb(var(--text-secondary))] whitespace-nowrap shadow-lg">
              Press S for Snake
            </div>
          </div>
        )}
      </div>
      <div className="relative">
        <span 
          className="text-[rgb(var(--text-secondary))] font-mono text-lg cursor-pointer hover:text-[rgb(var(--primary))] transition-colors"
          onMouseEnter={() => setShowPacmanTooltip(true)}
          onMouseLeave={() => setShowPacmanTooltip(false)}
        >
          P
        </span>
        {showPacmanTooltip && (
          <div className="absolute bottom-full left-0 mb-2">
            <div className="bg-[rgb(var(--background))] text-[rgb(var(--text-secondary))] text-sm px-3 py-2 rounded border border-[rgb(var(--text-secondary))] whitespace-nowrap shadow-lg">
              Press P for Pacman
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameTooltips; 