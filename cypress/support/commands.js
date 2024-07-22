// // Example of adding custom commands
// Cypress.Commands.add('login', (email, password) => {
//     // Custom login command logic
//   });
  
//   // Example of overwriting an existing command
//   Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
//     return originalFn(url, options);
//   });
  
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});