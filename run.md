# How to Run WeeklyBuild Locally

## Quick Start (Recommended)

Open PowerShell in the project root directory and run:

```powershell
python -m http.server 8000
```

Then open your browser to: **http://127.0.0.1:8000/**

## Alternative Methods

### Method 1: Python HTTP Server (Port 8000)
```powershell
cd c:\Root\dev\WeeklyBuild
python -m http.server 8000
```
Navigate to: `http://127.0.0.1:8000`

### Method 2: Node.js HTTP Server
```powershell
npx http-server . -p 8000
```
Navigate to: `http://127.0.0.1:8000`

### Method 3: Direct File Opening
Simply open `index.html` directly in your browser (may have limitations with some features)

## Project Structure
- **Entry Point**: `index.html` (at root level)
- **React Components**: `src/components/`
- **Project Data**: `src/data/projects.js`
- **Embedded Projects**: `src/projects/`
- **Styling**: `src/styles/main.css`

## Features Available
- ✅ Animated ASCII rabbit header
- ✅ Project portfolio with 3 categories
- ✅ Interactive Spirograph Generator (embedded)
- ✅ Professional olive green theme
- ✅ Responsive design
- ✅ Project detail pages with demos

## Notes
- No build process required - uses React via CDN
- All files served from root directory for Vercel deployment
- Local server recommended for proper CORS handling

---
**Last Updated**: October 8, 2025



git add .
git status
git commit -m 'Message'
git push origin main



IDEA BANK
https://uiverse.io/elements