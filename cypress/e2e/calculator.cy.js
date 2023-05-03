describe('Calculator', () => {
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
  it('performs addition correctly', () => {
    
    // Enter "2" in the first calculator field
    cy.get('#num1').type('2');

    // Enter "7" in the second calculator field
    cy.get('#num2').type('7');

    // Select the "+" button to add the numbers
    cy.get('button').contains('+').click();

    // Verify that the submitted data is displayed in the console log
    cy.get('[data-cy="calculator-result"]').should('contain', 'Result: 9');
  });
  it('performs subtraction correctly', () => {
    
    // Enter "2" in the first calculator field
    cy.get('#num1').type('10');

    // Enter "7" in the second calculator field
    cy.get('#num2').type('7');

    // Select the "+" button to add the numbers
    cy.get('button').contains('-').click();

    // Verify that the submitted data is displayed in the console log
    cy.get('[data-cy="calculator-result"]').should('contain', 'Result: 3');
  });
});