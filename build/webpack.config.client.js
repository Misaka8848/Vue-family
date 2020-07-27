const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = require('./webpack.config.base')

const isDev = process.env.NODE_ENV === 'development';
const devServer = {
  host: '127.0.0.1',
  port: '8000',
  overlay: {
    errors: true
  },
  hot: true
}

let config 


if(isDev) {
  config = merge(baseConfig,{
    devtool : 'cheap-module-eval-source-map',

    module:{
      rules:[
        {
          test: /\.styl/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                publicPath: './',
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
            { 
              loader: 'postcss-loader', 
              options: { sourceMap: true } 
            },
            'stylus-loader'
          ]
        },
      ]
    },

    devServer,
    plugins:[

    ]
  })

} else {
  config = merge(baseConfig,{
    output: {
      filename : '[name].[chunkhash:8].js'
    },
    module:{
      rules:[
        {
          test: /\.styl/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                publicPath: './',
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
            { 
              loader: 'postcss-loader', 
              options: { sourceMap: true } 
            },
            'stylus-loader'
          ]
        },
      ]
    },
    plugins:[
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: 'styles.[chunkhash].[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      })
    ]
      
    
  })
  config.output.filename = '[name].[chunkhash:8].js';
  config.module.rules.push(
    //css预处理器，使用模块化的方式写css代码
      //stylus-loader专门用来处理stylus文件，处理完成后变成css文件，交给css-loader.webpack的loader就是这样一级一级向上传递，每一层loader只处理自己关心的部分
      
  );

  config.plugins.push(
    
  );
}

module.exports = config;