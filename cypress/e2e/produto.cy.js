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

});