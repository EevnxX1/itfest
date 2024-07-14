/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./html/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: 'Kanit',
        inknut: 'Inknut Antiqua',
        itim: 'Itim',
      },
      colors: {
        color1: '#2FA8FF',
        color2: '#426394',
        color3: '#263238',
        color4: '#002547',
        color5: '#597F92',
      },
      boxShadow: {
        boxKompetisi: '9px 10px 7px 0px rgba(0, 0, 0, 0.3)',
        boxPendaftaran: '0px 0px 15px 0px #2FA8FF',
      },
    },
  },
  plugins: [],
};
