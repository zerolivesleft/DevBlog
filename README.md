# DevBlog

A terminal-themed developer blog built with Astro, featuring a dark mode aesthetic inspired by modern code editors and terminal interfaces.

**Live site:** [blog.zer0.live](https://blog.zer0.live)

## Features

- 🖥️ **Terminal-inspired design** — Dark theme with monospace fonts and terminal-style UI elements
- 🔍 **Full-text search** — Powered by Pagefind for fast, client-side search across all posts
- 📱 **Fully responsive** — Optimized for mobile with iOS-friendly interactions
- ⚡ **Fast performance** — Static site generation with optimized images
- 📝 **MDX support** — Write posts in Markdown with React component support
- 🏷️ **Rich metadata** — Open Graph and Twitter Cards for beautiful link previews
- 📡 **RSS feed** — Subscribe to new posts via RSS
- 🗺️ **Sitemap** — Auto-generated sitemap for SEO
- ♿ **Accessible** — Screen reader friendly with proper ARIA attributes

## Tech Stack

- [Astro](https://astro.build) — Static site generator
- [React](https://react.dev) — Component library (for interactive elements)
- [Tailwind CSS](https://tailwindcss.com) — Utility-first styling
- [Pagefind](https://pagefind.app) — Static search
- [Lucide React](https://lucide.dev) — Icons
- [Cloudflare Pages](https://pages.cloudflare.com) — Hosting

## Project Structure

```
├── public/
│   ├── fonts/           # JetBrains Mono Nerd Font
│   └── favicon.png
├── src/
│   ├── assets/          # Images (avatar, banner)
│   ├── components/      # Astro/React components
│   ├── content/blog/    # Blog posts (MDX)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Routes
│   └── styles/          # Global CSS
├── astro.config.mjs
└── wrangler.jsonc       # Cloudflare config
```

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview build locally before deploying       |

## Writing Posts

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: 'My New Post'
description: 'A brief description'
pubDate: 'Dec 17 2024'
heroImage: './my-image.webp'
---

Your content here...
```

## Deployment

The site auto-deploys to Cloudflare Pages on push to `main`. The build command is configured in `wrangler.jsonc`.

## License

MIT
