const path = require("path");
module.exports = {
  mode: "development",
  entry: "./M-Todo-list/src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "./M-Todo-list/dist"),
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./M-Todo-list/dist",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\/node_modules\//,
        use: { loader: "babel-loader" },
      },
    ],
  },
};
