const path = require('path');

module.exports = {
    // You need to list out every file you want to bundle in `entry`
    entry: "./src/index.js",
    output: {
      // Write to the '/dist' directory relative to the directory
      // where `webpack` is running
      path: path.resolve(".", "bulid"),
      // Webpack will bundle `src/foo.js` into `dist/foo.min.js`
      // because of `[name]`.
      filename: "new.js"
    },
    mode: "development",
    module: {
        rules: [{test: /\.css$/, use: ['style-loader','css-loader']}]
      },
}
