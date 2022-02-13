module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      spacing:{
        '100vh':'100vh',
      },
      backgroundImage: {
        'header': "url('/src/images/header.jpg')",
        'nav':'linear-gradient(to left, rgba(0, 0, 0, 0.89), rgba(171, 127, 80, 0.89));'
        
      },
      colors:{
        'btn':'rgba(171, 127, 80, 0.89)'
      },
      fontFamily: {
     
        'Shippori': ['Shippori Antique', 'sans-serif'],
    
      },
      keyframes: {
        nav_animation: {
          '0%': { opacity: '0',transform:'transformY(+50px)' },
          
          '100%':{opacity:'1',transform:'translateY(0)'}
        },
        text_animation: {
          '0%': { opacity: '0',transform:'transformX(-50px)' },
          
          '100%':{opacity:'1',transform:'translateX(0)'}
        },
      },
      animation: {
        'nav_animation': 'nav_animation 2s ease-in-out ',
        'text_animation': 'text_animation 2s ease-in-out ',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
