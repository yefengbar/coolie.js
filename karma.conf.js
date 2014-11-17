// Karma configuration
// Generated on Mon Nov 17 2014 14:46:48 GMT+0800 (中国标准时间)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],


        client: {
            mocha: {
                reporter: 'html', // change Karma's debug.html to the mocha web reporter
                ui: 'bdd'
            }
        },


        // list of files / patterns to load in the browser
        files: [
            'node_modules/mocha/mocha.js',
            'node_modules/should/should.js',
            './coolie.js',
            {
                pattern: './test/modules/**/*.js',
                included: false
            },
            './test/unit/main.test.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './coolie.js': ['coverage']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'junit', 'coverage'],

        //Code Coverage options. report type available:
        //- html (default)
        //- lcov (lcov and html)
        //- lcovonly
        //- text (standard output)
        //- text-summary (standard output)
        //- cobertura (xml format supported by Jenkins)
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/'
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,


        // plugins
        plugins: [
            'karma-mocha',
            'karma-chrome-launcher',
            'karma-junit-reporter',
            'karma-coverage'
        ]
    });
};
