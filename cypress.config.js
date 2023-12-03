const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      e2e: {
        baseUrl: 'https://www.saucedemo.com'
      }
      // implement node event listeners here
    },
  },
});
