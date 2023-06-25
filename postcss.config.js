module.exports = {
  // ...outras opções de configuração do PostCSS
  plugins: [
    require('postcss-short')({ prefix: 'x' }),
    require('postcss-preset-env')
  ]
}
