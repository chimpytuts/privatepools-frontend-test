const { defineConfig } = require("cypress");
const synpressPlugins = require("@synthetixio/synpress/plugins");

module.exports = defineConfig({
  userAgent: "synpress",
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      synpressPlugins(on, config);
      return config;
    },
    testIsolation: true,
    baseUrl: "https://privatepools-shared-version.vercel.app/",
    supportFile: "cypress/support/e2e.js",
    env: {
      SECRET_WORDS: process.env.CYPRESS_SECRET_WORDS,
      METAMASK_PASSWORD: process.env.CYPRESS_METAMASK_PASSWORD,
      NETWORK: "bsc" // Set to BSC Mainnet
    }
  },
});
