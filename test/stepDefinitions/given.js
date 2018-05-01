
import { defineSupportCode } from 'cucumber';
import demoPage from '../pageObjects/request-a-demo.page';

defineSupportCode(function({ Given }) {

    Given(/^I am on the demo page$/, function() {
        demoPage.open();
        browser.getTitle().should.equal('Demo our ecommerce customer conversion technology | Cloud IQ');
    });

});
