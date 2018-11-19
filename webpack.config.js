var path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      new MiniCssExtractPlugin({
          filename: 'style.css'
      }),
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
            include: path.join(__dirname, 'src'),
            use: [
                process.env.NODE_ENV !== 'production'
                    ? 'style-loader'
                    : MiniCssExtractPlugin.loader,
            'css-loader']
        }
        ]
  },
    optimization: {
      noEmitOnErrors: true
    }
};
