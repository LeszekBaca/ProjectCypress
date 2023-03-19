///<reference types = "cypress" />

describe("E2E - Home Page", () => {
  it("Should open home page - automation practice", () => {
    cy.visit("/");

    // cy.get('h3[class="mt-auto d-none d-xl-block"]')
    // .children('a[href="/dla-biznesu/"]')

    cy.get('a[class="btn secondary text-uppercase big"][href="/dla-biznesu/"]')
      .should("contain", "DOWIEDZ SIĘ WIĘCEJ")
      .click();
    // .children('a[href="/dla-biznesu/"]')
    // .click();

    cy.visit("/");

    cy.get(
      'a[class="btn secondary text-uppercase big"][href="/dla-kandydatow/"]'
    )
      .should("contain", "WSKAKUJ NA POKŁAD")
      .click();

    cy.visit("/");
  });
});

//btn secondary text-uppercase big
//.children[href="/dla-biznesu/"]').click;
