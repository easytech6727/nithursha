'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDown, FiImage } from 'react-icons/fi';
import { useEffect, useState } from 'react';

interface HeroProps {
  onOpenLetter: () => void;
  onViewMemories: () => void;
}

export default function Hero({ onOpenLetter, onViewMemories }: HeroProps) {
  const { scrollY } = useScroll();
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; delay: number }>>([]);
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, 250]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    // Generate confetti positions
    const confettiArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setConfetti(confettiArray);
  }, []);

  const handleCTAClick = () => {
    // Trigger confetti burst
    onOpenLetter();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Layers */}
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Soft clouds */}
        <div className="absolute top-20 left-10 w-32 h-16 bg-white/30 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-40 h-20 bg-pink-200/20 rounded-full blur-2xl" />
        <div className="absolute bottom-40 left-1/4 w-48 h-24 bg-rose-200/20 rounded-full blur-2xl" />
      </motion.div>

      {/* Floating confetti */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none">
        {confetti.map((item) => (
          <motion.div
            key={item.id}
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: ['0vh', '100vh'],
              opacity: [0, 1, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: item.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${item.x}%`,
              background: ['#FFB3D9', '#FFC8DD', '#FFAFCC', '#FFD700'][Math.floor(Math.random() * 4)],
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Animated Central Illustration Placeholder */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 1, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            {/* Main teddy/cake illustration */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full flex items-center justify-center shadow-2xl"
            >
              <span className="text-7xl md:text-9xl">🧸</span>
            </motion.div>
            
            {/* Floating mini icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
            >
              {[
                { emoji: '👗', angle: 0 },
                { emoji: '🍫', angle: 90 },
                { emoji: '🍰', angle: 180 },
                { emoji: '🍦', angle: 270 },
              ].map((item, index) => {
                const radius = 140;
                const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                const y = Math.sin((item.angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={index}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="absolute text-3xl md:text-4xl"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    {item.emoji}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 handwritten text-pink-600 dark:text-pink-400"
        >
          Happy 24th Birthday,{' '}
          <span className="bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400 bg-clip-text text-transparent">
            Nithursha
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-800 dark:text-gray-200 font-medium"
        >
          My beloved akka — since Northern Uni Jaffna 2023 💕
        </motion.p>

        {/* Birth Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-md md:text-lg mb-12 text-gray-700 dark:text-gray-300"
        >
          Born December 13, 2001 ✨
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={handleCTAClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            className="btn-primary text-lg px-8 py-4 shadow-xl"
          >
            💌 Open My Letter
          </motion.button>

          <motion.button
            onClick={onViewMemories}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: 2 }}
            className="btn-secondary text-lg px-8 py-4"
          >
            <FiImage className="inline mr-2" />
            View Memories
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-pink-400"
          >
            <FiArrowDown className="text-3xl" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-50/50 to-transparent pointer-events-none" />
    </section>
  );
}
