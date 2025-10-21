/** @type {import('tailwindcss').Config} */

// Helper function to create the rgb(var(...) / <alpha-value>) syntax
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // This enables our light/dark mode toggle
  theme: {
    extend: {
      colors: {
        // Semantic colors now point to our CSS variables
        primary: {
          DEFAULT: withOpacity('--color-primary'),
          'dark': withOpacity('--color-primary-dark'),
        },
        accent: {
          DEFAULT: withOpacity('--color-accent'),
          'dark': withOpacity('--color-accent-dark'),
        },
        'secondary-accent': withOpacity('--color-secondary-accent'),
      },
      // We map all text, background, and border colors
      textColor: {
        DEFAULT: withOpacity('--color-text'),
        muted: withOpacity('--color-text-muted'),
      },
      backgroundColor: {
        DEFAULT: withOpacity('--color-bg'),
        card: withOpacity('--color-bg-card'),
      },
      borderColor: {
        DEFAULT: withOpacity('--color-border'),
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // All your existing animations
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(8deg)' },
          '75%': { transform: 'rotate(-8deg)' },
        },
        glow: {
          from: { filter: "drop-shadow(0 0 10px rgba(23, 201, 210, 0.4))" },
          to: { filter: "drop-shadow(0 0 25px rgba(23, 201, 210, 0.8))" },
        },
        wave: {
          '0%': { opacity: '0.2' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.2' },
        },
        'glitch-shake': {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(1px, 1px)' },
          '50%': { transform: 'translate(-1px, -1px)' },
          '75%': { transform: 'translate(1px, -1px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'glitch-tear-1': {
          '0%': { clipPath: 'inset(10% 0 85% 0)' },
          '10%': { clipPath: 'inset(40% 0 10% 0)' },
          '20%': { clipPath: 'inset(90% 0 2% 0)' },
          '30%': { clipPath: 'inset(25% 0 60% 0)' },
          '40%': { clipPath: 'inset(5% 0 70% 0)' },
          '50%': { clipPath: 'inset(80% 0 15% 0)' },
          '60%': { clipPath: 'inset(10% 0 50% 0)' },
          '70%': { clipPath: 'inset(60% 0 30% 0)' },
          '80%': { clipPath: 'inset(95% 0 1% 0)' },
          '90%': { clipPath: 'inset(30% 0 65% 0)' },
          '100%': { clipPath: 'inset(10% 0 85% 0)' },
        },
        'glitch-tear-2': {
          '0%': { clipPath: 'inset(70% 0 20% 0)' },
          '10%': { clipPath: 'inset(10% 0 80% 0)' },
          '20%': { clipPath: 'inset(40% 0 30% 0)' },
          '30%': { clipPath: 'inset(60% 0 10% 0)' },
          '40%': { clipPath: 'inset(80% 0 5% 0)' },
          '50%': { clipPath: 'inset(20% 0 70% 0)' },
          '60%': { clipPath: 'inset(50% 0 30% 0)' },
          '70%': { clipPath: 'inset(1% 0 90% 0)' },
          '80%': { clipPath: 'inset(25% 0 50% 0)' },
          '90%': { clipPath: 'inset(75% 0 10% 0)' },
          '100%': { clipPath: 'inset(70% 0 20% 0)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.4s ease-in-out',
        glow: 'glow 3s infinite alternate ease-in-out',
        wave: 'wave 2.5s ease-in-out infinite',
        'glitch-shake': 'glitch-shake 1s infinite linear alternate-reverse',
        'glitch-tear-1': 'glitch-tear-1 2s infinite linear alternate-reverse',
        'glitch-tear-2': 'glitch-tear-2 3s infinite linear alternate-reverse',
      },
    },
  },
  plugins: [],
}