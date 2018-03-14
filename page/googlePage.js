var googleCommands = {
    enterSearchValue: function () {
        return this.setValue('@searchBox', 'nightwatch');
    }
};

module.exports = {
    commands: [googleCommands],
    url: 'http://google.com',
    elements: {
        searchBox: {
            selector: 'input[type=text]'
        },
        body: {
            selector: 'body'
        }
    }
};