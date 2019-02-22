# Webpack Learning

#### Step By Step...

First, make the project directory and cd into it:

    mkdir webpack-learning && cd "$_"

Make `src` directory and create `index.js` into the `src` directory:

    mkdir src && touch src/index.js

Generate `package.json` file without having it ask any questions:

    npm init -y

Install `webpack`, `webpack-cli` locally:

    npm install --save-dev webpack webpack-cli

Install `@babel/core`, `@babel/preset-env` and `babel-loader` locally:

    npm install --save-dev  @babel/core @babel/preset-env babel-loader

Create `webpack.config.js` configuration file into the project root directory and add following code:

```javascript
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
```

Create `.babelrc` configuration file into the project root directory and add following code to enable preset:

```json
{
  "presets": ["@babel/preset-env"]
}
```

Install `css-loader` and `style-loader` modules for webpack:

    npm install --save-dev css-loader style-loader

Add css-loader plugin into `webpack.config.js` file:

```javascript
module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
```

Install `sass-loader` and `node-sass`:

    npm install sass-loader node-sass --save-dev

Install `mini-css-extract-plugin` to extract text from bundle:

    npm install --save-dev mini-css-extract-plugin

Install `file-loader` module for webpack:

    npm install --save-dev file-loader

Add file-loader plugin into `webpack.config.js` file:

```javascript
rules[
  {
    test: /\.(png|je?pg|gif|svg)$/,
    loader: "file-loader",
    options: {
      name: "[name].[ext]",
      outputPath: "images"
    }
  }
];
```

Install `clean-webpack-plugin` webpack plugin to remove/clean your build folder(s) before building:
https://github.com/johnagan/clean-webpack-plugin.git

    npm i clean-webpack-plugin --save-dev

Add `clean-webpack-plugin` plugin into `webpack.config.js` file by adding following code:

```javascript
new CleanWebpackPlugin(["dist"], {
  root: __dirname,
  verbose: true,
  dry: false
}),
```

https://webpack.js.org/plugins/loader-options-plugin/

```javascript
new webpack.LoaderOptionsPlugin({
  minimize: inProduction
});
```
