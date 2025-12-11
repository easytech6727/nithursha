# 🚀 Deployment Guide

Quick guide to deploy your birthday website to production.

## Option 1: Vercel (Recommended - Easiest)

### Step 1: Prepare Your Code

```bash
# Initialize git if you haven't
git init

# Add all files
git add .

# Commit
git commit -m "Birthday website for Nithursha"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js - click "Deploy"
6. Wait 2-3 minutes - done! 🎉

**Your site will be live at**: `https://your-project.vercel.app`

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to Project Settings
2. Click "Domains"
3. Add your custom domain (e.g., `happybirthday-nithursha.com`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-30 minutes)

---

## Option 2: Netlify

### Deploy via GitHub

1. Push code to GitHub (see Vercel Step 1)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import existing project"
4. Connect to GitHub and select your repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

### Deploy via CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build your site
npm run build

# Deploy
netlify deploy --prod
```

---

## Option 3: Manual Deployment (Any Host)

### Build the Application

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start
```

### Required Server Configuration

- **Node.js**: Version 18 or higher
- **Port**: 3000 (or configure via environment)
- **Environment Variables**: None required for basic setup

### Server Files to Upload

Upload these to your server:
```
.next/          (build output)
public/         (static assets)
node_modules/   (dependencies)
package.json
next.config.ts
```

---

## Environment Variables (If Needed)

Create `.env.local` file:

```env
# Optional: Add if you integrate a database
DATABASE_URL=your_database_url

# Optional: Add if you use external services
NEXT_PUBLIC_API_URL=your_api_url
```

---

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All images display properly
- [ ] Letter modal opens and closes
- [ ] Gallery lightbox works
- [ ] Wishes form submits successfully
- [ ] Mobile responsive on actual device
- [ ] Dark mode toggle works
- [ ] Social share buttons work
- [ ] PDF download works
- [ ] Performance is acceptable (run Lighthouse test)

---

## Performance Optimization Tips

### After Deployment

1. **Test Speed**
   - Use [PageSpeed Insights](https://pagespeed.web.dev/)
   - Target score: 90+ on mobile

2. **Optimize Images**
   - Ensure all images in `public/memories/` are compressed
   - Use WebP format if possible
   - Target: < 500KB per image

3. **Enable CDN**
   - Vercel/Netlify include CDN automatically
   - For manual deployment, consider Cloudflare

4. **Monitor Performance**
   - Set up Vercel Analytics (free)
   - Or use Google Analytics

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading After Deploy

- Check images are in `public/memories/` folder
- Verify image paths are lowercase
- Ensure images were committed to git
- Check file sizes (< 10MB per image)

### API Routes Not Working

- Ensure `/api` directory is in your repo
- Check Next.js version is 13+
- Verify serverless functions are enabled on your host

### 404 Errors

- Clear browser cache
- Check Vercel/Netlify build logs
- Ensure all imports use correct paths
- Verify `next.config.ts` is present

---

## Updating the Site

### After Initial Deployment

```bash
# Make your changes
# Test locally
npm run dev

# Build to check for errors
npm run build

# Commit and push
git add .
git commit -m "Update birthday content"
git push

# Vercel/Netlify auto-redeploys!
```

---

## Cost Estimate

### Vercel (Recommended)
- **Free Tier**: Perfect for this project
- **Bandwidth**: Unlimited
- **Builds**: 6,000 minutes/month
- **Cost**: $0/month

### Netlify
- **Free Tier**: Also sufficient
- **Bandwidth**: 100GB/month
- **Build Minutes**: 300/month
- **Cost**: $0/month

### Custom Domain
- **.com domain**: ~$12/year
- **.me/.birthday**: ~$15-30/year
- Optional but nice touch!

---

## Going Live Checklist

Before sharing the website:

1. [ ] Test on multiple devices (phone, tablet, laptop)
2. [ ] Test on different browsers (Chrome, Safari, Firefox)
3. [ ] Check all 65 photos load correctly
4. [ ] Verify letter content is finalized
5. [ ] Test wishes submission
6. [ ] Check social share links
7. [ ] Review for typos
8. [ ] Take screenshots for memories!
9. [ ] Share the link! 🎉

---

## Sharing Your Website

**Share link**:
```
🎉 Happy Birthday, Nithursha! 🎂

I created a special website to celebrate your 24th birthday!
Check it out: https://your-site.vercel.app

Made with ❤️
```

**QR Code**:
- Generate at [qr-code-generator.com](https://www.qr-code-generator.com/)
- Print on birthday card
- Easy mobile access!

---

## Support & Updates

After deployment, the site will:
- ✅ Load instantly from CDN
- ✅ Auto-update when you push to GitHub (Vercel/Netlify)
- ✅ Scale automatically with traffic
- ✅ Work on all devices
- ✅ Be available 24/7

**Domain expires?** Renew annually through your registrar

**Want to update?** Just push to GitHub - it auto-deploys!

---

## 🎊 You're All Set!

Your beautiful birthday website is now live and ready to share!

**What's Next?**
1. Test the live site thoroughly
2. Share the link with the birthday person
3. Watch the wishes roll in
4. Save the site as a memory! 💕

---

**Happy deploying! 🚀**