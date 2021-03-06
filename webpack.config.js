var path = require("path");
const MiniCssExtractPlugin= require('mini-css-extract-plugin')
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js", // this is the compiled final javascript file which we will include in the index.html
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  // devtool: "cheap-module-eval-source-map", // this helps to browser to point to the exact file in the console, helps in debug
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true, // this prevents the default browser full page refresh on form submission and link change
  },
  plugins:[
    new MiniCssExtractPlugin()
  ]
};
