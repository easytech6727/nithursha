# 🎉 Happy 24th Birthday Nithursha! 🎂

A premium, mobile-first birthday celebration website built with Next.js, Tailwind CSS, and Framer Motion. This website features beautiful animations, an interactive photo gallery, a heartfelt letter, and a guestbook for birthday wishes.

## ✨ Features

### 🎨 Design & UX
- **Pastel Pink Theme**: Soft cream, pastel pinks, warm gold accents
- **Dark Mode**: Toggle between light and dark themes
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Parallax Effects**: Multi-layer parallax scrolling on hero section
- **Accessibility**: WCAG compliant with keyboard navigation, semantic HTML, ARIA labels

### 📱 Sections

1. **Hero/Landing Page**
   - Full-screen animated hero with floating confetti
   - Central teddy bear illustration with rotating icons (dress, cake, chocolate, ice-cream)
   - Smooth scroll CTAs with hover effects
   - Parallax background layers

2. **Sticky Navigation Bar**
   - Mobile hamburger menu with smooth transitions
   - Theme toggle (light/dark mode)
   - Music toggle (background music control)
   - Smooth scroll to sections

3. **The Letter**
   - Interactive "openable" envelope animation
   - Typewriter-style text reveal
   - Personalized birthday message
   - PDF download functionality

4. **Memory Gallery (65 Photos)**
   - Responsive masonry grid layout
   - Category filters (Uni Days, Outings, Chats, Photoshoots)
   - Lightbox with keyboard navigation
   - Lazy loading with intersection observer
   - Timeline view option

5. **Interactive Mini-Sections**
   - **Teddy Closet**: Carousel with 3D tilt effects
   - **Sweet Corner**: Animated cards for cake, chocolate, and ice-cream
   - **Dress Reel**: Swipeable fashion moments carousel

6. **Birthday Wishes & Guestbook**
   - Form to submit birthday wishes
   - Real-time confetti message display
   - API integration for storing wishes
   - Display of recent wishes

7. **Footer**
   - Social sharing buttons (WhatsApp, Twitter, Facebook, Instagram)
   - Download birthday card option
   - Quick navigation links

### 🎁 Special Features
- **Gift Popup**: First-time visitor surprise animation
- **Confetti Effects**: Animated confetti throughout the experience
- **PDF Generation**: Download birthday letter as PDF
- **Social Sharing**: One-click sharing to social media

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. **Clone or navigate to the project:**
```bash
cd nithursha-birthday
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### 1. Replace the Letter Content

Edit `components/Letter.tsx` to personalize the birthday message:

```typescript
const letterContent = {
  greeting: "Dearest Akka Nithursha,",
  intro: `Your personalized intro here...`,
  body: [
    `Paragraph 1...`,
    `Paragraph 2...`,
    // Add more paragraphs
  ],
  closing: `Your closing message...`,
  signature: "With all my love,",
  signoff: "Your Name 💕",
};
```

### 2. Add Your 65 Photos

1. Collect 65 photos (JPG or PNG format)
2. Name them sequentially: `photo-1.jpg` through `photo-65.jpg`
3. Optimize images (recommended: under 500KB each)
4. Place them in the `public/memories/` folder

**Tip**: Use [TinyPNG](https://tinypng.com/) or [ImageOptim](https://imageoptim.com/) to compress images

### 3. Update Personal Details

Edit `components/Hero.tsx`:
```typescript
// Change the headline and subline
<motion.h1>
  Happy 24th Birthday, YourName
</motion.h1>
<motion.p>
  My beloved friend — since [Your Story]
</motion.p>
```

Edit birth date:
```typescript
<motion.p>
  Born [Month Day, Year] ✨
