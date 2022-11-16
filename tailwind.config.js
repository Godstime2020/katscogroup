/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/**/*.html"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        // your colors can go in here
        nav_bar_color: 'grey',
        header_primary_color: 'rgb(240,247,167)',
        header_secondary_color: '#DC143C',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryDarkBlue_highlight: 'hsl(233, 12%, 13%, 0.8)',
        board_color: 'rgb(170,187,204,0.8)',
        board_color_faint: '	rgb(170,187,204,0.3)',
        board_color_highlight:'rgb(234,38,9)',

      }
    },
  },
  plugins: [
    require('tailwindcss-intersect')
],
}

