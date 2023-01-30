const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = ['./src/index.tsx'];

const output = {
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/dist/',
  filename: 'bundle.js',
};

module.exports = {
  mode: process.env.NODE_ENV,
  entry,
  output,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/src'),
    },
    proxy: {
      '/': 'http://localhost:3000',
    },
    compress: true,
    port: 8080,
    host: 'localhost',
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  // devServer: {
  //   static: {
  //     publicPath: '/',
  //     directory: path.resolve(__dirname, '/dist'),
  //   },
  //   proxy: {
  //     '/': {
  //       target: 'http://localhost:8080/',
  //       router: () => 'http://localhost:3000',
  //       secure: false,
  //     },
  //     port: 8080,
  //     host: 'localhost',
  //     open: true,
  //     hot: true,
  //     compress: true,
  //     historyApiFallback: true,
  //     headers: { 'Access-Control-Allow-Origin': '*' },
  //   },
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/index.html',
    }),
  ],
};
