module.exports = {
    'Demo test Google' : function (browser) {
      browser
        .pause(1000)
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .setValue('input[type=text]', 'nightwatch')
        .pause(1000)
        // this will be in the nightwatch container
        .saveScreenshot('/results/screenshots/google.png')
        .end();
    }
  };