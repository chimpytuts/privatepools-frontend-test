describe("Privatepools tests", () => {
  it("Compose", () => {
    cy.visit("/pools/compose");
    cy.wait(10_000);

    cy.acceptMetamaskAccess();
    cy.contains("div", "Sign and proceed").click();
    cy.wait(60_000);
    cy.confirmMetamaskSignatureRequest();
    cy.get('*[class^="compose_token_btn"]').click({ force: true });
    // cy.get("#search")
    //   .click({ force: true })
    //   .focused()
    //   .type("DAI", { force: true });
    cy.wait(3_000);
    cy.get(".token_card").contains("DAI").click({ force: true });
    cy.contains("button", "Add token").click({ force: true });
    cy.get('*[class^="compose_token_btn"]').last().click({ force: true });
    // cy.get("#search")
    //   .click({ force: true })
    //   .focused()
    //   .clear()
    //   .type("DOGE", { force: true });
    cy.wait(3_000);
    cy.get(".token_card").contains("div", "DOGE").click({ force: true });
    cy.wait(5_000);
    cy.get(".weight_input")
      .eq(0)
      .click({ force: true })
      .focused()
      .clear()
      .type(50, { force: true });
    cy.get(".weight_input")
      .eq(1)
      .click({ force: true })
      .focused()
      .clear()
      .type(50, { force: true });
    cy.get(".compose_pool_connect_wallet").click({ force: true });
    try {
      cy.get(".compose_pool_connect_wallet").click({ force: true });
    } catch (e) {}
    cy.get(".compose_pool_connect_wallet").click({ force: true });
    cy.wait(5_000);
    cy.get(".compose_pool_connect_wallet").click({ force: true });
    cy.wait(5_000);
    cy.get(".compose_pool_connect_wallet").click({ force: true });
    cy.wait(90_000);
    cy.confirmMetamaskTransaction();
    cy.wait(20_000);
    cy.get(".token-input")
      .eq(1)
      .click({ force: true })
      .focused()
      .clear()
      .type(1, { force: true });
    cy.get(".compose_pool_connect_wallet").click({ force: true });
    cy.get(".compose_pool_connect_wallet").then(($btn) => {
      if ($btn.text().includes("Approving...")) {
        cy.wait(60_000);
        cy.confirmMetamaskTransaction();
        cy.wait(5_000);
      }
      if ($btn.text().includes("Approving...")) {
        cy.wait(60_000);
        cy.confirmMetamaskTransaction();
        cy.wait(5_000);
      }
      cy.wait(60_000);
      cy.confirmMetamaskTransaction();
      cy.wait(5_000);
    });
  });
  it("Withdraw", () => {
    cy.visit(
      "/pools/0xc6d780cc3b3cd74c9b4f3228cb1224310cf71a80000200000000000000000001/BNB/withdraw"
    );
    cy.wait(10_000);
    cy.acceptMetamaskAccess();
    cy.contains("div", "Sign and proceed").click();
    cy.wait(60_000);
    cy.confirmMetamaskSignatureRequest();
    cy.reload();
    cy.get(".token-input")
      .click({ force: true })
      .focused()
      .clear()
      .type(1, { force: true });
    cy.get(".compose_pool_connect_wallet").click({ force: true });
    cy.get(".compose_pool_connect_wallet").click({ force: true });
    cy.wait(30_000);
    cy.confirmMetamaskTransaction();
  });
  it("Deposit", () => {
    cy.visit(
      "/pools/0xc6d780cc3b3cd74c9b4f3228cb1224310cf71a80000200000000000000000001/BNB/deposit"
    );
    cy.wait(10_000);
    cy.acceptMetamaskAccess();
    cy.contains("div", "Sign and proceed").click();
    cy.wait(60_000);
    cy.confirmMetamaskSignatureRequest();
    cy.reload();
    cy.wait(5_000);
    cy.get(".currency_container").within(() => {
      cy.get(".token-input")
        .click({ force: true })
        .focused()
        .clear()
        .type(0.1, { force: true });
    });
    cy.get(".compose_pool_connect_wallet").click({ force: true });
    cy.get(".compose_pool_connect_wallet").click({ force: true });
    cy.wait(30_000);
    cy.get(".compose_pool_connect_wallet").then(($btn) => {
      if ($btn.text().includes("Add liquidity")) {
        cy.get(".compose_pool_connect_wallet").click({ force: true });
        cy.wait(30_000);
        cy.confirmMetamaskTransaction();
      } else {
        cy.wait(30_000);
        cy.confirmMetamaskTransaction();
        cy.wait(30_000);
        cy.get(".compose_pool_connect_wallet").then(($btn2) => {
          if (!$btn2.text().includes("Add liquidity")) {
            cy.get(".compose_pool_connect_wallet").click({ force: true });
            cy.confirmMetamaskTransaction();
          }
          cy.get(".compose_pool_connect_wallet").click({ force: true });
          cy.wait(30_000);
          cy.confirmMetamaskTransaction();
        });
      }
    });
  });
});
