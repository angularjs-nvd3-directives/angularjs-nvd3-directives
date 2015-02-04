// Karma configuration
// Generated on Mon Feb 02 2015 20:57:25 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      '../build/components/moment/moment.js',
      '../build/components/d3/d3.js',
      '../build/components/nvd3/nv.d3.js',
      '../build/components/angular/angular.js',
      '../build/components/angular-route/angular-route.js',
      '../build/components/angular-mocks/angular-mocks.js',
      //'../dist/angularjs-nvd3-directives.js',
      '../src/directives/*.js',
      '**/*Spec.js'
    ],

    // list of files to exclude
    exclude: [
      '../**/intro.js',
      '../**/outro.js',
      '../**/*.swp',
      '../**/*~'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['Chrome', 'Firefox', 'PhantomJS'],
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
