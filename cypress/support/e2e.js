import './commands'
import '@synthetixio/synpress/support';

// Alternatively you can use CommonJS syntax:
// require('./commands')
const NETWORK_GOERLI = Cypress.env("NETWORK")
const SECRET_WORDS = Cypress.env("SECRET_WORDS")
const PASSWORD = Cypress.env("METAMASK_PASSWORD")

before(() => {
    cy.setupMetamask(SECRET_WORDS, NETWORK_GOERLI, PASSWORD)
})