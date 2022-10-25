module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        float: 'float 3s infinite',
        refloat: 'refloat 3s infinite',
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(-15px)',
            animationTimingFunction: 'ease-in-out',
          },
          '100%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'ease-in-out',
          },
        },
        refloat: {
          '0%': {
            transform: 'translateY(-15px)',
            animationTimingFunction: 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'ease-in-out',
          },
          '100%': {
            transform: 'translateY(-15px)',
            animationTimingFunction: 'ease-in-out',
          },
        },
      }
    },
  },
  plugins: [],
}