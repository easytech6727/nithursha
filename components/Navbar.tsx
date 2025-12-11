'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiMusic, FiVolumeX, FiHeart } from 'react-icons/fi';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
  musicPlaying: boolean;
  setMusicPlaying: (playing: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode, musicPlaying, setMusicPlaying }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Letter', href: '#letter' },
    { name: 'Memories', href: '#memories' },
    { name: 'Gallery', href: '#gallery' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-card shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiHeart className="text-2xl md:text-3xl" />
              <span className="font-bold text-lg md:text-xl handwritten">Nithursha</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Theme & Music Controls */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle dark mode"
                style={{ minHeight: '44px', minWidth: '44px' }}
              >
                {darkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
              </motion.button>

              <motion.button
                onClick={() => setMusicPlaying(!musicPlaying)}
                className="p-2 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle music"
                style={{ minHeight: '44px', minWidth: '44px' }}
              >
                {musicPlaying ? <FiMusic className="text-xl" /> : <FiVolumeX className="text-xl" />}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
                style={{ minHeight: '44px', minWidth: '44px' }}
              >
                {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm glass-card pt-24 px-6"
            >
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-2xl font-semibold text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 transition-colors handwritten py-2"
                    style={{ minHeight: '44px' }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                <motion.a
                  href="/birthday-card.pdf"
                  download
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="text-2xl font-semibold text-pink-600 hover:text-pink-700 transition-colors handwritten py-2 border-t-2 border-pink-200 mt-4 pt-6"
                  style={{ minHeight: '44px' }}
                >
                  Download Card
                </motion.a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
