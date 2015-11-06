// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
        'src/bower_components/angular/angular.js',
        'src/bower_components/angular-mocks/angular-mocks.js',
        'src/bower_components/angular-cookies/angular-cookies.js',
        'src/bower_components/angular-animate/angular-animate.js',
        'src/bower_components/angular-ui-router/release/angular-ui-router.js',
        'src/components/uuid-factory.js',
        'src/templates.js',
        'src/app/app.module.js',
        'src/app/core/core.module.js',
        'src/app/core/core.constant.js',
        'src/app/core/config.route.js',
        'src/app/intro/intro.module.js',
        'src/app/intro/config.route.js',
        'src/app/game/game.module.js',
        'src/app/game/config.route.js',
        'src/app/game/game.service.js',
        'src/app/game/game.js',
        'src/app/grid/grid.module.js',
        'src/app/grid/grid.service.js',
        'src/app/enemy/enemy.module.js',
        'src/app/enemy/enemy.service.js',
        'src/app/player/player.module.js',
        'src/app/player/player.service.js',
        'src/app/bullet/bullet.module.js',
        'src/app/bullet/bullet.service.js',
        'src/app/keyboard/keyboard.module.js',
        'src/app/keyboard/keyboard.service.js',
        'src/app/score/score.module.js',
        'src/app/score/score.service.js',
        'test/unit/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
