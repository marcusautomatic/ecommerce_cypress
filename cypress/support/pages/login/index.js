Cypress.Commands.add('loginPage.fillFormAndSubmit', (
    user = 'standard_user',
    password = 'secret_sauce',
    
    ) => {
        
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type(user)
        cy.get('[data-test="password"]').type(password)
        cy.get('[data-test="login-button"]').click()
        cy.get('#react-burger-menu-btn')
            .should('be.visible')

})


Cypress.Commands.add('loginPage.invalidLoginCredentials', (
    user = 'wrong_user',
    password = 'wrong_password',
    
    ) => {
        
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type(user)
        cy.get('[data-test="password"]').type(password)
        cy.get('[data-test="login-button"]').click()
        

})


Cypress.Commands.add('login.geterror', () => {
    cy.get('data-test="error"')
        .then($error => {
            return $error[0].innerText
        })
})




      
      
