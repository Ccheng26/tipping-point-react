var config = require('../nightwatch.conf.js');

module.exports = {
  'routerCheck': function(browser) {
    browser
      .url('')
      .waitForElementVisible('body')
      .click("")
      .waitForElementVisible('#')
      .waitForElementVisible('#')
      .setValue('#', )
      .setValue('#', )
      .click('')
      .pause()
      .end();
  }
};
