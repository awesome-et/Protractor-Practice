let Locators = function () {
    let firstInput = element(by.model("first"));
    let secondInput = element(by.css('input[ng-model="second"]'));
    let operator = element.all(by.tagName('option'));
    let div = element(by.css('option[value="DIVISION"]'));
    let goButton = element(by.cssContainingText('button', 'Go!'));
    let result = element(by.css('h2[class="ng-binding"]'));
    let rowResult = element.all(by.repeater('result in memory')).first().element(by.css('td:nth-child(3)'));
    let rowExpression = element.all(by.repeater('result in memory')).first().element(by.css('td:nth-child(2)'));

    this.result = function (firstChar, secondChar, op) {
        firstInput.sendKeys(firstChar);
        secondInput.sendKeys(secondChar);

        operator.each(function (items) {
            items.getAttribute('value').then(function (value) {
                if (value == op) {
                    items.click();
                }
            });

        });
        goButton.click();
        browser.sleep(5000);


        if (op == "DIVISION") {
            let expectResult = firstChar / secondChar;
            expect(result.getText()).toEqual(expectResult.toString());
            expect(rowResult.getText()).toEqual(expectResult.toString());
            expect(rowExpression.getText()).toEqual(firstChar + ' / ' + secondChar);

        }
        else if (op == "MULTIPLICATION") {
            let expectResult = firstChar * secondChar;
            expect(result.getText()).toEqual(expectResult.toString());
            expect(rowResult.getText()).toEqual(expectResult.toString());
            expect(rowExpression.getText()).toEqual(firstChar + ' * ' + secondChar);
        }
        else if (op == "SUBTRACTION") {
            let expectResult = firstChar - secondChar;
            expect(result.getText()).toEqual(expectResult.toString());
            expect(rowResult.getText()).toEqual(expectResult.toString());
            expect(rowExpression.getText()).toEqual(firstChar + ' - ' + secondChar);
        }
        else {
            let expectResult = firstChar + secondChar;
            expect(result.getText()).toEqual(expectResult.toString());
            expect(rowResult.getText()).toEqual(expectResult.toString());
            expect(rowExpression.getText()).toEqual(firstChar + ' + ' + secondChar);
        }


    };



};

module.exports = new Locators();