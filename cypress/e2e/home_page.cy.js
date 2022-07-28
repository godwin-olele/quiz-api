describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit('/');
    cy.viewport('macbook-13');
  });
});
