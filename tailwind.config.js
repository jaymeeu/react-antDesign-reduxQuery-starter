/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    // screens: {
    //   'sm': '576px',
    //   'md': '960px',
    //   'lg': '1440px',
    //   // => @media (min-width: 1440px) { ... }
    // },
    extend: {
      fontFamily: {
        'pop': ['"Poppins"', 'sans-serif'],
        'mont': ['"Montserrat"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif']
      },
      fontSize: {
        sm: ['14px', '1.25rem'],
        base: ['16px', '1.25rem'],
        lg: ['20px', '1.25rem'],
        xl: ['24px', '1.25rem'],
        header: ['36px', '1.25rem'],
      },
      colors : {
        "primary": ['var(--main)'],
        "blacky": ['var(--black)'],
      }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    }
  },
  plugins: [],
}

