import type { Config } from "tailwindcss"

const config: Config = {
  // Best practice for theme toggling, allowing manual control
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pine-green': {
          '50': '#f0f9f4',
          '100': '#e0f2e9',
          '200': '#c4e6d4',
          '300': '#9cd5bb',
          '400': '#6ec09e',
          '500': '#48a984', // A nice, natural green for primary actions
          '600': '#3a8e6e',
          '700': '#31735a',
          '800': '#2a5d4a',
          '900': '#244c3e',
          '950': '#132b23',
        },
        'cabin': {
          'brown': '#8a5a44', // A warm, rustic brown
          'charcoal': '#2a323c', // A dark, modern neutral
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-lora)', 'serif'],
      },
      borderRadius: {
        'lg': `var(--radius)`,
        'md': `calc(var(--radius) - 2px)`,
        'sm': 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
  ],
}

export default config