module.exports = {

    beforeEach: function (browser) {
        browser.page.googlePage()
            .navigate();
    },

    'Google Search Test': function (browser) {
        var google = browser.page.googlePage();

        google
            .assert.title('Google')
            .assert.visible('@searchBox')
            .setValue('@searchBox', ['nightwatch', browser.Keys.ENTER])
    },

    'Google Search Test 2': function (browser) {
        var google = browser.page.googlePage();

        google
            .assert.title('Google')
            .assert.visible('@searchBox')
            .enterSearchValue('nightwatch')
            .sendKeys('@searchBox', browser.Keys.ENTER)
        browser.pause(2000)
        browser.expect.element('#main').to.be.present
        google.assert.containsText('#main', 'The Night Watch')
    },

    afterEach: function (browser, done) {
        browser.end();
        done();
    },
};