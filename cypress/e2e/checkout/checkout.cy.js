describe('a registered user with items in their shopping cart', () => {

  context('Checkout', () => {

    beforeEach(() => {
      cy['loginPage.fillFormAndSubmit']()
    })

    it('Successful Checkout Process', () => {
      cy['shoppingCartPage.addItem'] ('backpack')
      cy['shoppingCartPage.addItem']('bolt-t-shirt')
      cy['shoppingCartPage.countCartItems']
      cy['shoppingCartPage.goToYourCart']

    })

  })
})

