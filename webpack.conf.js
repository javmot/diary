// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015',
            },
            {
                test: /\.handlebars$/,
                exclude: /node_modules/,
                loader: 'handlebars-loader',
            },
        ],
    },
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'src/js'),
        },
    },
    /* plugins: [
        new UglifyJsPlugin(),
    ], */
};
