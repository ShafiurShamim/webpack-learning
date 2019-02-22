const path = require("path");

var webpack = require("webpack");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var inProduction = process.env.NODE_ENV === "production";

var CleanWebpackPlugin = require("clean-webpack-plugin");
// var BuildManifestPlugin = require("./src/webpackPlugins/BuildManifestPlugin");

module.exports = {
  mode: "production",
  entry: {
    app: ["./src/index.js", "./src/sass/app.scss"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
            // options: {
            //   publicPath: "./dist/"
            // }
          },
          // {
          //   loader: "css-loader",
          //   options: { url: false }
          // },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|je?pg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images"
        }
      },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]
      // },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new MiniCssExtractPlugin({
      // both options are optional
      filename: "[name].css"
      // chunkFilename: "[id].css"
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: inProduction
    })

    // new BuildManifestPlugin()
    // function() {
    //   this.plugin("done", stats => {
    //     require("fs").writeFileSync(
    //       path.join(__dirname, "dist/manifest.json"),
    //       JSON.stringify(stats.toJson().assetsByChunkName)
    //     );
    //   });
    // }
  ]
};

// console.log(inProduction);

// if (inProduction) {
//   module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin());
// }
