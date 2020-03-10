// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: ['./src/**/*.spec.ts'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--disable-gpu', '--window-size=1920,1080'],
    },
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {},
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json'),
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './',
        filePrefix: 'xmlresults',
      })
    );
  },
  onComplete: function() {
    var browserName, browserVersion;
    // @ts-ignore
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function(caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      // @ts-ignore
      platform = caps.get('platform');

      var HTMLReport = require('protractor-html-reporter-2');

      // @ts-ignore
      testConfig = {
        reportTitle: 'Test Execution Report',
        outputPath: './',
        outputFilename: 'TestReport',
        screenshotPath: './screenshots',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        // @ts-ignore
        testPlatform: platform,
      };
      // @ts-ignore
      new HTMLReport().from('xmlresults.xml', testConfig);
    });
  },
};
