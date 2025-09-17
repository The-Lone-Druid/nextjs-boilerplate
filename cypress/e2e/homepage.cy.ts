describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the homepage successfully', () => {
    cy.contains('Build Faster with').should('be.visible');
    cy.contains('Next.js 15').should('be.visible');
    cy.contains('A comprehensive full-stack boilerplate').should('be.visible');
  });

  it('should display header with version badge', () => {
    cy.contains('Next.js Boilerplate').should('be.visible');
    cy.contains('v0.1.0').should('be.visible');
  });

  it('should have working theme toggle', () => {
    // Theme toggle should exist (it's an AnimatedThemeToggler component)
    cy.get('button[aria-label="Toggle theme"]').should('exist');

    // Click the theme toggle
    cy.get('button[aria-label="Toggle theme"]').click();

    // The html element should have the dark class
    cy.get('html').should('have.class', 'dark');
  });

  it('should have working language selector', () => {
    // Language selector should exist - it's a Select component
    cy.get('[role="combobox"]').should('exist');

    // Should contain English as default option
    cy.get('[role="combobox"]').should('contain', 'English');
  });

  it('should display all feature cards', () => {
    cy.contains('Next.js 15').should('be.visible');
    cy.contains('TypeScript').should('be.visible');
    cy.contains('Prisma + PostgreSQL').should('be.visible');
    cy.contains('Clerk Auth').should('be.visible');
    cy.contains('shadcn/ui').should('be.visible');
    cy.contains('Internationalization').should('be.visible');
    cy.contains('Cypress E2E with Component Testing').should('be.visible');
    cy.contains('Jest Testing').should('be.visible');
  });

  it('should display hero section stats', () => {
    cy.contains('15+ UI Components').should('be.visible');
    cy.contains('3 Languages').should('be.visible');
    cy.contains('100% TypeScript').should('be.visible');
    cy.contains('Jest & Cypress').should('be.visible');
  });

  it('should have working tabs in the component showcase section', () => {
    // Scroll to the component showcase section
    cy.contains('Component Showcase').scrollIntoView();

    // Check that tabs exist
    cy.contains('UI Components').should('be.visible');
    cy.contains('Theme System').should('be.visible');
    cy.contains('Testing').should('be.visible');

    // Click on Theme System tab
    cy.contains('Theme System').click();

    // Should show theme information
    cy.contains('Theme Support').should('be.visible');
    cy.contains('Light').should('be.visible');
    cy.contains('Dark').should('be.visible');
    cy.contains('System').should('be.visible');

    // Click on Testing tab
    cy.contains('Testing').click();

    // Should show testing information
    cy.contains('Jest').should('be.visible');
    cy.contains('Cypress').should('be.visible');
  });
  it('should display progress bars in UI components tab', () => {
    // Scroll to the component showcase section
    cy.contains('Component Showcase').scrollIntoView();

    // Ensure we're on the UI Components tab (default)
    cy.contains('UI Components').click();

    // Should show progress bars
    cy.get('[role="progressbar"]').should('have.length.at.least', 1);
    cy.contains('Progress Bars').should('be.visible');
  });

  it('should display call-to-action buttons', () => {
    cy.contains('Get Started').should('be.visible');
    cy.contains('View Documentation').should('be.visible');
  });

  it('should display setup steps', () => {
    cy.contains('Quick Setup').should('be.visible');
    cy.contains('Clone the repository').should('be.visible');
    cy.contains('Configure environment variables').should('be.visible');
    cy.contains('Set up PostgreSQL database').should('be.visible');
    cy.contains('Launch the Next.js development server').should('be.visible');
  });

  it('should display developer guides section', () => {
    cy.contains('Developer Guides').should('be.visible');
    cy.contains('Development Environment').should('be.visible');
    cy.contains('Internationalization').should('be.visible');
    cy.contains('Lazy Loading').should('be.visible');
    cy.contains('Package Bundling').should('be.visible');
    cy.contains('Testing with Jest').should('be.visible');
    cy.contains('Testing with Cypress').should('be.visible');
  });

  it('should display development workflow section', () => {
    cy.contains('Development Workflow').should('be.visible');
    cy.contains('Code Quality').should('be.visible');
    cy.contains('Git Hooks').should('be.visible');
    cy.contains('Testing').should('be.visible');
    cy.contains('Fast Development').should('be.visible');
  });

  it('should display footer with all sections', () => {
    cy.get('footer').scrollIntoView();

    cy.contains('Next.js Boilerplate').should('be.visible');
    cy.contains('Quick Links').should('be.visible');
    cy.contains('Resources').should('be.visible');
    cy.contains('Community').should('be.visible');
    cy.contains('© 2025 Next.js Boilerplate').should('be.visible');
    cy.contains('MIT License').should('be.visible');
  });
});
