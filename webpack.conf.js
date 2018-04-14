const path = require('path');

module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015',
            },
        ],
    },
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'src/js'),
        },
    },
};
