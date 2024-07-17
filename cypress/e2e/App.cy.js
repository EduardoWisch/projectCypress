describe('Quando clicar no botão não tenho conta', () => {
    it('deve ir para a aba de criar conta', () => {
        cy.visit('/')
        cy.contains('h1', 'Login')
        cy.get('p').contains('Não tenho conta').click()
        cy.url().should('include', '/signup')
    });
    it('Quando clicar no botão de cadastro, deve voltar a aba de login', () => {
        cy.visit('/signup')
        cy.get('button').contains('Cadastrar').click()
        cy.url().should('include', '/')
    });
    it('Quando clicado no botão de login, deve ir para a página principal e verificar se o h1 tem a cor blueviolet', () => {
        cy.visit('/')
        cy.get('button').contains('Acessar').click()
        cy.url().should('include', '/main')
        cy.contains('h1', 'Você entrou na página principal').should('have.css', 'color', 'rgb(138, 43, 226)')
    })
})