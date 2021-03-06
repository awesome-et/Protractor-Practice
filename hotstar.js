let hotStarLocators=require('./hotstarLocators.js');
describe('Hotstar Test',function(){

    it('Hotstar',function(done){
hotStarLocators.get('https://www.hotstar.com/in');
// hotStarLocators.logIn();
// hotStarLocators.mobNumEnter('');
// hotStarLocators.emailSignUp();
// hotStarLocators.emailEnter('');
// hotStarLocators.passwordEnter('');
hotStarLocators.mainSliderSelect();
hotStarLocators.secondarySlider(); 
hotStarLocators.searchElement("dance plus");

hotStarLocators.navigationBarOpen();
hotStarLocators.headers();
done();
    });
});