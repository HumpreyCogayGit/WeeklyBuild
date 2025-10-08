# Project Organization Guide

## How to Add Complete Projects to WeeklyBuild

This guide explains how to organize and add finished projects to your WeeklyBuild site.

---

## 📁 Project Structure

```
WeeklyBuild/
├── src/
│   ├── projects/              # ← Complete project files go here
│   │   ├── spirograph.html    # Self-contained HTML project
│   │   └── [your-project].html
│   └── data/
│       └── projects.js        # Project metadata
```

---

## ✅ Adding a Complete Project (3 Steps)

### Step 1: Create Your Project File

Create a **single HTML file** in `src/projects/` that contains:
- HTML structure
- CSS styles (in `<style>` tags)
- JavaScript code (in `<script>` tags)

**Example:** `src/projects/spirograph.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your Project</title>
    <style>
        /* All your CSS here */
    </style>
</head>
<body>
    <!-- Your HTML here -->
    
    <script>
        // All your JavaScript here
    </script>
</body>
</html>
```

### Step 2: Add Project Metadata

Edit `src/data/projects.js` and add your project to the appropriate category:

```javascript
{
    id: 'your-project-id',
    slug: 'your-project-slug',
    title: 'Your Project Title',
    subtitle: 'Tech Stack Used',
    description: 'Brief description of the project',
    status: 'completed',  // or 'in-progress', 'planned'
    date: '2025-10-08',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    overview: 'Detailed overview...',
    problem: 'What problem does this solve?',
    solution: 'How did you solve it?',
    challenges: [
        'Challenge 1',
        'Challenge 2'
    ],
    learnings: [
        'Learning 1',
        'Learning 2'
    ],
    futureImprovements: [
        'Improvement 1',
        'Improvement 2'
    ],
    github: '',  // Optional: GitHub repo URL
    demo: './src/projects/your-project.html',  // ← Path to your HTML file
    featured: true  // Set to true to show in Featured section
}
```

### Step 3: Test Locally

1. Start your local server: `python -m http.server 8000`
2. Visit: `http://127.0.0.1:8000/`
3. Navigate to Projects → Your Category → Your Project
4. The project will display with an **embedded interactive demo**

---

## 🎯 Project Categories

### 1. **Data Engineering** (`data-engineering`)
- Data pipelines, ETL, infrastructure projects

### 2. **AI & Machine Learning** (`ai-ml`)
- ML models, APIs, AI applications

### 3. **Snippets & Algorithms** (`snippets-algorithms`)
- Code snippets, visualizations, utilities
- **Perfect for interactive demos!**

---

## 🌟 Featured Projects

Set `featured: true` to display your project in the **Featured Projects** section at the top of the Projects page.

---

## 📊 Project Statuses

- **`'completed'`**: Project is done ✅ (shows green badge)
- **`'in-progress'`**: Currently working on it 🟠 (shows orange badge)
- **`'planned'`**: Not started yet ⚪ (shows gray badge)

---

## 💡 Best Practices

### ✅ DO:
- Keep all code in **one HTML file** for easy management
- Use meaningful project IDs and slugs (lowercase, hyphenated)
- Fill in all metadata fields for better documentation
- Test the demo before committing
- Add detailed challenges and learnings

### ❌ DON'T:
- Split code across multiple files (unless necessary)
- Use external dependencies that require installation
- Leave metadata fields empty
- Forget to update the status when project is complete

---

## 🔗 Demo Link Options

### Internal Demo (Embedded)
```javascript
demo: './src/projects/your-project.html'
```
- Shows inline iframe in project detail page
- Best for interactive visualizations and tools

### External Demo
```javascript
demo: 'https://your-live-demo.com'
```
- Opens in new tab
- Best for deployed applications

### No Demo
```javascript
demo: ''
```
- Shows "Live Demo" button only if provided

---

## 📝 Example: Spirograph Project

See `src/projects/spirograph.html` for a complete example of:
- Self-contained HTML/CSS/JavaScript
- Clean, documented code
- Interactive controls
- Professional styling
- Responsive design

---

## 🚀 Deployment

When you push to GitHub, Vercel will automatically:
1. Deploy your main app
2. Include all project files in `src/projects/`
3. Make demos accessible at their paths

---

## 📦 File Naming Convention

Use descriptive, lowercase names with hyphens:
- ✅ `spirograph.html`
- ✅ `data-visualization-dashboard.html`
- ✅ `sorting-algorithm-visualizer.html`
- ❌ `Project1.html`
- ❌ `my_project.html`

---

## 🎨 Styling Tips

For consistent look with your site:
```css
/* Use similar colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: #333;
font-family: 'Arial', sans-serif;

/* Match button styles */
button {
    background: #667eea;
    color: white;
    padding: 12px 30px;
    border-radius: 8px;
}
```

---

## 🔍 Finding Your Project

After adding:
1. Go to Projects page
2. Click on the category card
3. Click on your project card
4. See full details + interactive demo!

---

## Questions?

- Check existing projects in `src/projects/` for examples
- Review metadata in `src/data/projects.js`
- Test locally before deploying

Happy building! 🚀
