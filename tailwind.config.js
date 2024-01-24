/** @typ/e {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#32ccff',
        margin: ['responsive', 'hover', 'focus', 'group-hover'],
      },
      backgroundImage: {
        site: "url('./assets/2.jpg')",
        about: "url('./assets/about.png')",
        // services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
