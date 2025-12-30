# Personal Portfolio Template

A modern, responsive portfolio website built with Next.js 16, Tailwind CSS, and Framer Motion. Fork this project to create your own professional portfolio.

## Features

- Responsive design (mobile, tablet, desktop)
- Smooth animations with Framer Motion
- Dark theme with customizable colors
- Particle background effect
- Sections: Hero, About, Technologies, Projects, Experience, Education, Contact
- SEO-friendly

## Quick Start

### 1. Fork & Clone

```bash
# Fork this repository on GitHub, then clone your fork
git clone https://github.com/p3bozuric/my-portfolio.git
cd my-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Customization

All personal content is centralized in the `data/content.ts` file:

| Section | What to Edit |
|---------|--------------|
| Personal Info | Name, email, social links |
| About Me | Introduction, description, specialties |
| Technologies | Your tech stack |
| Projects | Project titles, descriptions, links |
| Experience | Work history |
| Education | Degrees, certifications |

### Assets to Replace

- `public/logo.svg` - Your logo
- `public/favicon.svg` - Browser tab icon
- `app/favicon.ico` - Fallback favicon (delete or replace)
- `public/resume.pdf` - Your resume

### Theme Colors

Edit `tailwind.config.ts` to customize colors:

```ts
colors: {
  primary: "#your-color",
  secondary: "#your-color",
  accent: "#your-color",
}
```

## Deploy to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/p3bozuric/my-portfolio)

### Option 2: Manual Deploy

1. Push your customized portfolio to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New Project"
4. Import your portfolio repository
5. Click "Deploy"

Your portfolio will be live at `https://your-project.vercel.app`

### Custom Domain

1. In Vercel dashboard, go to your project Settings > Domains
2. Add your custom domain (e.g., `yourname.com`)
3. Update DNS records as instructed by Vercel

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## License

MIT - Feel free to use this template for your own portfolio.
