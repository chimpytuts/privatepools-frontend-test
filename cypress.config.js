const { defineConfig } = require("cypress");
const synpressPlugins = require("@synthetixio/synpress/plugins");

module.exports = defineConfig({
  userAgent: "synpress",
  chromeWebSecurity: true,
  defaultCommandTimeout:99999999,
  execTimeout:99999999,
  taskTimeout:99999999,
  requestTimeout:999999999,
  pageLoadTimeout:9999999999,
  responseTimeout:9999999999,
  e2e: {
    setupNodeEvents(on, config) {
      synpressPlugins(on, config);
      return config;
    },
    chromeWebSecurity:true,
    defaultCommandTimeout: 9999999,
    pageLoadTimeout: 9999999,
    execTimeout:9999999,
    retries:100000,
    taskTimeout: 9999999,
    responseTimeout: 9999999,
    requestTimeout: 9999999,
    testIsolation: true,
    baseUrl: "http://localhost:8080/",
    supportFile: "cypress/support/e2e.js",
    env: {
      SECRET_WORDS: process.env.CYPRESS_SECRET_WORDS,
      METAMASK_PASSWORD: process.env.CYPRESS_METAMASK_PASSWORD,
      NETWORK: "mainnet",
      NETWORK_NAME: process.env.NETWORK_NAME,
      T_NETWORK_NAME: process.env.T_NETWORK_NAME,
      T_CHAIN_ID: process.env.T_CHAIN_ID,
      T_RPC_URL: process.env.T_RPC_URL,
      T_SYMBOL: process.env.T_SYMBOL,
    },
  },
});
