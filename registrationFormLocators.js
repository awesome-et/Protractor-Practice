let Locators= function() {
    browser.ignoreSynchronization = true;
 
let name=element(by.css('input[name="name"]'));
let email=element(by.name('email'));
let password=element(by.id('exampleInputPassword1'));
let checkbox=element(by.id('exampleCheck1'));
let gender=element(by.id("exampleFormControlSelect1")).element(by.css('option:nth-child(1)'));
let submit=element(by.css('input[value="Submit"]'));
let Alert=element(by.className("alert alert-danger"));
let alertClose=element(by.className("alert alert-success alert-dismissible")).element(by.className("close"));

this.forminput=function(){
  name.sendKeys('');
    email.sendKeys('email');
  password.sendKeys('pass');
   checkbox.click();
 gender.click();
   submit.click().then(function(){
     expect(element(by.cssContainingText('div',' The Form has been submitted successfully!.')).isDisplayed()).toBe(true);
   });
  browser.sleep(2000);
 
  name.getText().then(function(name){ if(name==" "){expect(element(by.cssContainingText('div','Name is required')).isDisplayed()).toBe(true);
  }
  alertClose.click().then(function(){
  expect(alertClose.isPresent()).toBe(false);
  })
});

  
}
};

module.exports=new Locators();