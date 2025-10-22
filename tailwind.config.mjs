import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,svelte,md}',
    './layouts/**/*.{astro,html}',
    './pages/**/*.{astro,html,md}',
  ],
  theme: {
    extend: {
      colors: {
        card: 'rgb(var(--color-bg-card) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        primaryDark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        accentDark: 'rgb(var(--color-accent-dark) / <alpha-value>)',
        muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        hero: 'rgb(var(--color-hero-bg) / <alpha-value>)',
      }
    }
  },
  safelist: [
    'bg-card', 'bg-card/50', 'border-primary', 'bg-accent', 'bg-accent-dark', 'text-accent',
    'text-muted', 'text-primary', 'text-neutral-100', 'text-neutral-300', 'text-neutral-500',
    'bg-primary', 'bg-primary-dark', 'text-white',
    'animate-wiggle', 'hover:scale-125', 'active:animate-wiggle', 'transition-transform',
    'dark:bg-card', 'dark:text-muted', 'dark:border-border'
  ],
  darkMode: 'class',
});