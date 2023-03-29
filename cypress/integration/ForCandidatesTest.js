///<reference types = "cypress" />

import ForCandidatesPage from "../support/page-object/ForCandidatesPage";

describe("E2E - For Candidates Page", () => {
  it("Should open 'For candidate' page and check pusbutton on page", () => {
    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();
    //0
    cy.wait(2000);
    ForCandidatesPage.forCandidatesFromMenuAll()
      .should("contain", ForCandidatesPage.forCandidatesText())
      .click({
        force: true,
      });
    cy.url().should("eq", ForCandidatesPage.forCandidatesUrl());
    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    //1
    cy.wait(2000);
    ForCandidatesPage.aboutUsFromMenuAll()
      .should("contain", ForCandidatesPage.aboutUsText())
      .click({
        force: true,
      });
    cy.url().should("eq", ForCandidatesPage.aboutUsUrl());
    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    // 2
    ForCandidatesPage.carrierFromMenuAll()
      .should("contain", ForCandidatesPage.carrierText())
      .click();
    cy.url().should("eq", ForCandidatesPage.carrierUrl());
    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    //3
    ForCandidatesPage.contactFromMenuAll()
      .should("contain", ForCandidatesPage.contactText())
      .click();
    cy.url().should("eq", ForCandidatesPage.contactUrl());
    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    //4
    ForCandidatesPage.solutionsForBusinessAll()
      .should("contain", ForCandidatesPage.solutionsForBusinessText())
      .click();
    cy.url().should("eq", ForCandidatesPage.solutionsForBusinessUrl());
    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    //5
    ForCandidatesPage.findOfferForYourselfPushbuttonAll()
      .should("contain", ForCandidatesPage.findOfferForYourselfPushbuttonText())
      .click({ force: true });
    cy.url().should(
      "eq",
      ForCandidatesPage.findOfferForYourselfPushbuttonUrl()
    );
    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    //6
    ForCandidatesPage.soundsGoodPushButtonAll()
      .should("contain", ForCandidatesPage.soundsGoodPushButtonText())
      .click({ force: true });
    cy.url().should("eq", ForCandidatesPage.soundsGoodPushButtonUrl());
    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();
  });

  it("check menu (footer)", () => {
    //1
    cy.wait(2000);
    ForCandidatesPage.getForCandidatesFromFooter()
      .last()
      .should("contain", ForCandidatesPage.forCandidatesText())
      .click();
    cy.url().should("eq", ForCandidatesPage.forCandidatesUrl());
    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    //2
    cy.wait(2000);
    ForCandidatesPage.aboutUsFromFooterAll()
      .last()
      .should("contain", ForCandidatesPage.aboutUsText())
      .click();
    cy.url().should("eq", ForCandidatesPage.aboutUsUrl());
    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    //3
    cy.wait(2000);
    ForCandidatesPage.carrierFromFooterAll()
      .last()
      .should("contain", ForCandidatesPage.carrierText())
      .click();

    cy.url().should("eq", ForCandidatesPage.carrierUrl());
    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    //4
    cy.wait(2000);
    ForCandidatesPage.contactFromFooterAll()
      .last()
      .should("contain", ForCandidatesPage.contactText())
      .click();
    cy.url().should("eq", ForCandidatesPage.contactUrl());
    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();

    //5
    cy.wait(2000);
    ForCandidatesPage.solutionsForFooterAll()
      .last()
      .should("contain", ForCandidatesPage.solutionsForBusinessText())
      .click();
    cy.url().should("eq", ForCandidatesPage.solutionsForBusinessUrl());
    ForCandidatesPage.visitForCandidatesAndPrintToConsoleLog();
  });
});
