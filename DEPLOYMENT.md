# Deployment Guide - WeeklyBuild

## 🚀 Vercel Deployment

### Quick Deploy

The app is now configured to work with Vercel! Follow these steps:

### Option 1: Deploy via Vercel CLI

```powershell
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N** (first time) or **Y** (subsequent)
- Project name: **weeklyBuild** (or keep default)
- In which directory is your code? **./** (root)
- Want to override settings? **N**

### Option 2: Deploy via GitHub

1. Push your code to GitHub:
   ```powershell
   git add .
   git commit -m "Configure for Vercel deployment"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect settings - just click "Deploy"!

### Configuration Files

Your project now includes:

#### `vercel.json`
Configures Vercel to:
- Serve from root directory
- Handle routing correctly
- Set proper headers for JSX files

#### Root `index.html`
Updated to use relative paths (`./src/`) instead of parent paths (`../src/`)

## 🔧 How It Works

### File Structure for Deployment
```
WeeklyBuild/                 (Root - what Vercel deploys)
├── index.html              ← Entry point at root
├── vercel.json             ← Vercel configuration
├── src/                    ← All source files accessible
│   ├── components/
│   ├── hooks/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
└── public/                 ← Alternative local dev
    └── index.html
```

### Path Resolution

**Local Development (using public/):**
- Navigate to `public/index.html`
- Uses `../src/` paths

**Production (Vercel):**
- Serves root `index.html`
- Uses `./src/` paths
- Vercel serves all files from root

## 🌐 After Deployment

Once deployed, Vercel will give you:
- **Production URL**: `https://weekly-build-xxx.vercel.app`
- **Auto-generated preview URLs** for each commit
- **Automatic HTTPS** certificate
- **CDN distribution** worldwide

## 🐛 Troubleshooting

### Issue: "Module not found" or blank page

**Solution 1: Check browser console**
```powershell
# Open browser DevTools (F12) and check Console tab
# Look for 404 errors on .jsx or .css files
```

**Solution 2: Verify vercel.json exists**
```powershell
# Check if vercel.json is in root
ls vercel.json
```

**Solution 3: Clear Vercel cache**
```powershell
vercel --force
```

### Issue: React not loading

**Check:**
- ✅ CDN links are accessible (check browser console)
- ✅ All script tags have `type="text/babel"`
- ✅ Paths use `./src/` not `../src/`

### Issue: Styles not applying

**Check:**
```html
<!-- Should be: -->
<link rel="stylesheet" href="./src/styles/main.css">

<!-- Not: -->
<link rel="stylesheet" href="../src/styles/main.css">
```

## 📊 Deployment Checklist

Before deploying:
- [ ] Root `index.html` exists with correct paths
- [ ] `vercel.json` configuration file exists
- [ ] All files committed to Git
- [ ] Tested locally (open root index.html)
- [ ] Browser console shows no errors

## 🔄 Redeployment

Every time you push to GitHub, Vercel automatically redeploys!

```powershell
# Make changes
# Then commit and push
git add .
git commit -m "Update component"
git push origin main

# Vercel automatically redeploys! 🎉
```

## 🎯 Local Testing Before Deploy

Test the production structure locally:

```powershell
# From project root (not public folder)
npx http-server . -p 8000

# Open http://localhost:8000
```

This simulates how Vercel will serve your files.

## 📝 Environment Variables (Future)

If you need environment variables:

1. Create `.env` file locally (already gitignored)
2. Add to Vercel via dashboard:
   - Project Settings → Environment Variables
   - Add your variables
   - Redeploy

## 🚀 Performance Tips

### Current Setup
- ✅ Using React 18 from CDN
- ✅ Files served via Vercel's global CDN
- ✅ Automatic compression

### Future Optimizations
- Use production React builds
- Add service worker for offline support
- Implement code splitting
- Add image optimization

## 📱 Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Done! 🎉

## 🔐 Security Headers (Already Configured)

The `vercel.json` includes:
- Cache-Control headers
- Proper Content-Type for JavaScript
- HTTPS enforcement (automatic)

## 📈 Monitoring

Vercel provides:
- **Analytics**: View traffic and performance
- **Logs**: Check deployment logs and runtime logs
- **Speed Insights**: See Core Web Vitals

Access via: Project Dashboard → Analytics/Logs

## ✨ Summary

**Your app is now Vercel-ready!**

Just run:
```powershell
vercel
```

Or push to GitHub and connect to Vercel for automatic deployments! 🚀

---

**Need help?** Check [Vercel Documentation](https://vercel.com/docs)
