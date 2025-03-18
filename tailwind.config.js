/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        football: ['Football', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      backgroundImage: {
        'hero-pattern': "url('https://c4.wallpaperflare.com/wallpaper/439/435/681/flamengo-maracana-sport-wallpaper-preview.jpg')",
        'stadium-pattern': "url('https://c4.wallpaperflare.com/wallpaper/439/435/681/flamengo-maracana-sport-wallpaper-preview.jpg')",
      },
    },
  },
  plugins: [],
};