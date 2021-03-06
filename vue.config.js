const path = require('path')
const webpack = require('webpack')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/integration/',
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        additionalData: `@import '@/assets/scss/index.scss';`
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))

      config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader-v16')
      .end()
      .use(path.join(process.cwd() + '/build/markdownLoader.js'))
      .loader(path.join(process.cwd() + '/build/markdownLoader.js'))
      .end()
  },
  configureWebpack: {
    externals: {
      // 'ant-design-vue': 'antd'
    },
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  }
}
