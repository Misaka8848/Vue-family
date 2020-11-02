const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.base')
const { merge } = require('webpack-merge')
const VueServerPlugin = require('vue-server-renderer/server-plugin')

const config = merge(baseConfig, {
  target: 'node',
  resolve: {
    alias: {
      // 默认是用vue.runtime.js 不能使用template语法
      vue: path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server-entry.js',
    path: path.join(__dirname, '../server-build')
  },
  // 作用是不打包vue，而是引用
  externals: Object.keys(require('../package.json').dependencies),
  module: {
    rules: [
      {
        test: /\.styl/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'css/[name].[hash:8].css',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueServerPlugin()
  ]
})

module.exports = config
