module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'media',
  theme: {
    extend: {}
  },
  variants: {
    scrollbar: ['dark','rounded']
  },
  plugins: [
    require('tailwind-scrollbar')
  ]
}
