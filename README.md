# Swiftel Fibre Website

This is the official marketing and informational website for Swiftel Fibre, a modern Internet Service Provider (ISP). The site is built as a high-performance, static-first website using the Astro framework with interactive Svelte "islands."

## ✨ Features

* **Astro Islands Architecture:** The site is static HTML by default for extreme performance, with interactive Svelte components hydrated only on the client as needed.
* **Dual-Theme Support:** A complete light/dark mode system (with a neutral dark theme for logo contrast), with the user's preference saved to `localStorage`.
* **Fully Responsive:** A mobile-first design that scales perfectly from small phones to large desktops.
* **Interactive Package Showcase:**
    * A dynamic toggle to switch between "Home" and "Business" plans.
    * Expandable package cards to show detailed features without cluttering the UI.
    * A horizontal-scrolling carousel on mobile with a custom "dot" pagination indicator.
* **Interactive Navigation:** A full-screen, animated hamburger menu for mobile devices, complete with a theme toggle.
* **Content-Driven "Learn" Hub:** A "hub-and-spoke" model for articles. The hub page (`/learn`) features article cards, and the articles themselves are written in simple Markdown (`.md`).
* **Custom Pages:** Includes a themed "About Us" page with a custom-styled timeline and a "404 Not Found" page with a creative, brand-colored "glitch" effect.
* **Brand-First Design:** Uses a code-based, theme-aware SVG logo system for perfect clarity and scalability across the site.

## 🚀 Tech Stack

* **Framework:** [Astro](https://astro.build/) (Static Site Generator)
* **UI Components:** [Svelte](https://svelte.dev/) (for interactive islands)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (with a custom, CSS variable-based light/dark theme)
* **Content:** Astro components and Markdown (`.md`) files

## 🧞 Available Scripts

All commands are run from the root of the project:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server at `http://localhost:4321`. |
| `npm run build` | Builds the site for production. The static files are output to a `/dist` folder. |
| `npm run preview` | Starts a local server to preview your production build. |

## 📦 Deployment

This project is configured for static deployment on **GitHub Pages**.

The `astro.config.mjs` file is set with the correct `site` and `base` options, and a complete GitHub Actions workflow is included at `.github/workflows/deploy.yml`.

To deploy, simply:
1.  Push your code to the `master` branch.
2.  In your repository settings on GitHub, set the "GitHub Pages" source to **"GitHub Actions"**.

GitHub will automatically build and deploy the site on every new push.