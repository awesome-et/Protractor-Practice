let Locators=require('./CalcLocators.js');

describe('ProtractorPractice',function(){
it('addition',function(){

    browser.get("https://juliemr.github.io/protractor-demo/");
Locators.result(9,8,'MULTIPLICATION');
Locators.result(2,5,'ADDITION');
Locators.result(7,10,'DIVISION');
Locators.result(9,6,'SUBTRACTION');
});

});