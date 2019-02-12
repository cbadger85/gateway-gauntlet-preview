// webpack v4
const path = require('path');

// const nodeExternals = require('webpack-node-externals');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack');
const ImageminJpegtran = require('imagemin-jpegtran');
const HtmlWebPackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: { main: './src/js/index.js' },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].[hash].js',
  },
  // target: 'node',
  // externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(svg|gif|png|jpe?g)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50,
            outputPath: 'images',
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('public', {}),
    new MiniCssExtractPlugin({
      filename: 'css/style[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/register.html',
      filename: 'register.html',
    }),
    new Dotenv({
      path: './.env.local' || './.env',
    }),
    new CopyWebpackPlugin([
      { from: 'src/images', to: 'images' },
    ]),
    new ImageminPlugin({
      name: '/[path][name].[ext]',
      bail: false,
      cache: true,
      loader: false,
      imageminOptions: {
        plugins: [
          ImageminJpegtran({
            progressive: true,
          }),
        ],
      },
    }),
    new HtmlWebPackInlineSVGPlugin({
      img: path.join(__dirname, 'src', 'images'),
    }),
    new WebpackMd5Hash(),
  ],
  devServer: {
    proxy: [{
      context: ['/api'],
      target: 'http://localhost:8080',
    }],
  },
};

process.noDeprecation = true;
