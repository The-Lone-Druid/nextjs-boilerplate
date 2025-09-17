describe('Button Component Integration', () => {
  it('should render buttons on homepage', () => {
    cy.visit('/');

    // Check that buttons exist and are visible
    cy.contains('Get Started').should('be.visible');
    cy.contains('View Documentation').should('be.visible');

    // Check that buttons have correct styling
    cy.get('a').contains('Get Started').should('be.visible');
    cy.get('a').contains('Get Started').should('have.class', 'bg-primary');

    // Check that links open in new tab
    cy.get('a').contains('Get Started').should('have.attr', 'target', '_blank');
    cy.get('a')
      .contains('View Documentation')
      .should('have.attr', 'target', '_blank');
  });
});
