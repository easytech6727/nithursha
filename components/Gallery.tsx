'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiCalendar, FiTag } from 'react-icons/fi';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
  date: string;
  category: string;
}

// Photo data for 65 photos with actual WhatsApp filenames
const generatePhotos = (): Photo[] => {
  const photoData = [
    // Uni Days - photos 1-20
    { id: 1, category: 'Uni Days', caption: 'First day at campus', date: '2023-01-15', filename: 'IMG-20251211-WA0015.jpg' },
    { id: 2, category: 'Uni Days', caption: 'Library study session', date: '2023-02-20', filename: 'IMG-20251211-WA0016.jpg' },
    { id: 3, category: 'Uni Days', caption: 'Group project work', date: '2023-03-10', filename: 'IMG-20251211-WA0017.jpg' },
    { id: 4, category: 'Uni Days', caption: 'Lecture hall moments', date: '2023-03-25', filename: 'IMG-20251211-WA0018.jpg' },
    { id: 5, category: 'Uni Days', caption: 'Campus grounds walk', date: '2023-04-05', filename: 'IMG-20251211-WA0019.jpg' },
    { id: 6, category: 'Uni Days', caption: 'Study break laughs', date: '2023-04-18', filename: 'IMG-20251211-WA0020.jpg' },
    { id: 7, category: 'Uni Days', caption: 'Exam preparation', date: '2023-05-02', filename: 'IMG-20251211-WA0021.jpg' },
    { id: 8, category: 'Uni Days', caption: 'Between classes', date: '2023-05-15', filename: 'IMG-20251211-WA0022.jpg' },
    { id: 9, category: 'Uni Days', caption: 'Lab session fun', date: '2023-06-03', filename: 'IMG-20251211-WA0023.jpg' },
    { id: 10, category: 'Uni Days', caption: 'Campus cafe chats', date: '2023-06-20', filename: 'IMG-20251211-WA0024.jpg' },
    { id: 11, category: 'Uni Days', caption: 'Assignment completion', date: '2023-07-08', filename: 'IMG-20251211-WA0025.jpg' },
    { id: 12, category: 'Uni Days', caption: 'Semester success', date: '2023-07-25', filename: 'IMG-20251211-WA0026.jpg' },
    { id: 13, category: 'Uni Days', caption: 'New semester begins', date: '2023-08-12', filename: 'IMG-20251211-WA0027.jpg' },
    { id: 14, category: 'Uni Days', caption: 'Library late nights', date: '2023-08-28', filename: 'IMG-20251211-WA0028.jpg' },
    { id: 15, category: 'Uni Days', caption: 'Class presentation', date: '2023-09-10', filename: 'IMG-20251211-WA0029.jpg' },
    { id: 16, category: 'Uni Days', caption: 'Study group meeting', date: '2023-09-25', filename: 'IMG-20251211-WA0030.jpg' },
    { id: 17, category: 'Uni Days', caption: 'Mid-term break', date: '2023-10-08', filename: 'IMG-20251211-WA0031.jpg' },
    { id: 18, category: 'Uni Days', caption: 'Campus event day', date: '2023-10-22', filename: 'IMG-20251211-WA0032.jpg' },
    { id: 19, category: 'Uni Days', caption: 'Final year vibes', date: '2023-11-05', filename: 'IMG-20251211-WA0033.jpg' },
    { id: 20, category: 'Uni Days', caption: 'Graduation prep', date: '2023-11-20', filename: 'IMG-20251211-WA0034.jpg' },
    
    // Outings - photos 21-40
    { id: 21, category: 'Outings', caption: 'Coffee shop hangout', date: '2023-01-22', filename: 'IMG-20251211-WA0035.jpg' },
    { id: 22, category: 'Outings', caption: 'Weekend shopping', date: '2023-02-14', filename: 'IMG-20251211-WA0036.jpg' },
    { id: 23, category: 'Outings', caption: 'Restaurant dinner', date: '2023-03-05', filename: 'IMG-20251211-WA0037.jpg' },
    { id: 24, category: 'Outings', caption: 'Beach trip fun', date: '2023-03-18', filename: 'IMG-20251211-WA0038.jpg' },
    { id: 25, category: 'Outings', caption: 'Movie night out', date: '2023-04-12', filename: 'IMG-20251211-WA0039.jpg' },
    { id: 26, category: 'Outings', caption: 'Food court adventures', date: '2023-04-28', filename: 'IMG-20251211-WA0040.jpg' },
    { id: 27, category: 'Outings', caption: 'Park walk together', date: '2023-05-10', filename: 'IMG-20251211-WA0041.jpg' },
    { id: 28, category: 'Outings', caption: 'Ice cream date', date: '2023-05-24', filename: 'IMG-20251211-WA0042.jpg' },
    { id: 29, category: 'Outings', caption: 'Temple visit', date: '2023-06-08', filename: 'IMG-20251211-WA0043.jpg' },
    { id: 30, category: 'Outings', caption: 'Market shopping day', date: '2023-06-25', filename: 'IMG-20251211-WA0044.jpg' },
    { id: 31, category: 'Outings', caption: 'Sunset watching', date: '2023-07-12', filename: 'IMG-20251211-WA0045.jpg' },
    { id: 32, category: 'Outings', caption: 'Local festival', date: '2023-07-28', filename: 'IMG-20251211-WA0046.jpg' },
    { id: 33, category: 'Outings', caption: 'Bookstore browsing', date: '2023-08-15', filename: 'IMG-20251211-WA0047.jpg' },
    { id: 34, category: 'Outings', caption: 'Cake shop treats', date: '2023-09-02', filename: 'IMG-20251211-WA0048.jpg' },
    { id: 35, category: 'Outings', caption: 'Garden visit', date: '2023-09-18', filename: 'IMG-20251211-WA0049.jpg' },
    { id: 36, category: 'Outings', caption: 'Downtown exploring', date: '2023-10-05', filename: 'IMG-20251211-WA0050.jpg' },
    { id: 37, category: 'Outings', caption: 'Arts and crafts fair', date: '2023-10-20', filename: 'IMG-20251211-WA0051.jpg' },
    { id: 38, category: 'Outings', caption: 'Rainy day cafe', date: '2023-11-08', filename: 'IMG-20251211-WA0052.jpg' },
    { id: 39, category: 'Outings', caption: 'Evening walk', date: '2023-11-25', filename: 'IMG-20251211-WA0053.jpg' },
    { id: 40, category: 'Outings', caption: 'Year-end celebration', date: '2023-12-10', filename: 'IMG-20251211-WA0054.jpg' },
    
    // Chats - photos 41-55
    { id: 41, category: 'Chats', caption: 'Deep conversations', date: '2024-01-15', filename: 'IMG-20251211-WA0055.jpg' },
    { id: 42, category: 'Chats', caption: 'Laughing together', date: '2024-01-28', filename: 'IMG-20251211-WA0056.jpg' },
    { id: 43, category: 'Chats', caption: 'Heart to heart', date: '2024-02-12', filename: 'IMG-20251211-WA0057.jpg' },
    { id: 44, category: 'Chats', caption: 'Random Tuesday talk', date: '2024-02-26', filename: 'IMG-20251211-WA0058.jpg' },
    { id: 45, category: 'Chats', caption: 'Weekend stories', date: '2024-03-10', filename: 'IMG-20251211-WA0059.jpg' },
    { id: 46, category: 'Chats', caption: 'Sharing memories', date: '2024-03-25', filename: 'IMG-20251211-WA0060.jpg' },
    { id: 47, category: 'Chats', caption: 'Future dreams talk', date: '2024-04-08', filename: 'IMG-20251211-WA0061.jpg' },
    { id: 48, category: 'Chats', caption: 'Silly moments', date: '2024-04-22', filename: 'IMG-20251211-WA0062.jpg' },
    { id: 49, category: 'Chats', caption: 'Advice and wisdom', date: '2024-05-05', filename: 'IMG-20251211-WA0063.jpg' },
    { id: 50, category: 'Chats', caption: 'Planning adventures', date: '2024-05-20', filename: 'IMG-20251211-WA0064.jpg' },
    { id: 51, category: 'Chats', caption: 'Life updates', date: '2024-06-08', filename: 'IMG-20251211-WA0065.jpg' },
    { id: 52, category: 'Chats', caption: 'Serious discussions', date: '2024-06-25', filename: 'IMG-20251211-WA0066.jpg' },
    { id: 53, category: 'Chats', caption: 'Happy news sharing', date: '2024-07-10', filename: 'IMG-20251211-WA0067.jpg' },
    { id: 54, category: 'Chats', caption: 'Supporting each other', date: '2024-07-28', filename: 'IMG-20251211-WA0068.jpg' },
    { id: 55, category: 'Chats', caption: 'Best friend talks', date: '2024-08-15', filename: 'IMG-20251211-WA0069.jpg' },
    
    // Photoshoots - photos 56-65
    { id: 56, category: 'Photoshoots', caption: 'Birthday celebration', date: '2023-12-13', filename: 'IMG-20251211-WA0070.jpg' },
    { id: 57, category: 'Photoshoots', caption: 'Festival dressed up', date: '2024-01-05', filename: 'IMG-20251211-WA0071.jpg' },
    { id: 58, category: 'Photoshoots', caption: 'New outfit showcase', date: '2024-02-14', filename: 'IMG-20251211-WA0072.jpg' },
    { id: 59, category: 'Photoshoots', caption: 'Traditional wear', date: '2024-03-15', filename: 'IMG-20251211-WA0073.jpg' },
    { id: 60, category: 'Photoshoots', caption: 'Casual photo day', date: '2024-04-20', filename: 'IMG-20251211-WA0074.jpg' },
    { id: 61, category: 'Photoshoots', caption: 'Formal event look', date: '2024-05-18', filename: 'IMG-20251211-WA0075.jpg' },
    { id: 62, category: 'Photoshoots', caption: 'Summer vibes', date: '2024-06-30', filename: 'IMG-20251211-WA0076.jpg' },
    { id: 63, category: 'Photoshoots', caption: 'Selfie session', date: '2024-08-10', filename: 'IMG-20251211-WA0078.jpg' },
    { id: 64, category: 'Photoshoots', caption: 'Dressed to impress', date: '2024-09-22', filename: 'IMG-20251211-WA0082.jpg' },
    { id: 65, category: 'Photoshoots', caption: 'Special occasion', date: '2024-11-08', filename: 'IMG-20251211-WA0083.jpg' },
  ];
  
  return photoData.map(photo => ({
    ...photo,
    src: `/memories/${photo.filename}`,
    alt: `Memory ${photo.id} - ${photo.caption}`,
  }));
};

