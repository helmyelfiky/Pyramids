# Pyramids Adhesives - Landing Page

> Innovative Adhesive Solutions for Every Industry | Designed to Perform, Built to Last.

Welcome to the Pyramids Adhesives landing page project! This is a high-conversion, responsive, and multilingual static web application built to showcase premium adhesive products and services. 

## 🛠️ Tech Stack

This project is built using modern, lightweight, and fast technologies, relying on CDNs for zero-config fast deployment.

- **Core Languages:** HTML5, CSS3, Vanilla JavaScript
- **CSS Architecture:** Bespoke, zero-dependency design system
- **Animations:** AOS (Animate on Scroll) Library
- **Carousels & Sliders:** Splide.js
- **Icons:** FontAwesome 6
- **Forms:** FormSubmit integration
- **Internationalization (i18n):** Custom Vanilla JS implementation using JSON dictionaries

## 📂 Project Structure

```text
├── CSS/                  # Stylesheets
│   └── styles.css        # Main stylesheet hosting design tokens and UI components
├── JS/                   # JavaScript & i18n
│   ├── language.js       # Logic for handling language switching
│   ├── English.json      # English translations
│   ├── Arabic.json       # Arabic translations
│   └── french.json       # French translations
├── images/               # Static assets
│   ├── flags/            # Icons for language selection
│   ├── icons/            # Various UI icons
│   ├── logos/            # Brand logos
│   └── products/         # Product imagery
├── docs/                 # Documentation directory
├── index.html            # Main landing page
└── about.html            # About Us page
```

## ✨ Key Features

- **Responsive Design:** Fluid layout adapting perfectly from mobile screens to desktop monitors (Custom CSS Grid & Flexbox).
- **SEO Optimization:** Semantic HTML structure, descriptive meta tags, and optimized asset delivery.
- **Multilingual Support:** Dynamic language switching between English, Arabic, and French without page reloads.
- **Engaging Visuals:** Embedded hero background videos and smooth scrolling animations powered by AOS.
- **Interactive Product Catalog:** Dynamic modal popups providing detailed product specifications, available sizes, and ordering info.
- **Functional Contact Form:** Integrated frictionless contact form.

## 🚀 Getting Started

Since this is a vanilla HTML/CSS/JS project utilizing CDNs, there are no heavy build steps or node modules required! 

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd pyramids-adhesives
```

### 2. Local Development 
You do not need to run `npm install`. To view the application, you can simply spin up a local development server.

**Option A: Using VS Code**
- Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
- Right-click `index.html` and select **"Open with Live Server"**.

**Option B: Using Python (if installed)**
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.

**Option C: Using Node.js (npx)**
```bash
npx serve .
```

## 🌍 Deployment

Since this project consists entirely of static assets, it is incredibly fast and cheap to deploy anywhere.

### Deploying to Netlify (Recommended)
1. Drag and drop the project folder into your [Netlify Drop](https://app.netlify.com/drop) dashboard.
2. OR, link your GitHub repository to Netlify, and it will deploy automatically on push. No build commands are needed.

### Deploying to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root folder.
3. Accept the default static deployment prompts.

### Deploying to GitHub Pages
1. Go to your repository **Settings**.
2. Navigate to **Pages** on the left sidebar.
3. Set the source branch (e.g., `main` or `master`) and directory (`/root`) and hit Save.