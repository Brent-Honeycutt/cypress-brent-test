describe('Registration form', () => {
  it('allows a user to register with valid credentials and logs the submitted data', () => {
    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log').as('consoleLog')
        cy.stub(win.console, 'error').as('consoleError')
      }
    });
    
    // Enter valid registration details
    cy.get('[data-cy="name-input"]').type('John Doe');
    cy.get('[data-cy="email-input"]').type('john.doe@example.com');
    cy.get('[data-cy="password-input"]').type('password123');

    // Submit the registration form
    cy.get('[data-cy="register-button"]').click();

    // Verify that the submitted data is displayed in the console log
    // cy.window().then((win) => {
    //   cy.spy(win.console, 'log').as('consoleLog');
    // });

    cy.get('@consoleLog').should('have.been.calledWithExactly', 'Name: John Doe\nEmail: john.doe@example.com\nPassword: password123');
  });
});