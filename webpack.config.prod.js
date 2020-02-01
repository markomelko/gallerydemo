const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: ["./src/index.js", "./src/sass/main.scss"],
  output: {
    path: path.join(__dirname, "/build"),
    filename: "index_main.js"
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      }
    ]
  },
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({ filename: "main.css" })
  ]
};
