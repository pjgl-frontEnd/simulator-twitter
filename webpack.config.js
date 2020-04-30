
const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode:'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // Files
      {
        test: /\.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      // Images
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              publicPath: '/images',
              outputPath: 'images',
            },
          },
        ],
      },
      // HTml
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      // Styles

      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,

            },
          },
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ]
};
