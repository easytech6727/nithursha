'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const teddyFacts = [
  { emoji: '🧸', name: 'Mr. Cuddles', fact: 'First teddy from 2023' },
  { emoji: '🐻', name: 'Brown Bear', fact: 'Best study buddy' },
  { emoji: '🧸', name: 'Pink Teddy', fact: 'Birthday gift special' },
];

const sweetTreats = [
  { 
    emoji: '🍰', 
    name: 'Birthday Cake', 
    animation: 'sprinkle',
    description: 'Chocolate layers with pink frosting'
  },
  { 
    emoji: '🍫', 
    name: 'Dark Chocolate', 
    animation: 'unwrap',
    description: 'Premium Swiss chocolate collection'
  },
  { 
    emoji: '🍦', 
    name: 'Strawberry Ice Cream', 
    animation: 'melt',
    description: 'Your favorite flavor ever'
  },
];

const outfitPhotos = [
  { emoji: '👗', name: 'Floral Dress', occasion: 'Summer outing 2023' },
  { emoji: '👚', name: 'Cute Top', occasion: 'Campus days' },
  { emoji: '👔', name: 'Elegant Outfit', occasion: 'Special event' },
  { emoji: '👗', name: 'Party Dress', occasion: 'Celebration night' },
];

export default function MiniSections() {
  const [currentTeddy, setCurrentTeddy] = useState(0);
  const [currentOutfit, setCurrentOutfit] = useState(0);

  return (
    <section id="memories" className="section-padding bg-gradient-to-b from-white to-pink-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Teddy Closet */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 handwritten text-pink-600 dark:text-pink-400">
            🧸 Teddy Closet
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Your adorable teddy collection
          </p>

          <div className="relative max-w-md mx-auto">
            <motion.div
              key={currentTeddy}
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ type: 'spring', duration: 0.8 }}
              className="glass-card p-12 relative overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                animate={{ 
                  rotateZ: [-5, 5, -5],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="text-9xl mb-4"
              >
                {teddyFacts[currentTeddy].emoji}
              </motion.div>
              <h3 className="text-2xl font-bold handwritten text-pink-600 dark:text-pink-400 mb-2">
                {teddyFacts[currentTeddy].name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {teddyFacts[currentTeddy].fact}
              </p>

              {/* Sparkles effect */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="absolute text-2xl"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                >
                  ✨
                </motion.div>
              ))}
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentTeddy((prev) => (prev - 1 + teddyFacts.length) % teddyFacts.length)}
                className="p-3 bg-pink-400 text-white rounded-full hover:bg-pink-500"
                style={{ minHeight: '44px', minWidth: '44px' }}
              >
                <FiChevronLeft className="text-xl" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentTeddy((prev) => (prev + 1) % teddyFacts.length)}
                className="p-3 bg-pink-400 text-white rounded-full hover:bg-pink-500"
                style={{ minHeight: '44px', minWidth: '44px' }}
              >
                <FiChevronRight className="text-xl" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Sweet Corner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center handwritten text-pink-600 dark:text-pink-400">
            🍰 Sweet Corner
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-center">
            All your favorite treats
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sweetTreats.map((treat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card p-8 text-center cursor-pointer relative overflow-hidden group"
              >
                {/* Animation effects */}
                {treat.animation === 'sprinkle' && (
                  <>
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 100, opacity: [0, 1, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        className="absolute text-sm"
                        style={{ left: `${10 + i * 10}%` }}
                      >
                        •
                      </motion.div>
                    ))}
                  </>
                )}

                {treat.animation === 'melt' && (
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-pink-300 text-6xl opacity-20"
                  >
                    💧
                  </motion.div>
                )}

                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-7xl mb-4"
                >
                  {treat.emoji}
                </motion.div>
                <h3 className="text-xl font-bold handwritten text-pink-600 dark:text-pink-400 mb-2">
                  {treat.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {treat.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-200/0 to-pink-200/0 group-hover:from-pink-200/20 group-hover:to-pink-200/10 transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dress Reel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 handwritten text-pink-600 dark:text-pink-400">
            👗 Dress Reel
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Your fabulous fashion moments
          </p>

          <div className="relative max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <motion.div
                key={currentOutfit}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: 'spring', damping: 20 }}
                className="glass-card p-12"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-9xl mb-4"
                >
                  {outfitPhotos[currentOutfit].emoji}
                </motion.div>
                <h3 className="text-2xl font-bold handwritten text-pink-600 dark:text-pink-400 mb-2">
                  {outfitPhotos[currentOutfit].name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {outfitPhotos[currentOutfit].occasion}
                </p>
              </motion.div>
            </div>

            {/* Swipe indicators */}
            <div className="flex justify-center gap-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentOutfit((prev) => (prev - 1 + outfitPhotos.length) % outfitPhotos.length)}
                className="p-3 bg-pink-400 text-white rounded-full hover:bg-pink-500"
                style={{ minHeight: '44px', minWidth: '44px' }}
              >
                <FiChevronLeft className="text-xl" />
              </motion.button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {outfitPhotos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentOutfit(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentOutfit 
                        ? 'bg-pink-500 w-8' 
                        : 'bg-pink-300'
                    }`}
                    style={{ minHeight: '44px', minWidth: '44px', padding: '20px 8px' }}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentOutfit((prev) => (prev + 1) % outfitPhotos.length)}
                className="p-3 bg-pink-400 text-white rounded-full hover:bg-pink-500"
                style={{ minHeight: '44px', minWidth: '44px' }}
              >
                <FiChevronRight className="text-xl" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
