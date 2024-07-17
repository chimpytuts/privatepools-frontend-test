import './commands';
import '@synthetixio/synpress/support';

const NETWORK = Cypress.env("NETWORK");
const SECRET_WORDS = Cypress.env("SECRET_WORDS");
const PASSWORD = Cypress.env("METAMASK_PASSWORD");

before(() => {
  cy.task('setupMetamask', { secretWords: SECRET_WORDS, network: NETWORK, password: PASSWORD }).then((result) => {
    console.log('setupMetamask result:', result);
  }).catch((error) => {
    console.error('setupMetamask error:', error);
  });
});
