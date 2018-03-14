# NightwatchJS sample

## Requirements
1. Clone this repo. 
2. Download selenium server, geckodriver, and chromedriver, and add them to './drivers' folder.

## Execution

Execute non-mocha tests with:
```
nightwatch test/*.js
```

Execute mocha tests with:
```
nightwatch test/mocha.js -e mocha
```