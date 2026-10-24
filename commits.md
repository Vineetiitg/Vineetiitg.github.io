# 📦 Git Commit Log & Sequence for Vineet Tiwari Portfolio

> **Important:** As requested, no automated commits have been executed. All commands are prepared below so you can execute them yourself at clean, regular intervals to build an authentic, professional commit history on your GitHub profile.

---

### Step 0: Initialize Git Repository
Run this once from your project root:
```bash
git init
git branch -M main
```

---

### Commit 1: Project Architecture & Static Assets
Staging the project structure, favicon, and brand SVG assets.

```bash
git add assets/
git commit -m "feat(scaffold): initialize portfolio project structure and brand assets"
```

---

### Commit 2: Design System, Pitch Black & Bold Sand Themes
Staging the dual-theme design system: OLED Pitch Black (#000000) and Bold Warm Sand/Clay with electric amber accents.

```bash
git add css/style.css
git commit -m "feat(styles): implement pitch-black dark theme, warm-sand light theme, and design tokens"
```

---

### Commit 3: Interactive Behaviors & Theme Switcher
Staging vanilla JS controllers for dark/light toggle with localStorage persistence, sticky nav, active section observer, and clipboard toast.

```bash
git add js/main.js
git commit -m "feat(scripts): add theme switcher, sticky nav blur, active section observer, and clipboard copy"
```

---

### Commit 4: Semantic Content & Hero Section
Staging the semantic HTML content, including Hero introduction, status indicator, and prompt preview card.

```bash
git add index.html
git commit -m "feat(content): integrate dual-degree background, SafeChat, and Agentic Copilot project artifacts"
```

---

### Commit 5: AWS Cloud Deployment Scripts & Automation
Staging the AWS S3 and CloudFront sync scripts for automated cloud hosting.

```bash
git add deploy-aws.ps1 deploy-aws.sh
git commit -m "chore(deploy): add automated AWS S3 and CloudFront invalidation scripts"
```

---

### Commit 6: Project Documentation & Deployment Guides
Staging the comprehensive README with GitHub Pages (`.github.io`) and AWS deployment walkthrough.

```bash
git add README.md commits.md
git commit -m "docs: add comprehensive deployment guide for GitHub Pages and AWS CloudFront"
```

---

### Step 7: Push to GitHub

```bash
# Link to your remote GitHub repository:
git remote add origin https://github.com/Vineetiitg/Vineetiitg.github.io.git

# Push all commits:
git push -u origin main
```

