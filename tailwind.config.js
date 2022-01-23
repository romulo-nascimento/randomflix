module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'lightest-purple': '#F9FAFE',
        'light-purple': '#f0eafc',
        'purple': '#8757E5',
        'dark-purple': '#723ae0'
      }
    },
  },
  plugins: [],
};
