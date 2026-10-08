<div align="center">

  <img src="assets/images/srdme.png" alt="Swayam Ritiraj Dash" width="110" style="border-radius: 50%; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">

  # ⚡ Swayam Ritiraj Dash — Portfolio v2

  <p align="center">
    <strong>A sleek, modern Bento-Grid developer portfolio.</strong><br>
    Built with pure HTML5, modern CSS3, and vanilla JavaScript for blazing fast performance.
  </p>

  <p align="center">
    <a href="https://github.com/SwayamRitirajDash"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>
    <a href="https://www.linkedin.com/in/swayam-ritiraj-dash/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
    <a href="https://x.com/RitirajSwayam"><img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X"></a>
    <a href="mailto:swayamritirajdash2006@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"></a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
    <img src="https://img.shields.io/badge/Theme-Dark%20%2F%20Light-6366f1?style=flat-square" alt="Theme">
    <img src="https://img.shields.io/badge/Layout-Bento%20Grid-10b981?style=flat-square" alt="Bento Grid">
  </p>

</div>

---

## 🌟 Overview

**PORTFOLIO-Vr.2** is a personal portfolio showcasing technical skills, projects, work experience, certifications, and real-time live GitHub metrics inside an interactive Bento-Grid style interface.

---

## ✨ Features

- 🍱 **Bento-Grid Dashboard**: Intuitive card-based layout inspired by modern design trends.
- 🌓 **Dynamic Theme Switcher**: Seamless dark & light mode toggling with `localStorage` persistence.
- 📊 **Live GitHub Statistics**: Real-time stats integration via the GitHub REST API (Repositories, Stars, Forks, Followers) with animated number counting.
- 💬 **Interactive Quote Generator**: Dynamic developer motivation and philosophy quote widget.
- ⚡ **Zero Framework Overhead**: Handcrafted using semantic HTML5, CSS Custom Properties (Variables), and lightweight Vanilla JS.
- 📱 **Fully Responsive**: Optimized for ultra-wide monitors, laptops, tablets, and smartphones.
- 🎨 **Smooth Micro-Interactions**: Custom preloader, glowing hover effects, backdrop blur, and scroll animations.
- 🧩 **Modular Architecture**: Separate reusable components and dedicated multi-page routes (`About`, `Projects`, `Experience`, `Certificates`, `Contact`).

---

## 📸 Pages & Structure

| Page | Description |
| :--- | :--- |
| 🏠 **Home (`index.html`)** | Bento-grid dashboard featuring hero card, quick links, featured projects, stats, quotes, and social hubs. |
| 👨‍💻 **About (`pages/about.html`)** | Biography, technical philosophy, education at ITER SOA, and skill taxonomy. |
| 🚀 **Projects (`pages/projects.html`)** | Filterable catalog of featured works with live demo and source code links. |
| 💼 **Experience (`pages/experience.html`)** | Interactive timeline covering internships (Pinnacle Labs, BSNL) and club roles (GFG ITER). |
| 📜 **Certificates (`pages/certificates.html`)** | Verified credentials, course completions, and achievement gallery. |
| 📬 **Contact (`pages/contact.html`)** | Direct reach-out form and social connection channels. |

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Modern Flexbox, CSS Grid, CSS Variables)
- **Scripting**: Vanilla JavaScript (ES6+ async/await, DOM manipulation)
- **Typography & Icons**: [Google Fonts](https://fonts.google.com/) (Inter & Space Grotesk), [FontAwesome 6](https://fontawesome.com/)
- **APIs**: GitHub REST API v3

---

## 📁 Project Structure

```text
PORTFOLIO-Vr.2/
├── index.html               # Main landing page (Bento dashboard)
├── assets/
│   ├── images/              # Project thumbnails, logos, and avatars
│   └── resume/              # PDF resume download
├── components/              # Modular HTML component templates
│   ├── navbar.html
│   ├── hero.html
│   ├── projects.html
│   ├── experience.html
│   ├── stats.html
│   └── footer.html
├── css/
│   ├── variables.css        # Global CSS design tokens & theme palettes
│   ├── global.css           # Base styles & typography
│   ├── layout.css           # Layout system & grid structures
│   ├── navbar.css           # Navigation header styles
│   ├── cards.css            # Bento grid card aesthetics & glow states
│   ├── animations.css       # Keyframes & transition definitions
│   ├── preloader.css        # Initial page load animation
│   └── responsive.css       # Media queries across breakpoints
├── js/
│   ├── main.js              # Core application bootstrap
│   ├── theme.js             # Dark / Light theme toggle & storage
│   ├── github.js            # GitHub REST API fetch & counter animation
│   ├── quotes.js            # Quote generator widget logic
│   ├── navbar.js            # Mobile navigation & scroll state
│   ├── preloader.js         # Preloader animation handler
│   └── animations.js        # Scroll triggers & reveal effects
└── pages/                   # Multi-page views
    ├── about.html
    ├── projects.html
    ├── experience.html
    ├── certificates.html
    └── contact.html
```

---

## 🚀 Getting Started

To run this portfolio locally:

### 1. Clone the repository
```bash
git clone https://github.com/SwayamRitirajDash/PORTFOLIO-Vr.2.git
cd PORTFOLIO-Vr.2
```

### 2. Run with a local server

#### Using Python:
```bash
python -m http.server 3000
```

#### Using Node.js:
```bash
npx serve .
# or
npx live-server
```

#### Using VS Code:
- Install the **Live Server** extension.
- Right-click `index.html` and select **"Open with Live Server"**.

### 3. Open in your browser
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Customization Guide

1. **Personal Information**:
   - Update bio, details, and links in `index.html` and the files in `pages/`.
2. **GitHub API Username**:
   - In [`js/github.js`](js/github.js), configure `GITHUB_USERNAME`:
     ```javascript
     const GITHUB_USERNAME = "YourGitHubUsername";
     ```
3. **Styling & Colors**:
   - Customize theme colors and layout variables in [`css/variables.css`](css/variables.css).
4. **Resume**:
   - Place your resume PDF at `assets/resume/RESUME-SRD.pdf`.

---

## 🤝 Connect

- **GitHub**: [@SwayamRitirajDash](https://github.com/SwayamRitirajDash)
- **LinkedIn**: [Swayam Ritiraj Dash](https://www.linkedin.com/in/swayam-ritiraj-dash/)
- **X (Twitter)**: [@RitirajSwayam](https://x.com/RitirajSwayam)
- **Discord**: [Join Server](https://discord.gg/X9Ys9RCXUU)
- **Email**: [swayamritirajdash2006@gmail.com](mailto:swayamritirajdash2006@gmail.com)

---

<div align="center">
  <sub>Designed & Developed with ❤️ by <strong>Swayam Ritiraj Dash</strong></sub>
</div>
