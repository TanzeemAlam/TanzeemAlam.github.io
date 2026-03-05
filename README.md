# Tanzeem Alam — Portfolio (React + Vite)

## 🚀 Local Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 📁 Adding Your Images

Put these files in the `public/images/` folder:

```
public/
  images/
    profile_photo.jpeg          ← your profile photo
    HLD_Diagram_for_Ecommerce_Application_via_Microservices.png
    awards/
      excellence-2024.jpg       ← award photos
      excellence-2023.jpg
      excellence-2022.jpg
      old-is-gold.jpg
    certs/
      az900-badge.png           ← Microsoft badge images
      az204-badge.png
      az900-cert.jpg            ← certificate photos/screenshots
      az204-cert.jpg
```

## ✏️ Updating Content

All content lives in **one file**: `src/data/content.js`

- Personal info, links → `personal`
- Skills + proficiency → `skillCategories`
- STAR stories → `values`
- Work experience → `experience`
- Projects → `projects`
- Education → `education`
- Awards → `awards`
- Certifications → `certifications`

## 🔗 Certification Verify URLs

In `src/data/content.js`, replace:
```js
verifyUrl: 'https://learn.microsoft.com/en-us/users/me/credentials'
```
With your actual Microsoft Learn share links.

## ☁️ Cloudflare Pages Deployment

1. Push this repo to GitHub
2. Go to Cloudflare Pages → Create Project → Connect GitHub repo
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Save → Cloudflare auto-deploys on every push ✅

The `public/_redirects` file handles React Router client-side routing automatically.

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Skills, About, Experience, Education, Recognition, Contact |
| `/projects` | Project gallery |
| `/projects/ecommerce-microservices` | Full project page: HLD diagram, case study, code snippets |
| `/awards` | All awards with photos |
| `/certifications` | All certs with badges + verify links |

## 🛠 Tech Stack

- React 18 + Vite
- React Router v6 (multi-page routing)
- Framer Motion (page transitions, animations)
- React Syntax Highlighter (code blocks)
- CSS Modules (scoped styles, no className conflicts)
