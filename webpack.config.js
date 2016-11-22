module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
        alias: {
            webworkify: 'webworkify-webpack-dropin'
        },
    },
    devtool: 'cheap-source-map'
};