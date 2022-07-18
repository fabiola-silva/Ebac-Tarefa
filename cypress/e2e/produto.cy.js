/// <reference types="cypress" />

describe('Funcionalidade Página do Produto', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve escolher um produto da lista ', () => {

        cy.get('[class="product-block grid"]')
        .contains('Arcadio Gym Short')
        .click()
    });

    it('Deve adicionar o produto no carrinho', () => {
        cy.get('[class="product-block grid"]')
        .contains('Arcadio Gym Short').click()
        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type('2')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items')
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 2)
        cy.get('.woocommerce-message').should('contain', '2 × “Arcadio Gym Short” foram adicionados no seu carrinho.')

                
    });

});