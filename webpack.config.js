var path = require('path');
var webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCSSExtractPlugin('./src/scss/style.css'),
    devFlagPlugin
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'src'),
      use: [
          {loader: 'babel-loader'},
          ]
    },
        {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCSSExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it use publicPath in webpackOptions.output
                        publicPath: '../'
                    }
                },
                'css-loader'
            ]
        }]
  },
  optimization: {
      noEmitOnErrors: true
  }
};
