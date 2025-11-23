# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start local development server with Turbopack
- `npm run build` - Build production application
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Dependencies
- `npm install` - Install all dependencies

## Architecture & Tech Stack

This is a **Next.js React application** for QYI AI - an AI Native Developer portfolio. The site is built using:

- **Next.js 15** - React framework with App Router
- **React 19** - UI library with TypeScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Component library with consistent design system
- **Framer Motion** - Animation library for smooth interactions
- **tsParticles** - Particle effects for SparklesCore component

### Key Technical Details

- **App Router** - Next.js app directory structure
- **TypeScript** - Type-safe development
- **Responsive Design** - Mobile-first approach with Tailwind breakpoints
- **Component Architecture** - Reusable React components in `src/components/ui/`
- **Server Components** - Optimized rendering with RSC
- **Security headers configured** - Via `vercel.json` for production deployment

### File Structure
```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata and structured data
│   ├── page.tsx        # Main homepage component
│   └── globals.css     # Global styles and Tailwind imports
├── components/
│   └── ui/
│       ├── sparkles.tsx    # SparklesCore particle component
│       ├── demo.tsx        # Sparkles demo variations
│       └── navbar.tsx      # Navigation component
└── lib/
    └── utils.ts        # Utility functions (cn, etc.)
```

### Component Architecture
- **Navbar** - Fixed navigation with scroll effects and language toggle
- **SparklesCore** - Particle effects using tsParticles
- **Layout Components** - Responsive sections for different content areas
- **Interactive Elements** - Hover effects, smooth scrolling, and animations

### Styling System
- **Tailwind CSS 4** - Utility-first styling
- **shadcn/ui** - Component library with consistent design tokens
- **Color Palette** - Blue-focused theme with proper contrast ratios
- **Typography** - Inter font family with systematic sizing
- **Responsive Design** - Mobile-first breakpoints (sm, md, lg, xl)

### Interactive Features
- **Particle animations** - Background sparkles effects using SparklesCore
- **Smooth scrolling** - Navigation between sections
- **Hover animations** - Card transforms and button effects
- **Language toggle** - UI functionality for EN/Chinese
- **Responsive navbar** - Backdrop blur and scroll-triggered styling

### SEO & Performance
- **Structured Data** - JSON-LD schema for search engines
- **Open Graph** - Social media sharing metadata
- **Performance** - Next.js optimizations with Turbopack
- **Accessibility** - Semantic HTML and proper ARIA attributes

## Development Guidelines

### Adding New Components
1. Create components in `src/components/ui/`
2. Use TypeScript interfaces for props
3. Apply Tailwind classes for styling
4. Follow shadcn/ui patterns for consistency

### Styling Conventions
- Use Tailwind utility classes
- Leverage component variants with `class-variance-authority`
- Apply consistent spacing and color tokens
- Maintain responsive design patterns

### Performance Considerations
- Leverage Next.js Image optimization
- Use Server Components when possible
- Minimize client-side JavaScript
- Optimize particle effects for performance

## Deployment

The site is configured for **Vercel deployment** with:
- Next.js build optimization
- Clean URLs enabled
- Security headers (CSP, X-Frame-Options, etc.)
- Static asset caching
- TypeScript checking
- ESLint validation

When making changes:
1. Test locally with `npm run dev`
2. Run `npm run build` to verify production build
3. Check `npm run lint` for code quality
4. Deploy to Vercel