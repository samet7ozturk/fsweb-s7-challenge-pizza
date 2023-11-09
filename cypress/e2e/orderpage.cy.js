describe("User Log in Validation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="orderpage-button"]').click();
  });

  it("orderpage submit 1", () => {
    cy.get('[data-cy="orta"]').click();
    cy.get('[data-cy="select-dough"]').select("orta");
    cy.get('[data-cy="Domates"]').click();
    cy.get('[data-cy="Sucuk"]').click();
    cy.get('[data-cy="Sarımsak"]').click();
    cy.get('[data-cy="Sosis"]').click();
    cy.get('[data-cy="submit-button"]')
      .click()
      .then(() => {
        cy.get('[data-cy="success-page"]').should(
          "have.text",
          "TEBRİKLER! SİPARİŞİNİZ ALINDI!"
        );
      });
  });

  it("orderpage submit 2", () => {
    cy.get('[data-cy="orta"]').click();
    cy.get('[data-cy="select-dough"]').select("orta");
    cy.get('[data-cy="Soğan"]').click();
    cy.get('[data-cy="Mısır"]').click();
    cy.get('[data-cy="Sosis"]').click();
    cy.get('[data-cy="Ananas"]').click();
    cy.get('[data-cy="Sarımsak"]').click();
    cy.get('[data-cy="Biber"]').click();
    cy.get('[data-cy="submit-button"]')
      .click()
      .then(() => {
        cy.get('[data-cy="success-page"]').should(
          "have.text",
          "TEBRİKLER! SİPARİŞİNİZ ALINDI!"
        );
      });
  });
});
