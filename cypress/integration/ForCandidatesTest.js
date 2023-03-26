///<reference types = "cypress" />

import ForCandidatesPage from "../support/page-object/ForCandidatesPage";

// To DO:
describe("E2E - For Candidates Page", () => {
  it("Should open 'For candidate' page and check pusbutton on page", () => {
    // 1
    // cy.visit("/dla-kandydatow/").then(() =>
    //   console.log("Visit on https://alan-systems.com/pl/dla-kandydatow/")
    // );
    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();
    //0
    cy.wait(2000);
    // cy.get("#menu-item-291")
    //   .children(
    //     'a[href="https://alan-systems.com/pl/dla-kandydatow/"][class="nav-link active"]'
    //   )
    ForCandidatesPage.forCandidatesFromMenuAll()
      .should("contain", "Dla kandydata")
      .click({
        force: true,
      });

    cy.url().should("eq", "https://alan-systems.com/pl/dla-kandydatow/");

    // cy.visit("/dla-kandydatow/").then(() =>
    //   console.log("Visit on https://alan-systems.com/pl/dla-kandydatow/")
    // );

    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    //1
    cy.wait(2000);
    // cy.get("#menu-item-28")
    //   .children(
    //     'a[href="https://alan-systems.com/pl/dla-kandydatow-o-nas/"][class="nav-link "]'
    //   )
    ForCandidatesPage.aboutUsFromMenuAll().should("contain", "O nas").click({
      force: true,
    });

    cy.url().should("eq", "https://alan-systems.com/pl/dla-kandydatow-o-nas/");

    // cy.visit("/dla-kandydatow/").then(() =>
    //   console.log("Visit on https://alan-systems.com/pl/dla-kandydatow/")
    // );

    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    // 2
    // cy.get("#menu-item-27")
    //   .children(
    //     'a[class="nav-link "][href="https://alan-systems.com/pl/dla-kandydatow-kariera/"]'
    //   )
    //.first()
    ForCandidatesPage.carrierFromMenuAll().should("contain", "Kariera").click();

    cy.url().should(
      "eq",
      "https://alan-systems.com/pl/dla-kandydatow-kariera/"
    );

    // cy.visit("/dla-kandydatow/").then(() =>
    //   console.log("Visit on https://alan-systems.com/pl/dla-kandydatow/")
    // );

    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    //3
    // cy.get("#menu-item-26")
    //   .children(
    //     'a[class="nav-link "][href="https://alan-systems.com/pl/dla-kandydatow-kontakt/"]'
    //   )
    //.first()
    ForCandidatesPage.contactFromMenuAll().should("contain", "Kontakt").click();

    cy.url().should(
      "eq",
      "https://alan-systems.com/pl/dla-kandydatow-kontakt/"
    );

    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    // cy.visit("/dla-kandydatow/").then(() =>
    //   console.log("Visit on https://alan-systems.com/pl/dla-kandydatow/")
    // );

    //4
    // cy.get("#menu-item-29")
    //   .children(
    //     'a[class="nav-link "][href="https://alan-systems.com/pl/dla-biznesu/"]'
    //   )
    //.first()
    ForCandidatesPage.solutionsForBusinessAll()
      .should("contain", "Rozwiązania do biznesu")
      .click();

    cy.url().should("eq", "https://alan-systems.com/pl/dla-biznesu/");

    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    // cy.visit("/dla-kandydatow/").then(() =>
    //   console.log("Visit on https://alan-systems.com/pl/dla-kandydatow/")
    // );

    //5
    // cy.get("h3")
    //   .children(
    //     'a[class="btn secondary text-uppercase big"][href="https://alan-systems.com/dla-kandydatow-kariera/"]'
    //   )
    //.first()
    ForCandidatesPage.findOfferForYourselfPushbuttonAll()
      .should("contain", "Znajdź ofertę dla siebie ")
      .click({ force: true });

    cy.url().should(
      "eq",
      "https://alan-systems.com/pl/dla-kandydatow-kariera/"
    );

    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    // cy.visit("/dla-kandydatow/").then(() =>
    //   console.log("Visit on https://alan-systems.com/pl/dla-kandydatow/")
    // );

    //6
    // cy.get('div[class="mx-auto w-mobile-100"]')
    //   .children(
    //     'a[class="btn primary text-uppercase my-4"][href="https://alan-systems.com/dla-kandydatow-kariera/"]'
    //   )
    //.first()
    ForCandidatesPage.soundsGoodPushButtonAll()
      .should("contain", "Brzmi nieźle, wchodzę w to!")
      .click({ force: true });
    //cy.wait(2000);
    cy.url().should(
      "eq",
      "https://alan-systems.com/pl/dla-kandydatow-kariera/"
    );

    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    // cy.visit("/dla-kandydatow/").then(() =>
    //   console.log("Visit on https://alan-systems.com/pl/dla-kandydatow/")
    // );
  });

  it("check menu (footer)", () => {
    //1
    cy.wait(2000);
    cy.get(
      'a[class="nav-link active"][href="https://alan-systems.com/pl/dla-kandydatow/"]'
    )
      .last()
      .should("contain", "Dla kandydata")
      .click();

    //cy.wait(2000);
    cy.url().should("eq", "https://alan-systems.com/pl/dla-kandydatow/");

    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    // cy.visit("/dla-kandydatow/").then(() =>
    //   console.log("Visit on https://alan-systems.com/pl/dla-kandydatow/")
    // );
    //2

    cy.wait(2000);
    cy.get(
      'li[class="menu-item menu-item-type-post_type menu-item-object-page nav-item nav-item-28"]'
    )
      .children(
        'a[class="nav-link "][href="https://alan-systems.com/pl/dla-kandydatow-o-nas/"]'
      )
      .last()
      .should("contain", "O nas")
      .click();

    //cy.wait(2000);
    cy.url().should("eq", "https://alan-systems.com/pl/dla-kandydatow-o-nas/");

    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    // cy.visit("/dla-kandydatow/").then(() =>
    //   console.log("Visit on https://alan-systems.com/pl/dla-kandydatow/")
    // );

    //3
    cy.wait(2000);
    cy.get(
      'li[class="menu-item menu-item-type-post_type menu-item-object-page nav-item nav-item-27"]'
    )
      .children(
        'a[class="nav-link "][href="https://alan-systems.com/pl/dla-kandydatow-kariera/"]'
      )
      .last()
      .should("contain", "Kariera")
      .click();

    cy.url().should(
      "eq",
      "https://alan-systems.com/pl/dla-kandydatow-kariera/"
    );

    // cy.visit("/dla-kandydatow/").then(() =>
    //   console.log("Visit on https://alan-systems.com/pl/dla-kandydatow/")
    // );

    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();
    //4

    cy.wait(2000);
    cy.get(
      'li[class="menu-item menu-item-type-post_type menu-item-object-page nav-item nav-item-26"]'
    )
      .children(
        'a[class="nav-link "][href="https://alan-systems.com/pl/dla-kandydatow-kontakt/"]'
      )
      .last()
      .should("contain", "Kontakt")
      .click();

    cy.url().should(
      "eq",
      "https://alan-systems.com/pl/dla-kandydatow-kontakt/"
    );

    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    // cy.visit("/dla-kandydatow/").then(() =>
    //   console.log("Visit on https://alan-systems.com/pl/dla-kandydatow/")
    // );
    //5

    cy.wait(2000);
    cy.get(
      'li[class="menu-item menu-item-type-post_type menu-item-object-page nav-item nav-item-29"]'
    )
      .children(
        'a[class="nav-link "][href="https://alan-systems.com/pl/dla-biznesu/"]'
      )
      .last()
      .should("contain", "Rozwiązania do biznesu")
      .click();

    cy.url().should("eq", "https://alan-systems.com/pl/dla-biznesu/");

    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    // cy.visit("/dla-kandydatow/").then(() =>
    //   console.log("Visit on https://alan-systems.com/pl/dla-kandydatow/")
    // );
  });
});
