import { getGreeting } from '../support/app.po';

describe('bike-store', () => {
  before(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().should('contain.text', 'Welcome to bike-store!');
  });
});
