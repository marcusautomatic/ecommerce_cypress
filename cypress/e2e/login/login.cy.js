describe('Login tests', () => {

    context('Login Functionality', () => {
  
      beforeEach(() => {

      })
  
      it('should allow valid user login', () => {
        // Test case: Valid user login
        // For example: entering valid credentials and verifying successfully login
        cy['loginPage.fillFormAndSubmit']()
        
        // Assrtion to check successful login
        cy.url().should('include', '/inventory')

      })

      it('should show error on invalid login attempt', () => {
        // Test case: Valid user login
        // For example: entering valid credentials and verifying successfully login
        cy['loginPage.invalidLoginCredentials']()
        
        // Assrtion to check validation error
        cy.get('[data-test="error"]')
            .then($error => {
                return $error[0].innerText
            })

      })
  
    })
  })
  
  