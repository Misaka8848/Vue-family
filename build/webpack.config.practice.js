const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const baseConfig = require('./webpack.config.base')
const { merge } = require('webpack-merge')

const isDev = process.env.NODE_ENV === 'development'
const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, 'template.html')
  })
]

const devServer = {
  port: 8000,
  host: '0.0.0.0',
  overlay: {
    errors: true
  },

  hot: true
}

const config = merge(baseConfig, {
  devServer,
  resolve: {
    alias: {
      // 默认是用vue.runtime.js 不能使用template语法
      vue: path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  entry: {
    app: path.join(__dirname, '../practice/index.js')
  },
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin()
    // new webpack.NoEmitOnErrorsPlugin()
  ])
})

module.exports = config
