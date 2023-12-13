/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'max-cont': "1264px",
      },
      colors: {
        'black-11': '#111111',
        'afforai-purple': '#8036ff',
        'gray-eee': '#e6e6e6',
        'white-555': '#f5f5f5',
        'blue-111' : '#8036e1',
        'purple-efe6ff' : 'efe6ff',
        'black-22': '#222222',
        'black-52': '#525252',
        'black-e6': '#e6e6e6'
      }
    },
  },
  plugins: [],
}

