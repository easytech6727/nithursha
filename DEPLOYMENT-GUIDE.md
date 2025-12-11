# 🚀 Deploy to Vercel - Step by Step Guide

## Prerequisites
- Git installed on your computer
- GitHub account (free)
- Vercel account (free) - sign up at https://vercel.com

---

## Part 1: Push to GitHub

### Step 1: Initialize Git Repository (if not already done)
```powershell
cd C:\nithursha\nithursha-birthday
git init
```

### Step 2: Add All Files
```powershell
git add .
```

### Step 3: Create First Commit
```powershell
git commit -m "Initial commit: Nithursha birthday website"
```

### Step 4: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `nithursha-birthday` (or any name you prefer)
3. Set to **Private** (recommended for personal sites)
4. **Don't** initialize with README (we already have code)
5. Click "Create repository"

### Step 5: Connect and Push to GitHub
GitHub will show you commands. Use these:

```powershell
# Add remote repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/nithursha-birthday.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example:**
```powershell
git remote add origin https://github.com/john/nithursha-birthday.git
git branch -M main
git push -u origin main
```

You'll be asked to login to GitHub - use your credentials.

---

## Part 2: Deploy to Vercel

### Option A: Deploy via Vercel Website (Easiest)

1. **Go to Vercel**
   - Visit https://vercel.com
   - Click "Sign Up" (use GitHub account for easy integration)

2. **Import Project**
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Select your GitHub repository: `nithursha-birthday`

3. **Configure Project**
   - **Project Name**: `nithursha-birthday` (or custom name)
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)

4. **Add Environment Variables (Optional)**
   - Skip this for now (not needed for this project)

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment
   - You'll get a live URL like: `https://nithursha-birthday.vercel.app`

### Option B: Deploy via Vercel CLI

```powershell
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - What's your project's name? nithursha-birthday
# - In which directory is your code located? ./
# - Auto-detected Next.js. Continue? Yes
# - Want to override settings? No

# Deploy to production
vercel --prod
```

---

## Part 3: Post-Deployment

### Your Website is Live! 🎉

You'll receive URLs like:
- **Production**: `https://nithursha-birthday.vercel.app`
- **Preview** (for each commit): `https://nithursha-birthday-git-main.vercel.app`

### Custom Domain (Optional)
1. Go to your project in Vercel dashboard
2. Settings → Domains
3. Add your custom domain (if you have one)
4. Follow DNS configuration steps

### Update Website Later
Whenever you make changes:

```powershell
cd C:\nithursha\nithursha-birthday

# Save changes
git add .
git commit -m "Updated photos/content"
git push

# Vercel auto-deploys! No need to redeploy manually
```

---

## Part 4: Important Before Deploying

### ✅ Checklist:

1. **Add Your Photos**
   - Make sure all 65 photos are in `public/memories/` folder
   - Named as: `IMG-20251211-WA0015.jpg` through `IMG-20251211-WA0083.jpg`

2. **Add Background Music (Optional)**
   - Add `birthday-music.mp3` to `public/` folder
   - Or remove the audio file reference in `app/page.tsx` line 44

3. **Test Locally First**
   ```powershell
   npm run build
   npm run start
   ```
   - Visit http://localhost:3000
   - Check all photos load
   - Test all features

4. **Update Personal Info (Optional)**
   - Birthday message in `components/Letter.tsx`
   - Captions in `components/Gallery.tsx`

---

## Troubleshooting

### Build fails on Vercel?
- Check Vercel build logs for specific errors
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

### Photos not showing on deployed site?
- Verify photos are committed to Git: `git status`
- Check photo filenames match exactly
- Images must be in `public/memories/` folder

### Music not playing?
- Audio file must be in `public/` folder
- Update path in `app/page.tsx` to match your filename
- Or use an external URL temporarily

### Site too slow?
- Compress photos before uploading (max 500KB each)
- Use tools like TinyPNG or ImageOptim
- Vercel automatically optimizes Next.js images

---

## Quick Commands Reference

```powershell
# Git commands
git status                    # Check changes
git add .                     # Stage all changes
git commit -m "message"       # Commit changes
git push                      # Push to GitHub

# Development
npm run dev                   # Start dev server
npm run build                 # Build for production
npm run start                 # Run production build locally

# Vercel
vercel                        # Deploy preview
vercel --prod                 # Deploy to production
vercel logs                   # View deployment logs
```

---

## Support Links

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **GitHub Help**: https://docs.github.com

---

## Your Deployment URLs (fill in after deploying):

- **GitHub Repo**: `https://github.com/_________/nithursha-birthday`
- **Vercel Production**: `https://_________________________.vercel.app`
- **Vercel Dashboard**: `https://vercel.com/dashboard`

---

**Ready to deploy? Let's go! 🚀**

1. Push to GitHub first (Part 1)
2. Then deploy to Vercel (Part 2)
3. Share the live URL with Nithursha! 🎂
