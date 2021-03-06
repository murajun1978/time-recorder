var webpack = require('webpack')
var postcssImport = require('postcss-import');
var autoprefixer = require('autoprefixer')
var precss = require('precss')

module.exports = {
  entry: './app/index',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel'
        ]
      },
      {
        test: /\.css$/,
        include: /app/,
        loaders: [
          'style',
          'css?modules',
          'postcss'
        ]
      }
    ]
  },
  postcss(webpack) {
    return [
      postcssImport({
          addDependencyTo: webpack
      }),
      precss,
      autoprefixer
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  devServer: {
    hot: true,
    port: 4000,
    inline: true,
    historyApiFallback: true
  }
}
