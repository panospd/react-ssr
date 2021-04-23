const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = (module.exports = {
    // Inform webapck that we are building a bundle for nodejs, rather for the browser
    target: "node",
    entry: "./src/index.js",
    // Tell webpack where to put the output file that is generated
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    }
});

module.exports = merge(baseConfig, config);
