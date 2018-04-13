const path = require('path');

module.exports = (config) => {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'jasmine-matchers'],
        files: [{ pattern: 'test-index.js', watched: false }],
        preprocessors: {
            'test-index.js': ['webpack'],
        },
        webpack: {
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
        },
        reporters: ['progress'],
        port: 9876,
        autoWatch: false,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS'],
        singleRun: true,
    });
};
