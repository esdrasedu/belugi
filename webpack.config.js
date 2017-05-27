var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: ["./web/static/css/app.css", "./web/static/js/app.js"],
  output: {
    path: "./priv/static",
    filename: "js/app.js"
  },
  resolve: {
    modules: ["node_modules", __dirname + "/web/static/js"],
    alias: {
      phoenix: __dirname + '/deps/phoenix/web/static/js/phoenix.js'
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      include: __dirname,
      query: {presets: ["es2015", "react"]}
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(["style", "css"])
    }]
  },
  plugins: [
      new ExtractTextPlugin("css/app.css"),
      new CopyWebpackPlugin([{from: "./web/static/assets"}])
  ]
};