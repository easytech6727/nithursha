# 🎨 Quick Customization Guide

This guide helps you personalize the birthday website in 15 minutes!

## ✏️ Step 1: Update Personal Details (5 minutes)

### Edit the Hero Section
**File**: `components/Hero.tsx`

Find line ~131:
```tsx
Happy 24th Birthday, Nithursha
```
Change to your recipient's name and age.

Find line ~137:
```tsx
My beloved akka — since Northern Uni Jaffna 2023
```
Update with your personal message.

Find line ~149:
```tsx
Born December 13, 2001 ✨
```
Update with the correct birth date.

---

## 💌 Step 2: Personalize the Letter (5 minutes)

**File**: `components/Letter.tsx`

Find line ~33 and replace the `letterContent` object with your own words:

```typescript
const letterContent = {
  greeting: "Dearest [Name],",
  intro: `Write your opening paragraph here...`,
  body: [
    `First memory or message...`,
    `Second memory or message...`,
    `Third memory or message...`,
    `Fourth memory or message...`,
  ],
  closing: `Your closing thoughts...`,
  signature: "With love from,",
  signoff: "Your Name 💕",
};
```

---

## 📸 Step 3: Add Your Photos (5 minutes)

1. **Gather 65 photos** from your memories together
2. **Name them**: `photo-1.jpg`, `photo-2.jpg`, ... `photo-65.jpg`
3. **Copy to folder**: `public/memories/`

**Don't have 65 photos?**
- Edit `components/Gallery.tsx`, line ~27
- Change `Array.from({ length: 65 }` to your photo count
- Example: `Array.from({ length: 30 }` for 30 photos

---

## 🎭 Step 4: Customize Mini-Sections (Optional)

### Teddy Closet
**File**: `components/MiniSections.tsx`, line ~8

```typescript
const teddyFacts = [
  { emoji: '🧸', name: 'Your Teddy', fact: 'Your story' },
  // Add more...
];
```

### Sweet Corner
Line ~14:
```typescript
const sweetTreats = [
  { emoji: '🍰', name: 'Favorite Treat', description: '...' },
  // Add more...
];
```

### Dress Reel
Line ~32:
```typescript
const outfitPhotos = [
  { emoji: '👗', name: 'Outfit', occasion: 'Event' },
  // Add more...
];
```

---

## 🎨 Step 5: Change Colors (Optional)

**File**: `app/globals.css`, line ~5

```css
:root {
  --pastel-pink: #FFB3D9;     /* Main pink color */
  --pastel-rose: #FFC8DD;     /* Secondary pink */
  --warm-gold: #FFD700;       /* Accent gold */
  /* Change these hex codes to your colors */
}
```

**Color Palette Ideas:**
- **Purple Theme**: `#E6B8FF`, `#D8A7FF`, `#9F7CFF`
- **Blue Theme**: `#A8DAFF`, `#89C7FF`, `#4A90E2`
- **Peach Theme**: `#FFD4B8`, `#FFC09F`, `#FF9A76`

---

## 📱 Step 6: Update Site Metadata

**File**: `app/layout.tsx`, line ~15

```typescript
export const metadata: Metadata = {
  title: "Happy Birthday [Name]! 🎉",
  description: "Your custom description here",
};
```

---

## 🎵 Step 7: Add Background Music (Optional)

1. Add your music file: `public/birthday-song.mp3`
2. **File**: `app/page.tsx`, add after line ~14:

```typescript
useEffect(() => {
  const audio = new Audio('/birthday-song.mp3');
  audio.loop = true;
  
  if (musicPlaying) {
    audio.play().catch(() => {}); // Handle autoplay restrictions
  } else {
    audio.pause();
  }
  
  return () => {
    audio.pause();
    audio.currentTime = 0;
  };
}, [musicPlaying]);
```

---

## ✅ Checklist Before Deploy

- [ ] Updated name in Hero section
- [ ] Personalized the letter content
- [ ] Added all 65 photos to `public/memories/`
- [ ] Updated birth date
- [ ] Customized mini-sections (optional)
- [ ] Changed colors (optional)
- [ ] Updated page title and metadata
- [ ] Tested on mobile and desktop
- [ ] Added background music (optional)

---

## 🚀 Ready to Deploy?

1. **Test locally**: Run `npm run dev` and check everything
2. **Build**: Run `npm run build` to check for errors
3. **Deploy**: Push to GitHub and deploy on Vercel

---

## 💡 Pro Tips

- **Photo Quality**: Keep images under 500KB each for fast loading
- **Letter Length**: 3-5 paragraphs work best for readability
- **Colors**: Test both light and dark mode after changing colors
- **Mobile**: Always test on mobile - most visitors will use phones!

---

## 🆘 Need Help?

Common issues and fixes:

**Photos not showing?**
- Check file names are exactly `photo-1.jpg` through `photo-65.jpg`
- Ensure they're in `public/memories/` folder
- File extensions must be lowercase (.jpg not .JPG)

**Letter text too long?**
- Letter scrolls automatically - that's okay!
- Keep paragraphs under 150 words for best UX

**Build errors?**
```bash
npm install
npm run build
```

---

**That's it! You're ready to create an amazing birthday surprise! 🎉**