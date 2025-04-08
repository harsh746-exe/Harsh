'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import RetroGames from '@/components/RetroGames';
import { useState } from 'react';

export default function Home() {
  const [isPacmanActive, setIsPacmanActive] = useState(false);
  const [isSnakeActive, setIsSnakeActive] = useState(false);

  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <div className="relative w-full">
        <Hero
          isPacmanActive={isPacmanActive}
          isSnakeActive={isSnakeActive}
          setIsPacmanActive={setIsPacmanActive}
          setIsSnakeActive={setIsSnakeActive}
        />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <RetroGames
          isPacmanActive={isPacmanActive}
          isSnakeActive={isSnakeActive}
          setIsPacmanActive={setIsPacmanActive}
          setIsSnakeActive={setIsSnakeActive}
        />
      </div>
    </main>
  );
}
