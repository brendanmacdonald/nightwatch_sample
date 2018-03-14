this.demoTestGoogle = function (browser) {
    var google = browser.page.googlePage();

    google.navigate()
        .assert.title('Google')
        .waitForElementVisible('@body', 1000)
        .setValue('@searchBox', ['nightwatch', browser.Keys.ENTER])
    browser.pause(2000)
        .assert.containsText('#main', 'The Night Watch')
    browser.end();
};


this.demoTestGoogle2 = function (browser) {
    var google = browser.page.googlePage();

    google.navigate()
        .assert.title('Google')
        .waitForElementVisible('@body', 5000)
        .enterSearchValue()
        .sendKeys('@searchBox', browser.Keys.ENTER)
    browser.pause(1000)
        .assert.containsText('#main', 'The Night Watch')
    browser.end();
};