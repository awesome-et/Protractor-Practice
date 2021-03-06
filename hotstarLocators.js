let hotStarLocators= function() {
    browser.ignoreSynchronization = true;
   let EC = protractor.ExpectedConditions;


let logIn=element(by.className("signIn"));
let mobNum=element(by.xpath('//span[contains(text(),"Enter your mobile number")]'));    
let emailSignUp=element(by.xpath('//*[@id="app"]/div[2]/div/div[1]/div[3]/div/div/div[1]/div/div[2]/div/div[1]/div/div/button'));
let email=element(by.id('emailID'));
let emailError=element(by.cssContainingText('p','Please enter valid email'));
let continueButton=element(by.className('submit-button'));
let password=element(by.id('password'));
let secondarySlider=element.all(by.css('[data-index="8"]')).get(1);
var ex=EC.elementToBeClickable(secondarySlider);   
// let trySS=element.all(by.css('[data-index="2"]')).get(2);
let sliderContainer=element.all(by.className('slider-container')).get(0);//101
let rightArrow=element.all(by.className('right-arrow')).get(1);
// let rightArrow=element(by.xpath('//*[@id="app"]/div[2]/div/div[1]/div[2]/div[2]/div/div/div/div[1]/div/div/div/div[2]/i'));
let mainSlider=element.all(by.css('[data-index="2"]')).get(0);
let i=0;
let nextArrow= element(by.className("slick-arrow slick-next"));
let ovRight=element(by.className("masthead-overlay right"));
let navigationBar=element(by.className('icon-wrapper'));
let search=element(by.id('searchField'));
let searchElement=element.all(by.css('[class="ripple show-card normal search-card"]')).get(0);
let elements=element(by.css('[class="slider-caption show"]'));
let logo=element(by.className('brand-logo'));
let headers= element.all(by.className('dropdown-container')).get(2);
let headerDropDown= element.all(by.css('div[class="sublink-container slide-up"]')).get(2);
let TV= element(by.css('[href="/in/tv"]'));
let tv= element.all(by.css('a[href^="/in/channels"]'));

this.get= function(url) {
    browser.get(url);
    browser.sleep(5000);
//     TV.click();
//     browser.sleep(4000);
//     tv.get(0).click();
// tv.each(function(item){
// item.element(by.linkText('Hotstar Specials')).click();
// });

}

this.logIn= function() {
    logIn.click();
    browser.sleep(2000);
}

// this.mobNumEnter= function(num){
//     mobNum.sendKeys(num);
// };

this.emailSignUp= function(){
emailSignUp.click();
browser.sleep(2000);
};

this.emailEnter= function(mailId){
email.sendKeys(mailId);
continueButton.click();
browser.sleep(10000);
if(emailError.isPresent()=="true"){
    
}
};

this.passwordEnter=function(pswd){
password.sendKeys(pswd);
browser.sleep(2000);
continueButton.click();
browser.sleep(15000);
};

this.mainSliderSelect= function(){
//  browser.wait(expect(slider.isPresent()).toBeTruthy(),5000);
browser.sleep(3000);
browser.wait(EC.elementToBeClickable(mainSlider), 50000, "Date Range is still not clickable");

// if(expect(nextArrow.getCssValue('display')).toBe('#000000')){
// nextArrow.click();
// browser.sleep(2000);
// mainSlider.click();
// browser.sleep(2000);
// }
// else{
// mainSlider.click();
// browser.sleep(2000);
// mainSlider.click(2000);
// browser.sleep();
// }


if(i==0){
    mainSlider.click();
}
else{
browser.actions().mouseMove(ovRight).perform();
nextArrow.click();
browser.sleep(2000);
mainSlider.click();
}



// mainSlider.isDisplayed().then(function(visible) {
// if(!visible) {
//     for(i==0;i<4;i++){}
//     browser.actions().mouseMove(ovRight).perform();
//     nextArrow.click();
//     browser.sleep(2000);
//  }
// else{
//     nextArrow.click();
//     browser.sleep(2000);
//     mainSlider.click();
// }

    //  else {
    //     browser.actions().mouseMove(sliderContainer).perform();
    //     browser.sleep(5000);

    //     rightArrow.click();
    //     browser.sleep(5000);
    //     secondarySlider.click();
    // }
//   });


// browser.actions().mouseMove(nextArrow).perform();
// nextArrow.click();
// browser.sleep(1000);
// mainSlider.click();
// mainSlider.isDisplayed().then(function(visible) {
//     if (visible) {
//         browser.sleep(5000);
//        mainSlider.click();
    
//     } else {
//         for(x==1;x<=i;x++){ 
//             browser.actions().mouseMove(ovRight).perform();
//             nextArrow.click();
       
//         }
       

   
//       browser.sleep(2000);
//        mainSlider.click();
//     }
//   });


// browser.sleep(5000);
    // browser.driver.getCurrentUrl().then(function(homeUrl){
    //     expect(homeUrl).toEqual('https://www.dream11.com/register?testcode=affpwa&pid=hotstar_web&af_click_lookback=30d&utm_content=20200122ban_1170x362_02&utm_source=hotstar_web&utm_medium=cpm&af_adset=cpm&af_ad=0191220ban_1170x362_02&utm_campaign=home&utm_redirection=NextMatch&c=home');
    
    // });

    browser.sleep(4000);
    logo.click();
    browser.sleep(4000);
    // browser.navigate().back();

};

this.secondarySlider=function(){
    browser.sleep(5000);
    // browser.actions().mouseMove(sliderContainer).perform();
    // browser.sleep(2000);
    // browser.actions().mouseMove(rightArrow).perform();
    // rightArrow.click();
   secondarySlider.isDisplayed().then(function(visible) {
        if (visible) {
            browser.sleep(5000);
            secondarySlider.click();
        
        } else {
            browser.actions().mouseMove(sliderContainer).perform();
            browser.sleep(1000);
            // browser.actions().mouseMove(trySS).perform();
            // browser.sleep(3000);
            browser.actions().mouseMove(rightArrow).perform();
            // browser.sleep(3000);
    
            rightArrow.click();
            browser.sleep(5000);
            secondarySlider.click();
        }
      });

    // let con1=expect(secondarySlider.getAttribute('aria-hidden')).toEqual('true');
    // if(ex!="true"){
    //     browser.actions().mouseMove(sliderContainer).perform();
    //     browser.sleep(5000);

    //     rightArrow.click();
    // }
    // // // browser.actions().mouseMove(sliderContainer).perform();
    // // // browser.wait(EC.elementToBeClickable(secondarySlider), 30000, "Date Range is still not clickable");
    // browser.sleep(5000);
    // secondarySlider.click();
    browser.sleep(7000);
    browser.navigate().back();
};

this.navigationBarOpen=function(){
    browser.sleep(5000);
    navigationBar.click();
};

this.searchElement=function(srch){
    search.sendKeys(srch);
    browser.sleep(3000);
    searchElement.click();
    browser.sleep(3000);
    elements.click();
    browser.sleep(4000);
    browser.navigate().back();
    browser.sleep(4000);
};

this.headers= function(){
headers.click();
headerDropDown.click();
browser.sleep(5000);
logo.click();
}


};

module.exports=new hotStarLocators();