describe('React App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has a complete form', () => {
    cy.get('form').should('have.length', 1)
    cy.get('form > input').should('have.length', 1)
    cy.get('form > button').should('have.length', 1)
  })

  it('submits a task', () => {
    cy.get('form > [name="task"]').type('foo')
    cy.get('form > button').click()
  })
})
