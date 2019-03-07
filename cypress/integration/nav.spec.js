describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('Nav')
      .contains('Daily Task')
      .click()
    cy.get('Nav')
      .contains('Routines')
      .click()
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()
    cy.reload(true)
  })
})
