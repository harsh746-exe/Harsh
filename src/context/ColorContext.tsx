'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Section = 'about' | 'experience' | 'projects' | 'contact';

interface ColorContextType {
  activeSection: Section;
  setVisibility: (section: Section, isVisible: boolean) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [visibleSections, setVisibleSections] = useState<Set<Section>>(new Set(['about' as Section]));
  const [activeSection, setActiveSection] = useState<Section>('about');

  const setVisibility = (section: Section, isVisible: boolean) => {
    setVisibleSections(prev => {
      const newSet = new Set(prev);
      if (isVisible) {
        newSet.add(section);
      } else {
        newSet.delete(section);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const sections: Section[] = ['about', 'experience', 'projects', 'contact'];
    const visibleArray = Array.from(visibleSections);

    // If there's exactly one visible section, use that
    if (visibleArray.length === 1) {
      setActiveSection(visibleArray[0]);
      return;
    }

    // If multiple sections are visible, use the one that appears later in the sections array
    // This ensures proper transitions when scrolling down/up through sections
    const lastVisibleSection = [...sections].reverse().find(section => visibleSections.has(section));
    if (lastVisibleSection) {
      setActiveSection(lastVisibleSection);
    }
  }, [visibleSections]);

  useEffect(() => {
    const root = document.documentElement;
    
    const colors = {
      about: '34, 170, 75',        // Always use the bright green
      experience: '41, 121, 255',  // Brighter blue (#2979FF)
      projects: '233, 30, 99',     // #E91E63 (Pink/Red)
      contact: '259 218, 88'         // Dark green (#315200)
    };

    // Always set the color based on the active section
    if (activeSection) {
      root.style.setProperty('--primary', colors[activeSection]);
    }
  }, [activeSection]);

  return (
    <ColorContext.Provider value={{ activeSection, setVisibility }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
}; 