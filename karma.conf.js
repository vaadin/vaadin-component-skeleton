const path = require('path');
const {NormalModuleReplacementPlugin} = require('webpack');

const bowerDependencies = [
  /^(\.\.\/){2,}polymer\/(.+)\.html$/,
  /^(\.\.\/){2,}vaadin-(.+)\/vaadin-(.+)\.html$/
];

const bowerReplacement = resource => {
  let count = 0;
  resource.request = resource.request.replace(/\.\.\//, () => {
    count++;
    if (count === 1) {
      return 'bower_components/';
    } else {
      return '';
    }
  });
};

module.exports = function(config) {
  config.set({
    singleRun: true,
    browsers: ['ChromeHeadlessNoSandbox', 'FirefoxHeadless'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--disable-gpu', '--no-sandbox']
      },
      FirefoxHeadless: {
        base: 'Firefox',
        flags: ['-headless']
      }
    },
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      'test/karma/index.js'
    ],
    preprocessors: {
      'test/karma/index.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots', 'coverage-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,

    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      dir: path.join(__dirname, 'coverage'),
      combineBrowserReports: true,
      skipFilesWithNoCoverage: true,
      thresholds: {
        global: {
          statements: 90,
          lines: 90,
          branches: 90,
          functions: 90
        }
      }
    },

    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd'
      },
      chai: {
        includeStack: true
      }
    },

    webpack: {
      devtool: 'inline-source-map',
      mode: 'development',
      resolve: {
        modules: ['bower_components', 'node_modules'],
        descriptionFiles: ['package.json', 'bower.json'],
        extensions: ['.js', '.json', '.html']
      },
      plugins: bowerDependencies.map(dep => new NormalModuleReplacementPlugin(dep, bowerReplacement)),
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'istanbul-instrumenter-loader',
            include: /src|theme/,
            exclude: /(bower_components|node_modules|.test.js$)/,
            options: {
              esModules: true
            }
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          {
            test: /\.html$/,
            loader: 'istanbul-instrumenter-loader',
            include: /src|theme/,
            exclude: /(bower_components|node_modules)/
          },
          {
            test: /\.html$/,
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          {
            test: /\.html$/,
            loader: 'polymer-webpack-loader'
          }
        ]
      }
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    }
  });
};
