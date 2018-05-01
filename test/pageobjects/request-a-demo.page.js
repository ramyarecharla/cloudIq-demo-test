import Page from './page';
class DemoPage extends Page {

    //Define Elements
    get goButton() {return browser.element('.hs-button');}
    get firstname(){return browser.element('input[name="firstname"]');}
    get lastname(){return browser.element('input[name="lastname"]');}
    get businessEmail(){return browser.element('input[name="email"]');}
    get phoneNumber(){return browser.element('input[name="phone"]');}
    get company(){return browser.element('input[name="company"]');}
    get websiteUrl(){return browser.element('input[name="website"]');}
    get countries(){return browser.elements('select[name="country"] option');}
    get role(){return browser.elements('select[name="hs_persona"] option');}
    get ecommerce(){return browser.elements('select[name="ecommerce_platform"] option');}
    get monthlyUniqueVisits(){return browser.elements('select[name="monthly_unique_visits"] option');}
    get industry() {return browser.elements('select[name="industry"] option');}
    get numEmployees() {return browser.elements('select[name="numemployees"] option');}
    get technologies(){return browser.elements('.hs_do_you_use_any_of_the_following_technology_ .inputs-list li input');}
    get annualTurnOver(){return browser.elements('select[name="annual_turnover"] option');}
    get successMessage(){return browser.element('.page-header h1')}
    get validationMessage(){return browser.elements('.hs-error-msgs label')}

    open() {
        super.open('https://www.cloud-iq.com/demo');
        browser.pause(1000);
    }

    clickGo() {
        this.goButton.click();
        browser.pause(5000);
    }

    createDemo(row){
        this.firstname.setValue(row["FirstName"]);
        this.lastname.setValue(row["LastName"]);
        this.businessEmail.setValue(row["BusinessEmail"]);
        this.phoneNumber.setValue(row["PhoneNumber"]);
        if(this.company.isVisible())
            this.company.setValue(row["Company"]);
        if(this.websiteUrl.isVisible())
         this.websiteUrl.setValue(row["WebsiteURL"]);
        this.selectRandomFromDropDown(this.countries);

        if(this.role.value.length>0)
            this.selectRandomFromDropDown(this.role);

        if(this.ecommerce.value.length>0)
            this.selectRandomFromDropDown(this.ecommerce);

        if(this.monthlyUniqueVisits.value.length>0)
            this.selectRandomFromDropDown(this.monthlyUniqueVisits);

        if(this.annualTurnOver.value.length>0)
            this.selectRandomFromDropDown(this.annualTurnOver);

        if(this.technologies.value.length>0)
            this.selectRandomFromDropDown(this.technologies);

        if(this.numEmployees.value.length>0)
            this.selectRandomFromDropDown(this.numEmployees);
    }

    selectRandomFromDropDown(dropDown) {
        let rand = util.randomIntMinMax(0, dropDown.value.length - 1);
        dropDown.value[rand].click();
    }

    randomIntMinMax(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

    verifyDemoResult(){
        let text;
        browser.pause(2000);
        if(this.successMessage.isVisible()) {
            text = this.successMessage.getText();
        }
        else {
            text = this.validationMessage.getText();
        }
        return text;
    }
}

export default new DemoPage();
