module.exports = {
  content: ['./src/**/*.{ts,tsx}', './src/index.html'],
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: '#1B73E8',
  //     },
  //   },
  // },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['pastel', 'dracula'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dracula',
  },
};
