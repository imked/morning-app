describe('React App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('/', () => {
    it('has the correct title', () => {
      cy.title().should('include', 'Morning App')
    })
  })

  describe('section', () => {
    it('has a card', () => {
      cy.get('section')
        .find('h3')
        .should('have.length', 1)
      cy.get('section')
        .find('p')
        .should('have.length', 1)
      cy.get('section')
        .find('img')
        .should('have.length', 1)
      cy.get('section')
        .find('button')
        .should('have.length', 1)
    })
  })
  it('button', () => {
    cy.get('button')
      .contains('+')
      .click()
      .contains('-')
  })
})
