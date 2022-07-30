describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit('/');
    cy.viewport('iphone-5');
  });
});
