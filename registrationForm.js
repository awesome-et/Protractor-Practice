let Locators=require('../protractorPractice/registrationFormLocators');
describe('registrationFormPractice',function(){
    it('practice',function(){

        browser.get('https://rahulshettyacademy.com/angularpractice/');
        Locators.forminput();
    });
});