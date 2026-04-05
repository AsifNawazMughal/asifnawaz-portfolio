/** @type {import('tailwindcss/types/config').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // These extend Tailwind's default color palette, pointing to your CSS variables
        // Tailwind will generate classes like bg-primary-background, text-primary-foreground, etc.
        'primary-background': 'var(--background)',
        'primary-foreground': 'var(--foreground)',
        'accent-orange': 'var(--accent)',
        'text-light-white': 'var(--text-light)',
        'yellow-highlight': 'var(--yellow-light)', // For the circle behind Mark
      },
      fontFamily: {
        // These define your custom font families that map to your Next.js font variables
        // Tailwind will generate classes like font-sans, font-heading
        sans: ['var(--font-sans)'],    // Maps to DM Sans
        heading: ['var(--font-heading)'], // Maps to Syne
      },
      spacing: {
        '8xl': '90rem', // Custom spacing for max-w-8xl if you need it. Adjust as per your design.
      }
    },
  },
  plugins: [],
};