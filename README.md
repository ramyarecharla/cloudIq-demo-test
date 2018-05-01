
### Installation
Install JDK 1.8+ 
Install Node.JS 

Now go to "package.json" root folder and run "npm install",

Note:Package.json contains all the required libraries

### Selenium server
To run your test You must have selenium server up and running to execute any WebdriverIO tests, 
Since we have `services: ['selenium-standalone'],` in .conf.js to start it automatically which has been added as part of this project.

### Run tests
Open terminal or command prompt and excute following command
`npm run test`

##### junit/xunit

The JUnit reporter helps you to create xml reports for your CI server. Add it to the reports array in the config file and define the directory where the xml files should get stored. webdriverIO will create an xml file for each instance under test and the filename will contain the browser and OS.
To generate and view an junit report locally, run `npm run junit-report`.

