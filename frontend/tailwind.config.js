module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        4: '1rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
