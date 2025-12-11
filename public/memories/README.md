# Placeholder Images for Memories Gallery

This folder should contain 65 photos for the gallery. 

## How to Add Your Photos:

1. **Prepare your photos:**
   - Collect 65 photos of your memories together
   - Name them sequentially: `photo-1.jpg`, `photo-2.jpg`, ... `photo-65.jpg`
   - Recommended format: JPG or PNG
   - Recommended size: 1200x1200px or similar square/portrait format

2. **Replace placeholder images:**
   - Delete the placeholder files if any exist
   - Copy your 65 photos into this `public/memories` folder
   - Ensure they are named exactly as: `photo-1.jpg` through `photo-65.jpg`

3. **Optimize images for web:**
   - Use tools like TinyPNG or ImageOptim to reduce file sizes
   - Keep individual images under 500KB for best performance
   - Next.js will automatically optimize images further

## Image Categories:

The gallery uses these categories (you can customize in Gallery.tsx):
- **Uni Days**: Campus memories, study sessions, library moments
- **Outings**: Coffee shops, restaurants, trips together
- **Chats**: Casual hangouts, deep conversations
- **Photoshoots**: Dressed up moments, special occasions

## Tips:

- Mix of candid and posed photos works best
- Include variety: close-ups, group shots, scenery
- Choose photos that tell your friendship story
- Chronological order can create a nice timeline effect

## Need Help?

If you have fewer than 65 photos:
- Duplicate some special ones
- Or edit `Gallery.tsx` component to change the count in the `generatePhotos()` function

If you have more than 65 photos:
- Choose your favorites
- Or increase the count in the component
