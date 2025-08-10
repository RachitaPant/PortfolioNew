# 🌟 My Developer Portfolio

A whimsical and interactive portfolio site built with **Next.js 14**, **Framer Motion**, and **Three.js**, showcasing my work, personality, and skills.  
Designed to feel like a digital scrapbook — complete with playful animations, handwritten elements, and a 3D model greeting you on the homepage.

## 🚀 Features

- **SEO-Friendly Content** — Text is server-rendered for discoverability.
- **3D Interactive Model** — Powered by [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) and [@react-three/drei](https://github.com/pmndrs/drei).
- **Smooth Animations** — Page transitions, hover effects, and scroll-based reveals using [Framer Motion](https://www.framer.com/motion/).
- **Responsive Design** — Works beautifully on desktop and mobile.
- **Custom Handwritten Style** — Fonts and textures that make it feel personal and approachable.
- **Playful Details** — Torn-edge effects, sticky notes, and animated doodles.

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- **Helpers:** [drei](https://github.com/pmndrs/drei)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## 📂 Project Structure

src/
├── app/
│ ├── Components/
│ │ ├── Intro.tsx # Main intro section with text + 3D model
│ │ ├── Model.tsx # 3D model component with animations
│ │ └── OtherSections/ # About, projects, contact, etc.
│ └── page.tsx # Homepage
├── public/
│ ├── models/ # GLTF/GLB 3D models
│ ├── textures/ # Background textures
│ └── images/ # Static images

## Getting Started

## 📦 Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
2. Install dependencies
    ```bash
    npm install


 3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out  [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