</motion.p>
```

### 4. Customize Mini-Sections

Edit `components/MiniSections.tsx`:

**Teddy Facts:**
```typescript
const teddyFacts = [
  { emoji: '🧸', name: 'Your Teddy Name', fact: 'Your fact' },
  // Add more teddies
];
```

**Sweet Treats:**
```typescript
const sweetTreats = [
  { emoji: '🍰', name: 'Favorite Cake', description: 'Description' },
  // Customize treats
];
```

**Outfit Photos:**
```typescript
const outfitPhotos = [
  { emoji: '👗', name: 'Outfit Name', occasion: 'When/Where' },
  // Add more outfits
];
```

### 5. Adjust Gallery Photo Count

If you have fewer or more than 65 photos, edit `components/Gallery.tsx`:

```typescript
return Array.from({ length: 65 }, (_, i) => ({ // Change 65 to your count
  id: i + 1,
  // ...
}));
```

### 6. Customize Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --pastel-pink: #FFB3D9;
  --pastel-rose: #FFC8DD;
  --warm-gold: #FFD700;
  /* Change these values to your preferred colors */
}
```

### 7. Update Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Custom Title",
  description: "Your custom description",
  keywords: ["your", "keywords"],
};
```

## 🎵 Adding Background Music (Optional)

To add background music that plays when the music toggle is activated:

1. Add your music file to `public/` (e.g., `birthday-song.mp3`)
2. Update `app/page.tsx`:

```typescript
useEffect(() => {
  const audio = new Audio('/birthday-song.mp3');
  audio.loop = true;
  
  if (musicPlaying) {
    audio.play();
  } else {
    audio.pause();
  }
  
  return () => audio.pause();
}, [musicPlaying]);
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Birthday website for Nithursha"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Deploy to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy
   - Your site will be live at `https://your-project.vercel.app`

3. **Custom Domain (Optional):**
   - Go to Project Settings > Domains
   - Add your custom domain

### Alternative Deployment Options

- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Deploy through AWS console
- **Cloudflare Pages**: Connect and deploy

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF)
- **Lazy Loading**: [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer)
- **Font**: [Google Fonts](https://fonts.google.com/) (Caveat & Poppins)

## 📦 Project Structure

```
nithursha-birthday/
├── app/
│   ├── api/
│   │   └── wishes/
│   │       └── route.ts          # API endpoint for wishes
│   ├── globals.css               # Global styles and animations
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main page component
├── components/
│   ├── Navbar.tsx                # Sticky navigation
│   ├── Hero.tsx                  # Hero/landing section
│   ├── Letter.tsx                # Birthday letter modal
│   ├── Gallery.tsx               # 65-photo gallery
│   ├── MiniSections.tsx          # Teddy/Sweets/Dress sections
│   ├── Wishes.tsx                # Guestbook form
│   └── Footer.tsx                # Footer with social share
├── public/
│   ├── memories/                 # Place your 65 photos here
│   └── animations/               # Optional Lottie files
├── package.json
└── README.md
```

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support (Tab, Enter, Escape, Arrow keys)
- Focus management in modals
- Skip to content link
- Minimum 44px touch targets
- High contrast mode support
- Alt text for images

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Images Not Showing
- Ensure images are in `public/memories/` folder
- Check file names match exactly: `photo-1.jpg` through `photo-65.jpg`
- Verify image formats are JPG or PNG

### Wishes Not Saving
- The current implementation uses in-memory storage
- For production, connect to a database (Supabase, Firebase, etc.)
- Update `app/api/wishes/route.ts` with your database logic

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

## 🎨 Performance Optimization

- Images are lazy-loaded using Intersection Observer
- Next.js automatic image optimization
- CSS animations use GPU acceleration
- Code splitting for optimal load times
- Prefetching for instant navigation

## 📄 License

This is a personal birthday project. Feel free to use it as inspiration for your own celebrations!

## 💖 Made With Love

Created with ❤️ for Nithursha's 24th Birthday celebration.

---

## 🎉 Happy Birthday, Nithursha! 🎂

May your 24th year be filled with joy, success, and all the teddies, chocolates, and beautiful dresses you deserve! 💕

---

For questions or issues, feel free to customize this project to your heart's content. Every detail was crafted with love to make this day special! ✨
