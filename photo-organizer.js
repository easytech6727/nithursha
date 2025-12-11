// Script to create placeholder info for the 65 photos
// This helps you organize which photos to use

const photoPlaceholders = Array.from({ length: 65 }, (_, i) => ({
  number: i + 1,
  filename: `photo-${i + 1}.jpg`,
  caption: '', // Fill this in
  date: '', // Format: YYYY-MM-DD
  category: '', // Options: 'Uni Days', 'Outings', 'Chats', 'Photoshoots'
  description: '', // Short description for your reference
}));

// Example filled entries
const examplePhotos = [
  {
    number: 1,
    filename: 'photo-1.jpg',
    caption: 'Library laughs',
    date: '2023-08-15',
    category: 'Uni Days',
    description: 'That time we stayed up late studying for finals',
  },
  {
    number: 2,
    filename: 'photo-2.jpg',
    caption: 'Coffee break',
    date: '2023-09-20',
    category: 'Outings',
    description: 'Our favorite cafe downtown',
  },
  // Add 63 more entries...
];

// Tips for organizing your photos:

/*
CATEGORY DISTRIBUTION (suggested):
- Uni Days: 20 photos (campus life, studying, classes)
- Outings: 20 photos (restaurants, trips, adventures)
- Chats: 15 photos (casual hangouts, conversations)
- Photoshoots: 10 photos (dressed up, special events)

CHRONOLOGICAL ORDER:
- Arrange photos from oldest (2023) to newest (2025)
- This creates a beautiful timeline in the gallery

PHOTO QUALITY:
✓ Clear, well-lit photos
✓ Mix of close-ups and wide shots
✓ Variety of settings and moods
✓ Both candid and posed photos

BEFORE ADDING PHOTOS:
1. Collect all photos in one folder
2. Rename them: photo-1.jpg through photo-65.jpg
3. Compress if needed (< 500KB each)
4. Copy to public/memories/ folder
5. Test locally before deploying

CAPTIONS IDEAS:
- "First day at Uni"
- "Birthday celebration 2023"
- "Sunset views together"
- "Random Tuesday afternoon"
- "That hilarious moment"
- "Dressed to impress"
- "Study session vibes"
- "Weekend adventures"
*/

// Export for your reference
console.log('Photo organization template created!');
console.log(`Total photos needed: ${photoPlaceholders.length}`);
console.log('Fill in the details above and start adding your photos!');

module.exports = { photoPlaceholders, examplePhotos };
