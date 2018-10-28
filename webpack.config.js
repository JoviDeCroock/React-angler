const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = () => {
  // Build plugins
  const plugins = [
    new CleanWebpackPlugin(['dist']),
  ];

  // Return configuration
  return {
    mode: 'production',
    entry: './src/index.ts',
    context: path.resolve(__dirname, './'),
    stats: 'minimal',
    devtool: 'eval-source-map',
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, './dist'),
    },
    plugins,
    resolve: { extensions: [".ts"] },
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
