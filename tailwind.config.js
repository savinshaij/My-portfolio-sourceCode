/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    
      fontFamily: {
        pixal: ['Silkscreen', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        sc: ['Source Code Pro', 'monospace'],
        kab:['Kablammo'],
        pm:['Courgette']
      },
    },
  },
  plugins: [],
}
