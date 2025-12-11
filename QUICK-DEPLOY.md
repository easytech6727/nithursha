# 🎯 Quick Deploy Commands - Copy & Paste

## Step 1: Push to GitHub

```powershell
# Navigate to project (if not already there)
cd C:\nithursha\nithursha-birthday

# Initialize git (if not done)
git init

# Add all files
git add .

# Create commit
git commit -m "Nithursha birthday website - ready for deployment"

# Create GitHub repo first at: https://github.com/new
# Then replace YOUR-USERNAME below with your GitHub username:

git remote add origin https://github.com/YOUR-USERNAME/nithursha-birthday.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Vercel (Easiest Way)

### Via Website (Recommended):
1. Go to: https://vercel.com
2. Sign up with GitHub
3. Click "Add New" → "Project"
4. Import your `nithursha-birthday` repository
5. Click "Deploy" (all settings auto-detected)
6. Done! Get your live URL 🎉

### Via CLI (Alternative):
```powershell
npm install -g vercel
vercel login
vercel --prod
```

---

## After Making Changes Later:

```powershell
git add .
git commit -m "Updated content"
git push
```
**Vercel auto-deploys automatically!** ✨

---

## Your URLs (fill in):
- GitHub: `https://github.com/_____/nithursha-birthday`
- Live Site: `https://_____________.vercel.app`

---

**Need help? Open DEPLOYMENT-GUIDE.md for detailed instructions!**
