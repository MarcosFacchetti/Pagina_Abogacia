/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'opti-times-roman': ['OPTITimes-Roman', 'serif'],
      },
      colors: {
        'gray-medium': '#333333',
      },
      height: {
        '100': '25rem',
      }
    },
  },
  plugins: [],
};
