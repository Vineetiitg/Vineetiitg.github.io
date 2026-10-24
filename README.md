# Vineet Tiwari — AI/ML Engineer Portfolio

A modern, high-performance developer portfolio featuring a **"Claude Editorial Dark"** aesthetic. Crafted with clean semantic HTML5, modern vanilla CSS with design tokens, and lightweight JavaScript. Zero bloated dependencies, zero build steps, and lightning-fast loading speeds.

---

## 🎨 Design System: Dual Bold Theme System
- **Dark Mode (Default):** True OLED pitch black (`#000000`) background with ultra-dark card surfaces (`#0c0c0c`), crisp border lines, and electric amber/gold accents (`#f59e0b`).
- **Light Mode:** Pale grayish-green canvas (`#d8e2d8`) with soft sage surfaces (`#c9d5c9`) and deep forest emerald accents (`#1b5e39`) &mdash; clean, organic, and easy on the eyes.
- **Social & Contact Dock:** Minimalist icon-only controls for GitHub, LinkedIn, Twitter/X, and Email with tooltips and one-click copy.
- **Theme Switcher:** Seamless header toggle with animated Sun/Moon icons, state persistence via `localStorage`, and zero flash on load.

---

## 📁 Project Architecture

```
Vineet_Portfolio/
├── index.html              # Core single-page portfolio layout
├── css/
│   └── style.css           # Complete design tokens, responsive rules & styles
├── js/
│   └── main.js             # Vanilla JS for header blur, active nav, drawer & copy
├── assets/
│   ├── favicon.svg         # Monospace "VT" warm amber favicon
│   └── avatar-placeholder.svg  # Minimalist avatar graphic
├── deploy-aws.ps1          # Windows PowerShell script for AWS S3 + CloudFront sync
├── deploy-aws.sh           # Bash deployment script for Linux/macOS
├── commits.md              # Clean, interval-based Git commit script & messages
└── README.md               # Complete setup, GitHub Pages & AWS deployment guide
```

---

## 💻 Local Preview

You do not need Node.js or any build tool to run this site. Simply open `index.html` in any modern web browser, or serve it with Python/VS Code:

```bash
# Using Python built-in HTTP server:
python -m http.server 8000
```
Then visit: `http://localhost:8000`

---

## 🌐 Deployment Method 1: GitHub Pages (Free `Vineetiitg.github.io`)

GitHub Pages gives you a completely free, fast, SSL-secured domain under `https://Vineetiitg.github.io`.

### Step 1: Create the Special Repository on GitHub
1. Log in to [GitHub](https://github.com).
2. Click **New Repository** (or visit [github.com/new](https://github.com/new)).
3. Under **Repository name**, enter **exactly**:
   ```
   Vineetiitg.github.io
   ```
4. Set the visibility to **Public**.
5. Leave "Add a README file" unchecked (you already have this project).
6. Click **Create repository**.

### Step 2: Push Your Code
Follow the sequential commit steps in [`commits.md`](./commits.md), then push to GitHub:

```bash
git remote add origin https://github.com/Vineetiitg/Vineetiitg.github.io.git
git branch -M main
git push -u origin main
```

### Step 3: Verify GitHub Pages Settings
1. Go to your repository on GitHub $\rightarrow$ **Settings** $\rightarrow$ **Pages** (in the left sidebar).
2. Under **Build and deployment**:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` / `root`
3. Click **Save**.
4. Within 60 seconds, GitHub Pages will deploy your website to `https://<your-github-username>.github.io`.

---

## ☁️ Deployment Method 2: AWS (S3 + CloudFront + ACM)

For production hosting with AWS global Edge CDN distribution and custom domains:

### Phase 1: Create a Private S3 Bucket
1. Go to the **Amazon S3 Console** $\rightarrow$ **Create bucket**.
2. Name your bucket (e.g., `vineet-portfolio-production`).
3. Select your preferred AWS Region (e.g., `ap-south-1` for Mumbai).
4. Keep **Block all public access** checked (CloudFront will access it securely via Origin Access Control).
5. Click **Create bucket**.

### Phase 2: Create a CloudFront Distribution
1. Go to the **CloudFront Console** $\rightarrow$ **Create distribution**.
2. **Origin domain:** Select your newly created S3 bucket.
3. **Origin access:** Select **Origin access control (OAC)** $\rightarrow$ Click **Create control setting** $\rightarrow$ Save.
4. **Default cache behavior:**
   - **Viewer protocol policy:** `Redirect HTTP to HTTPS`.
   - **Allowed HTTP methods:** `GET, HEAD`.
5. **Default root object:** Enter `index.html`.
6. Click **Create distribution**.
7. In the top notification banner, click **Copy policy**, then navigate to your S3 bucket $\rightarrow$ **Permissions** $\rightarrow$ **Bucket policy** $\rightarrow$ paste the copied policy and save.

### Phase 3: Automated One-Click Deployment
Whenever you make updates, run the included deployment script:

**On Windows (PowerShell):**
```powershell
.\deploy-aws.ps1 -BucketName "vineet-portfolio-production" -DistributionId "YOUR_CLOUDFRONT_DIST_ID"
```

**On Linux / macOS (Bash):**
```bash
chmod +x deploy-aws.sh
./deploy-aws.sh vineet-portfolio-production YOUR_CLOUDFRONT_DIST_ID
```

---

## 📝 Managing Your Git Commits
To keep your Git commit history clean and reflective of thoughtful engineering:
- Refer to [`commits.md`](./commits.md).
- It breaks down the repository into 6 semantic, conventional commits (`feat(scaffold)`, `feat(styles)`, `feat(scripts)`, `feat(content)`, `chore(deploy)`, `docs`).
- You can execute each commit command one by one at your own pace before pushing.

---

## 📬 Contact & Inquiries
- **Developer:** Vineet Tiwari
- **Email:** [vineettiwari971@gmail.com](mailto:vineettiwari971@gmail.com)
- **Phone:** +91-9516608788
- **GitHub:** [github.com/Vineetiitg](https://github.com/Vineetiitg)
- **LinkedIn:** [linkedin.com/in/vineet-tiwari971](https://www.linkedin.com/in/vineet-tiwari971/)
- **Twitter / X:** [x.com/VINEETTIWARI971](https://x.com/VINEETTIWARI971)
- **Location:** Gwalior, Madhya Pradesh, India

