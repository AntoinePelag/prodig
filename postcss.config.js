const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    purgecss({
        content: ['./layouts/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        whitelist: ['nav-mobile-active']
    }),
    cssnano({
      preset: 'default'
    }),
  ]
}
