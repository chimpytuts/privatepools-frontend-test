import "./commands";
import "@synthetixio/synpress/support";


before(() => {
  cy.addMetamaskNetwork({
    networkName: Cypress.env("T_NETWORK_NAME"),
    chainId: Cypress.env("T_CHAIN_ID"),
    rpcUrl: Cypress.env("T_RPC_URL"),
    symbol: Cypress.env("T_SYMBOL"),
  });
  cy.switchToMetamaskWindow();
  cy.closeMetamaskTransactionDetailsPopup();
  cy.switchToCypressWindow();
});