interface GalleryCardProps {
  photo: Photo;
  onClick: () => void;
}

function GalleryCard({ photo, onClick }: GalleryCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      whileHover={{ scale: 1.05, rotateZ: 2 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800"
      style={{ aspectRatio: '1/1' }}
    >
      <div className="relative w-full h-full bg-gradient-to-br from-pink-200 to-rose-200 dark:from-pink-900 dark:to-rose-900">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          className="object-cover"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const placeholder = target.parentElement?.querySelector('.placeholder');
            if (placeholder) (placeholder as HTMLElement).style.display = 'flex';
          }}
        />
        <div className="placeholder absolute inset-0 bg-gradient-to-br from-pink-200 to-rose-200 dark:from-pink-900 dark:to-rose-900 flex items-center justify-center" style={{ display: 'none' }}>
          <span className="text-6xl opacity-40">🎀</span>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="font-semibold text-sm mb-1">{photo.caption}</p>
          <p className="text-xs opacity-90">{photo.date}</p>
        </div>
      </div>
      
      {/* Category badge */}
      <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
        {photo.category}
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [photos] = useState<Photo[]>(generatePhotos());
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');

  const categories = ['All', 'Uni Days', 'Outings', 'Chats', 'Photoshoots'];
  
  const filteredPhotos = selectedCategory === 'All' 
    ? photos 
    : photos.filter(p => p.category === selectedCategory);

  // Keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      } else if (e.key === 'ArrowLeft') {
        navigatePhoto(-1);
      } else if (e.key === 'ArrowRight') {
        navigatePhoto(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  const navigatePhoto = useCallback((direction: number) => {
    if (!selectedPhoto) return;
    
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    const newIndex = (currentIndex + direction + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[newIndex]);
  }, [selectedPhoto, filteredPhotos]);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 handwritten text-pink-600 dark:text-pink-400">
            Our Memories Together
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            65 precious moments captured since 2023 — each one a reminder of our beautiful friendship
          </p>
        </motion.div>

        {/* Filters and View Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-md'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-pink-100 dark:hover:bg-gray-700'
                }`}
                style={{ minHeight: '44px' }}
              >
                <FiTag className="inline mr-2" />
                {category}
              </motion.button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex gap-2 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-pink-400 text-white'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              style={{ minHeight: '44px' }}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                viewMode === 'timeline'
                  ? 'bg-pink-400 text-white'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              style={{ minHeight: '44px' }}
            >
              <FiCalendar className="inline mr-2" />
              Timeline
            </button>
          </div>
        </div>

        {/* Photo Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-700 dark:text-gray-400 mb-6"
        >
          Showing {filteredPhotos.length} {filteredPhotos.length === 1 ? 'photo' : 'photos'}
        </motion.p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredPhotos.map((photo) => (
            <GalleryCard
              key={photo.id}
              photo={photo}
              onClick={() => setSelectedPhoto(photo)}
            />
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 z-10"
                aria-label="Close"
                style={{ minHeight: '44px', minWidth: '44px' }}
              >
                <FiX className="text-2xl" />
              </motion.button>

              {/* Navigation buttons */}
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto(-1);
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 z-10"
                aria-label="Previous photo"
                style={{ minHeight: '44px', minWidth: '44px' }}
              >
                <FiChevronLeft className="text-2xl" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto(1);
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 z-10"
                aria-label="Next photo"
                style={{ minHeight: '44px', minWidth: '44px' }}
              >
                <FiChevronRight className="text-2xl" />
              </motion.button>

              {/* Photo container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="relative w-full aspect-video bg-gradient-to-br from-pink-200 to-rose-200 dark:from-pink-900 dark:to-rose-900">
                  <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    className="object-contain"
                    priority
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 handwritten text-pink-600">
                    {selectedPhoto.caption}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                    <span className="flex items-center gap-2">
                      <FiCalendar />
                      {selectedPhoto.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <FiTag />
                      {selectedPhoto.category}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-700 dark:text-gray-200">
                    A beautiful memory from our journey together. Replace this with your actual story!
                  </p>
                </div>
              </motion.div>

              {/* Keyboard hint */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
                Use ← → arrow keys or swipe to navigate • ESC to close
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
