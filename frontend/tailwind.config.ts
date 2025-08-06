// tailwind.config.ts

import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    // Add paths to all of your template files
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Important for App Router
  ],
  theme: {
    extend: {
      // Your theme extensions here
    },
  },
  plugins: [],
}

export default config