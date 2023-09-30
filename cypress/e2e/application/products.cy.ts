describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/products')
  })

  it('displays fixed products', () => {
    cy.get('[data-cy="Deluxe chair"]').should('have.text', 'Deluxe chair')
    cy.get('[data-cy="Normal couch"]').should('have.text', 'Normal couch')
    cy.get('[data-cy="Simple round table"]').should('have.text', 'Simple round table')
  })

  it('displays fixed description of products', () => {
    cy.get('[data-cy="Soft Chair"]').should('have.text', 'Soft Chair')
    cy.get('[data-cy="Normal couch for 2"]').should('have.text', 'Normal couch for 2')
    cy.get('[data-cy="Normal round table for 2"]').should('have.text', 'Normal round table for 2')
  })
})
