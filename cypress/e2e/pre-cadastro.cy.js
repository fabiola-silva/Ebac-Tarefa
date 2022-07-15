/// <reference types= "cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade de Pré-Cadastro do Usuário', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    it('Deve completar o preenchimento do pré-cadastro', () => {

        const Name = faker.name.firstName()
        const Sobrenome = faker.name.lastName()
        const Email =faker.internet.email()

        cy.get('#reg_email').type('bruno_teste@teste.com')
        cy.get('#reg_password').type('teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('Bruno')
        cy.get('#account_last_name').type('Carvalho')
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

        
    });
});



