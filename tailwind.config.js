/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {

      colors:{
        white: "#fdfdfd",
        blue: "#1e90ff",
        gray: "#383838",
        black:"#000000"
      },

      fontFamily:{
        montserrat: ['Montserrat', 'sans-serif']
      },
      fontSize:{
        vhuge: 'clamp(2.5rem, 6vw, 4rem)',
        huge: 'clamp(2rem, 6vw, 3rem)',
        semihuge: 'clamp(1rem, 6vw, 2.5rem)'
      },
      backgroundImage:{
        'pic': "url('/dist/img/1.webp')",
        'pic2': "url('/dist/img/2.webp')",
        'pic3': "url('/dist/img/3.webp')",


      },

    },

container: {
      center: true,
      padding: '1rem',
      screens: {
        xs:'530px',
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    }

  },
  plugins: [],
}
