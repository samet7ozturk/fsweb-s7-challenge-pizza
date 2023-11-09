describe("User Log in Validation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("go to orderpage", () => {
    cy.get('[data-cy="orderpage-button"]').click();
  });
});
