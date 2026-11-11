/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'rgba(255, 255, 255, 0.5)',
        input: 'rgba(255, 255, 255, 0.5)',
        ring: '#64B5F6',
        background: '#DFF3FF',
        foreground: '#172B4D',
        primary: '#64B5F6',
        'primary-foreground': '#FFFFFF',
        secondary: '#B9E2FA',
        'secondary-foreground': '#172B4D',
        muted: '#f3f4f6',
        accent: '#64B5F6',
        'accent-soft': '#B9E2FA',
        'accent-pastel': '#DFF3FF',
        'text-main': '#172B4D',
        'text-secondary': '#64748B',
      },
    },
  },
  plugins: [],
}