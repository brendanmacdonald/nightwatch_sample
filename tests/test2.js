module.exports = {
    'Google Search Test': function (client) {
        var google = client.page.googlePage();

        google.navigate()
            .assert.title('Google')
            .assert.visible('@searchBox')
            .setValue('@searchBox', ['nightwatch', client.Keys.ENTER])

        client.end();
    },

    'Google Search Test 2': function (client) {
        var google = client.page.googlePage();

        google.navigate()
            .assert.title('Google')
            .assert.visible('@searchBox')
            .enterSearchValue()
            .sendKeys('@searchBox', client.Keys.ENTER)
        client.pause(2000)
            .assert.containsText('#main', 'The Night Watch')
        client.end();
    }
};