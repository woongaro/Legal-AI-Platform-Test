# Legal AI - Advanced Legal Intelligence Platform

A modern, responsive landing page for Legal AI, an advanced legal intelligence platform that empowers legal professionals with AI-driven insights, document analysis, and intelligent legal research tools.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible React components
- **Lucide Icons** - Beautiful icon library

## Features

- **Responsive Design** - Fully responsive across all devices
- **Dark Mode Support** - Built-in dark mode support
- **Modern UI Components** - Using shadcn/ui component library
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Fast Performance** - Optimized with Next.js best practices

## Pages & Sections

### Homepage
- **Navigation** - Clean, modern navigation bar with smooth scroll
- **Hero Section** - Compelling headline with CTAs and key metrics
- **Features Section** - 6 feature cards showcasing AI capabilities:
  - Document Analysis
  - Legal Research AI
  - Compliance Monitoring
  - Contract Drafting
  - Predictive Analytics
  - Team Collaboration
- **About Section** - Company background and key statistics
- **Use Cases Section** - Target audiences and their benefits
- **CTA Section** - Call-to-action with trial signup
- **Footer** - Comprehensive footer with links

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/
│   └── ui/               # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── separator.tsx
├── lib/
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Components Used

- **Button** - Primary and secondary CTAs
- **Card** - Feature and use case cards
- **Badge** - Section labels and tags
- **Separator** - Visual section dividers

## Customization

### Colors
The project uses a blue color scheme. To customize:
- Primary: `blue-600`
- Adjust in `app/globals.css` or component classes

### Content
Update content in `/app/page.tsx`:
- Hero section text and CTAs
- Feature cards
- Company statistics
- Use cases
- Footer links

### Components
Add more shadcn/ui components:
```bash
npx shadcn@latest add [component-name]
```

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

All rights reserved © 2026 Legal AI

## Support

For questions or support, contact the development team.
