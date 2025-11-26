# Kayak Tigre - Astro + Tina CMS

A modern, multilingual website for kayak and SUP tours in the Tigre Delta, Argentina.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) 4.x
- **CMS**: [TinaCMS](https://tina.io/) (Git-based, headless)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Languages**: English, Spanish, Russian
- **Deployment**: Cloudflare Pages / Netlify

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/kirilly/kayak-tigre-astro.git
cd kayak-tigre-astro

# Install dependencies
npm install

# Start development server (with Tina CMS)
npm run dev
```

The site will be available at `http://localhost:4321`
The admin panel will be at `http://localhost:4321/admin`

## Project Structure

```
├── content/           # Content managed by Tina CMS
│   ├── services/      # Tour/service content (MDX)
│   ├── blog/          # Blog posts (MDX)
│   ├── pages/         # Static pages (MDX)
│   └── settings/      # Site settings (JSON)
├── public/            # Static assets
│   └── uploads/       # Uploaded media
├── src/
│   ├── components/    # Astro components
│   ├── i18n/          # Translations
│   ├── layouts/       # Page layouts
│   └── pages/         # File-based routing
├── tina/              # Tina CMS configuration
│   └── config.ts      # Content schema
└── astro.config.mjs   # Astro configuration
```

## Content Management

### Local Development

1. Run `npm run dev`
2. Navigate to `http://localhost:4321/admin`
3. Edit content using the visual editor
4. Changes are saved to your local Git repository

### Production (Tina Cloud)

1. Create an account at [tina.io](https://tina.io)
2. Connect your GitHub repository
3. Get your Client ID and Token
4. Add environment variables:
   ```
   TINA_CLIENT_ID=your-client-id
   TINA_TOKEN=your-token
   ```

## Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `18`
3. Add environment variables (if using Tina Cloud)

### Netlify

1. Connect your GitHub repository to Netlify
2. Build settings are auto-detected from `netlify.toml`
3. Add environment variables (if using Tina Cloud)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `TINA_CLIENT_ID` | Tina Cloud client ID | For production |
| `TINA_TOKEN` | Tina Cloud token | For production |
| `TINA_BRANCH` | Git branch for content | Optional |

## Available Scripts

```bash
npm run dev      # Start dev server with Tina
npm run build    # Build for production
npm run preview  # Preview production build
```

## Internationalization (i18n)

The site supports three languages:
- English (`/en/`)
- Spanish (`/es/`)
- Russian (`/ru/`)

Translations are managed in:
- `src/i18n/translations.ts` - UI strings
- `content/` - Content files per locale

## License

MIT License - feel free to use this as a template for your own projects.

## Contact

- Website: [kayak-tigre.com](https://kayak-tigre.com)
- Instagram: [@kayaktigre](https://instagram.com/kayaktigre)
