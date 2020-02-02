const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/entry.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"

    },
    devServer: {
        contentBase: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                type: 'javascript/auto',
                test: /\.(json)/,
                exclude: path.resolve(__dirname, './node_modules/'),
                use: [{
                    loader: 'file-loader'
                }],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ "hash": true, template: "./src/index.html" })
    ]
}