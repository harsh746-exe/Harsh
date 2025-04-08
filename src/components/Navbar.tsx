'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[rgb(var(--background))] text-[rgb(var(--text-secondary))] z-50">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="cursor-pointer pl-6"
        onClick={scrollToTop}
      >
        <Image
          src="/assets/images/2.png"
          alt="Portfolio Logo"
          width={45}
          height={45}
          className="hover:scale-110 transition-transform duration-300"
          priority
        />
      </motion.div>

      {/* Desktop Menu */}
      <motion.ul
        className="hidden md:flex"
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <li className="px-4 cursor-pointer hover:text-[rgb(var(--primary))] transition-all">
          <button onClick={scrollToTop}>Home</button>
        </li>
        <li className="px-4 cursor-pointer hover:text-[rgb(var(--primary))] transition-all">
          <a href="#about">About</a>
        </li>
        <li className="px-4 cursor-pointer hover:text-[rgb(var(--primary))] transition-all">
          <a href="#experience">Experience</a>
        </li>
        <li className="px-4 cursor-pointer hover:text-[rgb(var(--primary))] transition-all">
          <a href="#projects">Projects</a>
        </li>
        <li className="px-4 cursor-pointer hover:text-[rgb(var(--primary))] transition-all">
          <a href="#contact">Contact</a>
        </li>
      </motion.ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <Bars3Icon className="w-6 h-6" /> : <XMarkIcon className="w-6 h-6" />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[rgb(var(--background))] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl hover:text-[rgb(var(--primary))] transition-all">
          <button
            onClick={() => {
              scrollToTop();
              handleClick();
            }}
          >
            Home
          </button>
        </li>
        <li className="py-6 text-4xl hover:text-[rgb(var(--primary))] transition-all">
          <a onClick={handleClick} href="#about">
            About
          </a>
        </li>
        <li className="py-6 text-4xl hover:text-[rgb(var(--primary))] transition-all">
          <a onClick={handleClick} href="#experience">
            Experience
          </a>
        </li>
        <li className="py-6 text-4xl hover:text-[rgb(var(--primary))] transition-all">
          <a onClick={handleClick} href="#projects">
            Projects
          </a>
        </li>
        <li className="py-6 text-4xl hover:text-[rgb(var(--primary))] transition-all">
          <a onClick={handleClick} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
