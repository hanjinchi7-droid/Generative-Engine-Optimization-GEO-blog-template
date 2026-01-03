# 🚀 Recomby.ai Website Source

> **"In the age of AI Search, Precision Beats Power."**

This repository contains the source code for [Recomby.ai](https://recomby.ai), a high-performance website template built using **[Astro 5.0](https://astro.build/)** and **[Tailwind CSS](https://tailwindcss.com/)**.

It is heavily customized to follow **GEO (Generative Engine Optimization)** standards, ensuring content is structured effectively for both human readers and AI agents (ChatGPT, Perplexity, etc.).

<br>

## ✨ Key Features

- **⚡️ High Performance**: Powered by Astro, scoring 100/100 on PageSpeed Insights.
- **🤖 GEO Ready**: Content structure optimized for AI Search and LLM retrieval.
- **🛠 Simplified Configuration**:
  - **Global Settings**: Managed via a single `src/config.yaml`.
  - **Navigation**: Menu and footer links managed in `src/navigation.ts`.
  - **Page Config**: Complex pages (like `About`) use a "Local Configuration Object" pattern for easy editing.
- **🎨 Tailwind CSS**: Fully responsive design with Dark Mode support.
- **📝 Markdown/MDX**: Structured blogging system with automatic image optimization.
- **🖼️ Image Optimization**: Built-in support for next-gen image formats (WebP).

<br>

## 🛠 Getting Started

### 1. Installation

Clone the repository and install dependencies:

```shell
npm install
```

### 2. Development

Start the local development server:

```shell
npm run dev
```

Visit `http://localhost:4321` to see your site.

### 3. Build for Production

Generate the static files for deployment:

```shell
npm run build
```

<br>

## ⚙️ Configuration Guide

We have streamlined the configuration process so you don't need to dig into deep code.

### 1. Global Site Configuration

Edit **`src/config.yaml`** to change site-wide metadata, SEO settings, and feature toggles.

```yaml
site:
  name: 'Recomby.ai'
  site: 'https://recomby.ai'

metadata:
  title:
    default: 'Recomby.ai'
    template: '%s — Recomby.ai'
  description: 'AI Search Optimization & Agent API Infrastructure.'
```

### 2. Navigation (Menu & Footer)

Edit **`src/navigation.ts`** to modify the Header links, Footer columns, and Social icons.

### 3. Page-Specific Configuration (e.g., About Page)

For complex landing pages like `About`, we use a **Local Configuration Object** at the top of the file.
Go to `src/pages/about.astro` and edit the `aboutData` constant at the top.

<br>

## 📂 Project Structure

Inside the project, you'll see the following folders and files:

```text
templete
├── LICENSE.md
├── README.md
├── astro.config.ts
├── eslint.config.js
├── netlify.toml
├── package.json
├── public                  # Static assets
│   ├── CNAME
│   ├── _headers
│   ├── decapcms
│   │   ├── config.yml
│   │   └── index.html
│   └── robots.txt
├── src
│   ├── assets
│   │   ├── favicons
│   │   ├── images          # Post covers and project images
│   │   └── styles
│   ├── components          # Reusable UI components
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   ├── Logo.astro
│   │   ├── blog
│   │   ├── common
│   │   ├── ui
│   │   └── widgets
│   ├── config.yaml         # Site-wide configuration file
│   ├── content
│   │   └── config.ts
│   ├── data
│   │   └── post            # Markdown content for blog posts
│   ├── env.d.ts
│   ├── layouts             # Page layouts
│   │   ├── LandingLayout.astro
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── navigation.ts       # Menu and footer links
│   ├── pages
│   │   ├── 404.astro
│   │   ├── [...blog]
│   │   │   ├── [category]
│   │   │   ├── [tag]
│   │   │   └── [...page].astro  # Homepage
│   │   ├── about.astro     # About page and config
│   │   ├── privacy.md
│   │   ├── rss.xml.ts
│   │   ├── tags.astro
│   │   └── terms.md
│   ├── types.d.ts
│   └── utils
│       ├── blog.ts
│       ├── directories.ts
│       ├── frontmatter.ts
│       ├── images-optimization.ts
│       ├── images.ts
│       ├── permalinks.ts
│       └── utils.ts
├── tailwind.config.js
├── tsconfig.json
├── vendor
│   ├── README.md
│   └── integration
│       ├── index.ts
│       ├── types.d.ts
│       └── utils
└── vercel.json
```

<br>

## ✍️ Writing Content (GEO Strategy)

We follow strict **AI-Friendly Writing Guidelines** to ensure content is "Best Match" for AI queries.

Please refer to the template file in `src/data/post/markdown-style-guide.md` for details.

**Quick Rules:**

1.  **Location**: Create your `.md` files in **`src/data/post/`**.
2.  **Structure**: Use clear H2/H3 headings.
3.  **Images**:
    - **Local**: Place in `src/assets/images/` and reference as `~/assets/images/name.png`.
    - **Remote**: Use direct URLs.
4.  **Frontmatter**: Always fill in `tags` and `excerpt` accurately for AI indexing.

<br>

## 🚀 Deployment

This project is ready to be deployed to **Vercel**, **Netlify**, or any static hosting service.

**Vercel (Recommended):**

1.  Push your code to GitHub.
2.  Import the project in Vercel.
3.  The framework preset should automatically detect **Astro**.
4.  Click **Deploy**.

<br>

## 📄 License

This project is licensed under the MIT License. Based on the open-source work of [AstroWind](https://github.com/onwidget/astrowind).
