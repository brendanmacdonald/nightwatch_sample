describe('Google demo test for Mocha', function () {

    describe('for demo purposes', function () {

        before(function (client, done) {
            client.pause(5);
            done();
        });

        after(function (client, done) {
            if (client.sessionId) {
                client.end(function () {
                    done();
                });
            } else {
                done();
            }
        });

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
            browser.pause(2000)
            google.expect.element('@main').to.be.present
            google.assert.containsText('@main', 'The Night Watch')
        });

    });
});