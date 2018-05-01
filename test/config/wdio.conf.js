const defaultTimeoutInterval = process.env.DEBUG ? (60 * 60 * 500) : 90000;

exports.config = {

    specs: [
        './test/features/*.feature',
    ],
    exclude: [
    ],
    //
    // Define your capabilities here.
    maxInstances: 10,

    capabilities: [
          {
              browserName: 'chrome',
              maxInstances: '5',
          },
    ],
    //
    // Define all options that are relevant for the WebdriverIO instance here
    //
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: './test/reports/errorShots/',
    //
    // Set a base URL
    baseUrl: 'http://localhost:8080',
    waitforTimeout: 90000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'cucumber',
    reporters: ['spec', 'junit','allure', 'json'],
    reporterOptions: {
        junit:  {outputDir: './test/reports/junit-results/'},
        json:   {outputDir: './test/reports/json-results/'},
        allure: {
          outputDir:   './test/reports/allure-results/',
          disableWebdriverStepsReporting: false,
          useCucumberStepReporter: false,
        },
    },

    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        require: ['./test/stepDefinitions/given.js', './test/stepDefinitions/when.js', './test/stepDefinitions/then.js'],   // <string[]> (file/dir) require files before executing features
        compiler: ['js:babel-core/register'],
        timeout: defaultTimeoutInterval,
    },
    before: function() {
      /**
       * Setup the Chai assertion framework
       */
      const chai    = require('chai');
      global.expect = chai.expect;
      global.assert = chai.assert;
      global.should = chai.should();
    },
};
