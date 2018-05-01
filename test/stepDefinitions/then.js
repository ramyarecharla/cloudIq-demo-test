
import { defineSupportCode } from 'cucumber';
import demoPage from '../pageObjects/request-a-demo.page';

defineSupportCode(function({ Then }) {

    Then(/^I verify if the demo page result is equal to "(.*)"$/, function(result) {
        assert.include(demoPage.verifyDemoResult(),result)
    });
});