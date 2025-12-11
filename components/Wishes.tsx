'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiHeart } from 'react-icons/fi';

interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

interface ConfettiMessage {
  id: string;
  message: string;
  x: number;
  y: number;
}

export default function Wishes() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [confettiMessages, setConfettiMessages] = useState<ConfettiMessage[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Load existing wishes
    fetchWishes();
  }, []);

  const fetchWishes = async () => {
    try {
      const response = await fetch('/api/wishes');
      if (response.ok) {
        const data = await response.json();
        setWishes(data.wishes || []);
      }
    } catch (err) {
      console.error('Error fetching wishes:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      setError('Please fill in both fields');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      });

      if (response.ok) {
        const data = await response.json();
        setWishes([data.wish, ...wishes]);
        
        // Create confetti message
        const confettiId = Date.now().toString();
        setConfettiMessages([
          ...confettiMessages,
          {
            id: confettiId,
            message: message.trim(),
            x: Math.random() * 80 + 10,
            y: Math.random() * 50 + 25,
          },
        ]);

        // Remove confetti after animation
        setTimeout(() => {
          setConfettiMessages((prev) => prev.filter((c) => c.id !== confettiId));
        }, 3000);

        // Reset form
        setName('');
        setMessage('');
      } else {
        setError('Failed to submit wish. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting wish:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="wishes" className="section-padding bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Confetti Messages */}
      <AnimatePresence>
        {confettiMessages.map((confetti) => (
          <motion.div
            key={confetti.id}
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ 
              scale: [0, 1.2, 1],
              opacity: [0, 1, 0],
              rotate: [0, 360],
              y: [0, -100],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="absolute z-10 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium max-w-xs pointer-events-none"
            style={{ left: `${confetti.x}%`, top: `${confetti.y}%` }}
          >
            💖 {confetti.message.substring(0, 50)}...
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 handwritten text-pink-600">
            💌 Birthday Wishes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Leave your warm birthday wishes for Nithursha!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Wish Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-2xl font-bold handwritten text-pink-600 mb-6">
                Send Your Wish
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all bg-white dark:bg-gray-800 dark:border-pink-800 dark:text-white"
                    placeholder="Enter your name"
                    maxLength={50}
                    style={{ minHeight: '44px' }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Birthday Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all bg-white dark:bg-gray-800 dark:border-pink-800 dark:text-white resize-none"
                    placeholder="Write your heartfelt birthday wish..."
                    maxLength={500}
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">
                    {message.length}/500 characters
                  </p>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm"
                  >
                    {error}
                  </motion.p>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="inline-block mr-2"
                      >
                        ⏳
                      </motion.span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="inline mr-2" />
                      Send Birthday Wish
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Wishes Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-6 md:p-8 max-h-[600px] overflow-y-auto">
              <h3 className="text-2xl font-bold handwritten text-pink-600 mb-6 flex items-center gap-2">
                <FiHeart />
                Recent Wishes ({wishes.length})
              </h3>

              <div className="space-y-4">
                {wishes.length === 0 ? (
                  <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                    Be the first to send a birthday wish! 💕
                  </p>
                ) : (
                  wishes.map((wish, index) => (
                    <motion.div
                      key={wish.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-4 rounded-xl border border-pink-200 dark:border-pink-800"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <p className="font-semibold text-pink-600 dark:text-pink-400">
                          {wish.name}
                        </p>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(wish.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                        {wish.message}
                      </p>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
