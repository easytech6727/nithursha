'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiX } from 'react-icons/fi';
import jsPDF from 'jspdf';

interface LetterProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Letter({ isOpen, onClose }: LetterProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsRevealed(true), 300);
      setTimeout(() => setShowContent(true), 800);
    } else {
      setIsRevealed(false);
      setShowContent(false);
    }
  }, [isOpen]);

  const letterContent = {
    greeting: "Dearest Akka Nithursha,",
    intro: `Since the day we met in 2023 at Northern University Jaffna, you've been my guide, my inspiration, and the elder sister I never knew I needed. Today, as you turn 24, I want to celebrate not just your birthday, but the incredible person you are.`,
    body: [
      `From our late-night study sessions to our spontaneous adventures, every moment with you has been a treasure. Your wisdom, your laughter, and your unwavering support have shaped me in ways I can't fully express.`,
      `I remember how you always knew when I needed a coffee break, how you could make me laugh even during the most stressful exam weeks, and how your positive energy could light up any room. You're not just my akka; you're my best friend, my confidante, and my role model.`,
      `Your love for teddies, your impeccable fashion sense, your sweet tooth that rivals mine, and your ability to make every ordinary day feel special – these are just a few of the things that make you uniquely you.`,
      `As you step into this new year of your life, I hope it brings you all the joy, success, and chocolate you deserve (and maybe a few more teddies to add to your collection!). May your days be filled with laughter, your dreams come true, and your wardrobe always have space for that perfect new dress.`,
    ],
    closing: `Thank you for being the amazing person you are. Here's to many more years of friendship, memories, and adventures together!`,
    signature: "With all my love and warm birthday wishes,",
    signoff: "Your forever grateful friend 💕",
  };

  const downloadPDF = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // Set up colors and fonts
    doc.setFont('times', 'italic');
    
    // Add decorative border
    doc.setDrawColor(255, 179, 217);
    doc.setLineWidth(2);
    doc.rect(10, 10, 190, 277);
    
    // Header
    doc.setFontSize(28);
    doc.setTextColor(255, 105, 180);
    doc.text('Happy 24th Birthday', 105, 30, { align: 'center' });
    
    doc.setFontSize(22);
    doc.text('Nithursha', 105, 42, { align: 'center' });
    
    // Date
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text('December 13, 2025', 105, 52, { align: 'center' });
    
    // Letter content
    doc.setFontSize(14);
    doc.setTextColor(50, 50, 50);
    
    let yPosition = 70;
    const lineHeight = 7;
    const margin = 20;
    const maxWidth = 170;
    
    // Greeting
    doc.setFont('times', 'bold');
    doc.text(letterContent.greeting, margin, yPosition);
    yPosition += lineHeight * 1.5;
    
    // Intro
    doc.setFont('times', 'normal');
    const introLines = doc.splitTextToSize(letterContent.intro, maxWidth);
    doc.text(introLines, margin, yPosition);
    yPosition += introLines.length * lineHeight + 5;
    
    // Body paragraphs
    letterContent.body.forEach((paragraph) => {
      const lines = doc.splitTextToSize(paragraph, maxWidth);
      doc.text(lines, margin, yPosition);
      yPosition += lines.length * lineHeight + 5;
      
      // Check if we need a new page
      if (yPosition > 260) {
        doc.addPage();
        yPosition = 20;
      }
    });
    
    // Closing
    const closingLines = doc.splitTextToSize(letterContent.closing, maxWidth);
    doc.text(closingLines, margin, yPosition);
    yPosition += closingLines.length * lineHeight + 10;
    
    // Signature
    doc.setFont('times', 'italic');
    doc.text(letterContent.signature, margin, yPosition);
    yPosition += lineHeight;
    
    doc.setFont('times', 'bold');
    doc.setTextColor(255, 105, 180);
    doc.text(letterContent.signoff, margin, yPosition);
    
    // Save
    doc.save('Birthday-Letter-Nithursha.pdf');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, rotateX: -90 }}
            animate={{ scale: 1, rotateX: 0 }}
            exit={{ scale: 0.8, rotateX: 90 }}
            transition={{ type: 'spring', duration: 0.6 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden"
          >
            {/* Letter Envelope */}
            <motion.div
              animate={isRevealed ? { rotateX: -180, opacity: 0 } : { rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-gradient-to-br from-pink-300 to-rose-300 rounded-lg shadow-2xl flex items-center justify-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="text-center text-white">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl mb-4"
                >
                  💌
                </motion.div>
                <p className="text-2xl font-bold handwritten">For Nithursha</p>
                <p className="text-lg mt-2">Click anywhere to open</p>
              </div>
            </motion.div>

            {/* Letter Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              className="glass-card p-8 md:p-12 max-h-[85vh] overflow-y-auto"
            >
              {/* Close button */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 p-2 bg-pink-100 dark:bg-pink-900 rounded-full text-pink-600 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-800"
                aria-label="Close letter"
                style={{ minHeight: '44px', minWidth: '44px' }}
              >
                <FiX className="text-xl" />
              </motion.button>

              {/* Letter header */}
              <div className="text-center mb-8 border-b-2 border-pink-200 pb-6">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold handwritten text-pink-600 dark:text-pink-400 mb-2"
                >
                  A Letter for You
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-700 dark:text-gray-300"
                >
                  December 13, 2025
                </motion.p>
              </div>

              {/* Letter content with typewriter effect */}
              <div className="space-y-6 text-gray-700 dark:text-gray-200 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-xl font-semibold handwritten text-pink-600 dark:text-pink-400"
                >
                  {letterContent.greeting}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  {letterContent.intro}
                </motion.p>

                {letterContent.body.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + index * 0.3 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="font-medium"
                >
                  {letterContent.closing}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.8 }}
                  className="text-right mt-8"
                >
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    {letterContent.signature}
                  </p>
                  <p className="text-2xl font-bold handwritten text-pink-600 mt-2">
                    {letterContent.signoff}
                  </p>
                </motion.div>
              </div>

              {/* Download button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 }}
                className="flex justify-center mt-8 pt-6 border-t-2 border-pink-200"
              >
                <motion.button
                  onClick={downloadPDF}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  <FiDownload className="inline mr-2" />
                  Download as PDF
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
