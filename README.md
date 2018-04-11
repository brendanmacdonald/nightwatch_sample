# NightwatchJS sample

## Requirements
1. Clone this repo. 
2. Download selenium server, geckodriver, and chromedriver, and add them to './bin' folder.

## Execution

Execute non-mocha tests with:
```
nightwatch tests/this.js tests/module.js
```

Execute mocha tests with:
```
nightwatch tests/mocha.js -e mocha
```