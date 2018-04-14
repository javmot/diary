const webpackConfig = require('./webpack.conf');

module.exports = (config) => {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'jasmine-matchers'],
        files: [{ pattern: 'test-index.js', watched: false }],
        preprocessors: {
            'test-index.js': ['webpack'],
        },
        webpack: webpackConfig,
        reporters: ['progress'],
        port: 9876,
        autoWatch: false,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS'],
        singleRun: true,
    });
};
