describe('Registration form', () => {
  // Tasks run at the start of each test
  beforeEach(() => {
    // Visit the test site
    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
        // Create stubs of any output or errors in the console log
        cy.stub(win.console, 'log').as('consoleLog')
        cy.stub(win.console, 'error').as('consoleError')
      }
    });
  })
  it('allows a user to register with valid credentials and logs the submitted data', () => {
    
    // Enter valid registration details
    cy.get('[data-cy="name-input"]').type('John Doe');
    cy.get('[data-cy="email-input"]').type('john.doe@example.com');
    cy.get('[data-cy="password-input"]').type('password123');

    // Submit the registration form
    cy.get('[data-cy="register-button"]').click();

    // Verify that the submitted data is displayed in the console log
    cy.get('@consoleLog').should('have.been.calledWithExactly', 'Name: John Doe\nEmail: john.doe@example.com\nPassword: password123');
  });
});