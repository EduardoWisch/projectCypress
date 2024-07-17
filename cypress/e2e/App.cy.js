describe('Quando clicar no botão não tenho conta', () => {
    it('deve ir para a aba de criar conta', () => {
        cy.visit('/')
        cy.contains('h1', 'Login')
        cy.get('p').contains('Não tenho conta').click()
        cy.contains('h1', 'Inscreva-se')
    });
    it('Quando clicar no botão de cadastro, deve voltar a aba de login', () => {
        cy.visit('/signup')
        cy.get('button').contains('Cadastrar').click()
        cy.contains('h1', 'Login')
    });
    it('Quando clicado no botão de login, deve ir para a página principal e verificar se o h1 tem a cor blueviolet', () => {
        cy.visit('/')
        cy.get('button').contains('Acessar').click()
        cy.contains('h1', 'Você entrou na página principal').should('have.css', 'color', 'rgb(138, 43, 226)')
    })
})