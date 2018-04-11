describe('Google demo test for Mocha', function () {

    context('for demo purposes', function () {

        afterEach(function (client, done) {
            done();
        });

        beforeEach(function (client, done) {
            done();
        });

        it('uses BDD to run the Google simple test', function (browser) {
            var google = browser.page.googlePage();
            google
                .navigate()
                .expect.element('@body').to.be.present.before(1000)
            google
                .enterSearchValue('nightwatch')
                .sendKeys('@searchBox', browser.Keys.ENTER)
            google.expect.element('@main').to.be.present.before(2000)
            google.waitForElementPresent('@main')
            google.assert.containsText('@main', 'The Night Watch')
        });

    });
});