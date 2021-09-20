var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none', // production, development, none
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: { //loader
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          // 'style-loader', 
          'css-loader'
        ] // 오른쪽에서 왼쪽으로 적용됨
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],

}