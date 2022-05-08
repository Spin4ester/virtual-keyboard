/* eslint-disable indent */
/* eslint-disable linebreak-style */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/keyboard.js', 
    module: {
        rules: [
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
    
    output: {
      path: path.resolve(__dirname, 'dist'), // Директория, в которой будет
      // размещаться итоговый бандл, папка dist в корне приложения
      filename: 'index_bundle.js',
      clean: {
        keep: /\.git/,
    },
    },
    plugins: [
        new HtmlWebpackPlugin(),
      ],
      mode: 'production',
}