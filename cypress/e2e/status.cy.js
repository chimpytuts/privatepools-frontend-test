describe("To Init Connect Status in Metamask", () => {
  it("Setup Metamask and import the required wallets", () => {
    cy.addMetamaskNetwork({
      networkName: Cypress.env("T_NETWORK_NAME"),
      chainId: Cypress.env("T_CHAIN_ID"),
      rpcUrl: Cypress.env("T_RPC_URL"),
      symbol: Cypress.env("T_SYMBOL"),
    });
    cy.switchToMetamaskWindow();
    cy.closeMetamaskTransactionDetailsPopup();
    cy.switchToCypressWindow();
    cy.visit("/pools/compose");
    cy.acceptMetamaskAccess();
    cy.contains("div", "Sign and proceed").click();
    cy.wait(60_000);
    cy.confirmMetamaskSignatureRequest();
    cy.get(".compose_token_btn").first().click();
    cy.get(".token_card").first().click();
    cy.get(".compose_token_btn").last().click();
    cy.get(".token_card").last().click();
    cy.get(".compose_text.weight_input").first().type(50);
    cy.get(".compose_text.weight_input").last().type(50);
    cy.get(".compose_pool_connect_wallet").click();
    try {
      cy.get(".compose_pool_connect_wallet").click();
    } catch (e) {}
    cy.get(".compose_pool_connect_wallet").click();
    cy.wait(30_000);
    cy.confirmMetamaskTransaction();

    //cy.allowMetamaskToAddAndSwitchNetwork();
  });
});
