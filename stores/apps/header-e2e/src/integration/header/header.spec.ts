describe('header: Header component', () => {
  before(() => cy.visit('/iframe.html?id=header--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Header!');
  });
});
