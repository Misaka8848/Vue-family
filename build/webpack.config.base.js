const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  //入口， __dirname 是当前文件所在目录
  entry: path.join(__dirname, "../src/index.js"),
  //输出
  output: {
    filename: "bundle.[hash:8].js",
    path: path.join(__dirname, "dist"),
  },
  //webpack原生只支持js文件类型，只支持ES5语法，我们使用以.vue文件名结尾的文件时，需要为其指定loader
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      //将小于1024b的图片转为base64，减少http请求
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024,
              name: "resources/[path][name].[hash:8].[ext]",
              outputPath: "assets/img/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new HTMLPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  optimization: {
    splitChunks: {
      chunks(chunk) {
        // exclude `my-excluded-chunk`
        return chunk.name !== "my-excluded-chunk";
      },
    },
  },
};

module.exports = config;
