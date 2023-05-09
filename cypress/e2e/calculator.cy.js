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
  it('can input numbers in the fields', () => {

    //Enter "1234567890" in both fields
    cy.get('#num1').type('1234567890');
    cy.get('#num2').type('1234567890');

    //Verify that "1234567890" in the value of both fields
    cy.get('#num1').should('have.value', '1234567890')
    cy.get('#num2').should("have.value", '1234567890')
  });

  it('can NOT input letters, symbols, or emoji in the fields', () => {

    //Enter "abyz&^~)}?/😎" in both fields
    cy.get('#num1').type('abyz&^~)}?/😎');
    cy.get('#num2').type('abyz&^~)}?/😎');

    //Verify both fields remain blank, disallowing the characters
    cy.get('#num1').should('have.value', '')
    cy.get('#num2').should('have.value', '')
  })
 
  it('performs addition correctly', () => {
    
    // Enter "2" in the first calculator field
    cy.get('#num1').type('2');

    // Enter "7" in the second calculator field
    cy.get('#num2').type('7');

    // Select the "+" button to add the numbers
    cy.get('button').contains('+').click();

    // Verify that the result is correct
    cy.get('[data-cy="calculator-result"]').should('contain', 'Result: 9');
  });

  it('performs subtraction correctly', () => {
    
    // Enter "2" in the first calculator field
    cy.get('#num1').type('10');

    // Enter "7" in the second calculator field
    cy.get('#num2').type('7');

    // Select the "+" button to add the numbers
    cy.get('button').contains('-').click();

    // Verify that the result is correct
    cy.get('[data-cy="calculator-result"]').should('contain', 'Result: 3');
  });

  it('performs multiplication correctly', () => {
    
    // Enter "2" in the first calculator field
    cy.get('#num1').type('10');

    // Enter "7" in the second calculator field
    cy.get('#num2').type('7');

    // Select the "+" button to add the numbers
    cy.get('button').contains('*').click();

    // Verify that the result is correct
    cy.get('[data-cy="calculator-result"]').should('contain', 'Result: 70');
  });

  it('performs division correctly', () => {
    
    // Enter "2" in the first calculator field
    cy.get('#num1').type('9258');

    // Enter "7" in the second calculator field
    cy.get('#num2').type('3');

    // Select the "+" button to add the numbers
    cy.get('button').contains('/').click();

    // Verify that the result is correct
    cy.get('[data-cy="calculator-result"]').should('contain', 'Result: 3086');
  });
});