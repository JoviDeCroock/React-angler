const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = () => {
  const { NODE_ENV } = process.env;
  const isProduction = NODE_ENV === 'production';

  const entries = ['./src/index.tsx']

  // Build plugins
  const plugins = [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
    }),
  ];

  if (!isProduction) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  // Return configuration
  return {
    mode: isProduction ? 'production' : 'development',
    entry: entries,
    context: path.resolve(__dirname, './'),
    stats: 'minimal',
    devtool: isProduction ? '' : 'eval-source-map',
    devServer: {
      host: '127.0.0.1',
      port: 8080,
      historyApiFallback: true,
      hot: true,
      inline: true,
      publicPath: '/',
      clientLogLevel: 'none',
      open: true,
      overlay: true,
    },
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, './dist'),
    },
    plugins,
    resolve: { extensions: [".ts", ".tsx", ".js", ".jsx"] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
        },
        {
          test: /\.js$/,
          use: ["source-map-loader"],
          enforce: "pre"
        },
      ],
    },
  };
};
