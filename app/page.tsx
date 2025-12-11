'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Letter from '@/components/Letter';
import MiniSections from '@/components/MiniSections';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [showGiftPopup, setShowGiftPopup] = useState(false);

  useEffect(() => {
    // Apply dark mode class
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    // Show gift popup on first load
    const hasSeenPopup = sessionStorage.getItem('hasSeenGiftPopup');
    if (!hasSeenPopup) {
      setTimeout(() => {
        setShowGiftPopup(true);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    // Handle background music
    let audio: HTMLAudioElement | null = null;
    
    if (musicPlaying) {
      // Create audio element with a royalty-free happy birthday tune
      // You can replace this with your own audio file in public folder
      audio = new Audio('/birthday-music.mp3');
      audio.loop = true;
      audio.volume = 0.3;
      audio.play().catch(error => {
        console.log('Audio playback failed:', error);
        setMusicPlaying(false);
      });
    }
    
    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, [musicPlaying]);

  const handleOpenLetter = () => {
    setLetterOpen(true);
    if (showGiftPopup) {
      setShowGiftPopup(false);
      sessionStorage.setItem('hasSeenGiftPopup', 'true');
    }
  };

  const handleViewMemories = () => {
    const memoriesSection = document.getElementById('memories');
    if (memoriesSection) {
      memoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Skip to content for accessibility */}
      <a href="#home" className="skip-to-content">
        Skip to content
      </a>

      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        musicPlaying={musicPlaying}
        setMusicPlaying={setMusicPlaying}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenLetter={handleOpenLetter}
          onViewMemories={handleViewMemories}
        />

        {/* Mini Sections (Teddy, Sweets, Dress) */}
        <MiniSections />

        {/* Gallery Section */}
        <Gallery />
      </main>

      {/* Footer */}
      <Footer />

      {/* Letter Modal */}
      <Letter isOpen={letterOpen} onClose={() => setLetterOpen(false)} />

      {/* Gift Popup */}
      <AnimatePresence>
        {showGiftPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => {
              setShowGiftPopup(false);
              sessionStorage.setItem('hasSeenGiftPopup', 'true');
            }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: 'spring', duration: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-8 md:p-12 max-w-md text-center relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl mb-6"
              >
                🎁
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold handwritten text-pink-600 mb-4">
                A Special Gift!
              </h2>

              <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
                There's a special birthday letter waiting for you, Nithursha! 
                Click below to open your surprise 💕
              </p>

              <motion.button
                onClick={() => {
                  handleOpenLetter();
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg"
              >
                🎀 Open the Gift
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-sm text-gray-500 dark:text-gray-400 mt-4"
              >
                Click anywhere outside to close
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
