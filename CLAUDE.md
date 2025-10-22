# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mihaela Doran luxury real estate website for Ibiza properties, featuring "The White Angel Talamanca" development. Built with Next.js 15.5.6 (App Router), TypeScript, Tailwind CSS, and next-intl for internationalization.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
vercel --prod        # Deploy to production (deployment is NOT automatic)
```

## Architecture

### Internationalization (i18n)
- Uses `next-intl` with middleware-based routing
- Supported locales: en, es, fr, de, it, zh, ru, ro (default: en)
- Locale prefix strategy: `always` (e.g., `/en/about`, `/es/about`)
- Translation files: `messages/{locale}.json`
- i18n config: `src/i18n/routing.ts` (locale definitions), `src/i18n/request.ts` (plugin config)
- Middleware: `middleware.ts` handles locale routing automatically
- Navigation: Use `@/i18n/navigation` exports (`Link`, `useRouter`, `usePathname`) instead of Next.js defaults
- Translations: Access via `useTranslations("Namespace")` hook

### File Structure
- `app/[locale]/` - Localized pages (dynamic locale parameter)
- `app/components/` - Shared React components
- `src/i18n/` - Internationalization configuration
- `messages/` - JSON translation files for each locale
- `public/images/` - Static assets

### Styling
- Tailwind CSS with custom configuration
- CSS variables in `app/globals.css`
- Custom transitions: `transition-smooth-fast`, `transition-smooth`
- Glassmorphism effects: `bg-white/70 backdrop-blur-xl`
- Font: Inter with variable font support

### Key Components
- **Header** (`app/components/Header.tsx`): Client component with mobile menu, language switcher, and glassmorphism
- **BottomNav** (`app/components/BottomNav.tsx`): Mobile-friendly bottom navigation
- **Footer** (`app/components/Footer.tsx`): Site footer with links
- **CookieConsent** (`app/components/CookieConsent.tsx`): GDPR cookie consent banner
- **WhatsAppButton** (`app/components/WhatsAppButton.tsx`): Floating WhatsApp contact button

### Next.js Configuration
- Image optimization configured for `images.squarespace-cdn.com` domain
- Next-intl plugin: `createNextIntlPlugin('./src/i18n/request.ts')`
- Static params generation: All locales are pre-rendered via `generateStaticParams()`

### Metadata & SEO
- Configured in `app/[locale]/layout.tsx`
- Includes OpenGraph, Twitter cards, robots directives
- iOS Safari viewport optimization with `viewportFit: "cover"`

## Important Notes

- All navigation must use `@/i18n/navigation` imports, not Next.js defaults
- Client components that use i18n hooks must have `"use client"` directive
- When adding new pages, ensure they're inside `app/[locale]/` directory
- Language switcher uses `router.replace(pathname, { locale: newLocale })`
- Mobile menu includes body scroll lock when open
- All commits should be pushed to 199-biotechnologies GitHub organization
