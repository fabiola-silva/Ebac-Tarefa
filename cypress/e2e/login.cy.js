/// <reference types = "cypress" />

context('Funcionalidade Login', () => {

    it('Deve realizar login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()      
        
        cy.get('.page-title').should('contain', 'Minha conta')
    
    });

    it('Deve inserir um login inválido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

        cy.get('#username').type('aluno_@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()      
        
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    
    });
       
    it.only('Deve inserir uma senha inválida', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('testeteste.com')
        cy.get('.woocommerce-form > .button').click()      
        
        cy.get('.woocommerce-error > li').should('contain','Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    
    });
        
    
    
});

