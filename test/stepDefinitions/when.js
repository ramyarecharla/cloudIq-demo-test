
import { defineSupportCode } from 'cucumber';
import demoPage from '../pageObjects/request-a-demo.page';

defineSupportCode(function({ When }) {

    When(/^I fill the demo form with the following details$/, function(data) {
        data.hashes().forEach((hash)=> {
            demoPage.createDemo(hash);
        }, this);
    });

    When(/^I click Go$/, function() {
        demoPage.clickGo();
    });

});