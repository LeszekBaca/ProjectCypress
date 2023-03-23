///<reference types = "cypress" />

describe("E2E - Home Page", () => {
  it("Should open home page and check pusbutton on page - automation practice", () => {
    cy.visit("/").then(() =>
      console.log("Visit on https://alan-systems.com/pl/")
    );

    cy.get('a[class="btn secondary text-uppercase big"][href="/dla-biznesu/"]')
      .should("contain", "DOWIEDZ SIĘ WIĘCEJ")
      .click();

    cy.url().should("eq", "https://alan-systems.com/pl/dla-biznesu/");
    cy.visit("/").then(() =>
      console.log("Visit on https://alan-systems.com/pl/")
    );
    cy.get(
      'a[class="btn secondary text-uppercase big"][href="/dla-kandydatow/"]'
    )
      .should("contain", "WSKAKUJ NA POKŁAD")
      .click();
    cy.url().should("eq", "https://alan-systems.com/pl/dla-kandydatow/");

    cy.visit("/").then(() =>
      console.log("Visit on https://alan-systems.com/pl/")
    );
  });
});
