/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./html/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: 'Kanit',
      },
      colors: {
        color1: '#2FA8FF',
        color2: '#426394',
      },
    },
  },
  plugins: [],
};
