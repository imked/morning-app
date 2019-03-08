describe('React App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/routines')
  })

  describe('/', () => {
    it('has the correct title', () => {
      cy.title().should('include', 'My Miracle Morning')
    })
  })

  describe('section', () => {
    it('has a card', () => {
      cy.get('section')
        .find('h3')
        .should('have.length', 7)
      cy.get('section')
        .find('p')
        .should('have.length', 7)
      cy.get('section')
        .find('img')
        .should('have.length', 7)
      cy.get('section')
        .find('button')
        .should('have.length', 7)
    })
  })
  it('button', () => {
    cy.get('button')
      .contains('+')
      .click()
      .contains('-')
  })
  it('cy.scrollTo() - scroll the window or element to a position', () => {
    cy.get('section > p')
      .contains('glass')
      .scrollTo('bottom')
  })
})
