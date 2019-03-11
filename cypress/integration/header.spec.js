describe('Header', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has a title with logo', () => {
    cy.get('header > div')
      .should('have.length', 2)
      .contains('Miracle')
    cy.get('header > div').contains('Morning')
    cy.get('[data-cy="header-logo"]').should('have.attr', 'alt', 'sunrise')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()
    cy.reload(true)
  })
})
