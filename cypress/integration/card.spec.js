describe('React App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  describe('/', () => {
    it('has the correct title', () => {
      cy.title().should('include', 'Morning App')
    })
  })

  it('has a card', () => {
    cy.get('card').should('have.length', 1)
    cy.get('card > h3').should('have.length', 1)
    cy.get('card > p').should('have.length', 1)
    cy.get('card > img').should('have.length', 1)
  })
})
