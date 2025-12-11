'use client';

import { motion } from 'framer-motion';
import { FiHeart, FiDownload, FiShare2 } from 'react-icons/fi';
import { FaWhatsapp, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const shareMessage = "Check out this beautiful birthday website for Nithursha's 24th birthday! 🎉";
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = (platform: string) => {
    const urls: { [key: string]: string } = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareMessage + ' ' + shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      instagram: shareUrl, // Instagram doesn't support direct sharing via URL
    };

    if (platform === 'instagram') {
      alert('Copy this link and share it on Instagram: ' + shareUrl);
    } else {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <footer className="bg-gradient-to-b from-white to-pink-50 dark:from-gray-800 dark:to-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <FiHeart className="text-3xl text-pink-500" />
              <h3 className="text-2xl font-bold handwritten text-pink-600">
                Nithursha
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A special birthday celebration website created with love for Nithursha's 24th birthday. 
              Since Northern Uni Jaffna 2023, celebrating friendship and beautiful memories.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-bold handwritten text-pink-600 mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {['Home', 'Letter', 'Memories', 'Gallery'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Downloads & Share */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-bold handwritten text-pink-600 mb-4">
              Share & Download
            </h4>
            
            {/* Download Links */}
            <div className="space-y-3 mb-6">
              <motion.a
                href="/birthday-card.pdf"
                download
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                <FiDownload />
                <span>Download Birthday Card</span>
              </motion.a>
              <motion.button
                onClick={() => window.print()}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                <FiDownload />
                <span>Print This Page</span>
              </motion.button>
            </div>

            {/* Social Share Buttons */}
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-400 mb-3 flex items-center gap-2">
                <FiShare2 /> Share this website:
              </p>
              <div className="flex gap-3">
                <motion.button
                  onClick={() => handleShare('whatsapp')}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                  aria-label="Share on WhatsApp"
                  style={{ minHeight: '44px', minWidth: '44px' }}
                >
                  <FaWhatsapp className="text-xl" />
                </motion.button>
                <motion.button
                  onClick={() => handleShare('twitter')}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                  aria-label="Share on Twitter"
                  style={{ minHeight: '44px', minWidth: '44px' }}
                >
                  <FaTwitter className="text-xl" />
                </motion.button>
                <motion.button
                  onClick={() => handleShare('facebook')}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Share on Facebook"
                  style={{ minHeight: '44px', minWidth: '44px' }}
                >
                  <FaFacebook className="text-xl" />
                </motion.button>
                <motion.button
                  onClick={() => handleShare('instagram')}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
                  aria-label="Share on Instagram"
                  style={{ minHeight: '44px', minWidth: '44px' }}
                >
                  <FaInstagram className="text-xl" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-pink-200 dark:border-pink-800 mb-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
        >
          <p className="text-gray-700 dark:text-gray-400 text-sm">
            © 2025 Created with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block text-pink-500"
            >
              ❤️
            </motion.span>{' '}
            for Nithursha's 24th Birthday
          </p>
          
          <div className="flex gap-4 text-sm text-gray-700 dark:text-gray-400">
            <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              Privacy
            </a>
            <span>•</span>
            <a 
              href="https://vercel.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
            >
              Deployed on Vercel
            </a>
          </div>
        </motion.div>

        {/* Birthday Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 p-6 glass-card"
        >
          <p className="text-2xl md:text-3xl font-bold handwritten text-pink-600 dark:text-pink-400">
            🎂 Happy Birthday, Akka! 🎉
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            May your 24th year be filled with love, laughter, and endless joy! 💕
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
