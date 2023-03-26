///<reference types = "cypress" />

import MainPage from "../support/page-object/MainPage";

describe("E2E - Home Page", () => {
  it("Should open home page and check pusbutton on page - automation practice", () => {
    MainPage.visitMainPageAndPrintToConsoleLog();

    MainPage.getFindOutMorePushButton()
      .should("contain", MainPage.findOutMorePushButtonText())
      .click();

    cy.url().should("eq", MainPage.forBusinessUrl());

    MainPage.visitMainPageAndPrintToConsoleLog();

    MainPage.getJumpOnBoardPushButton()
      .should("contain", MainPage.jumpOnBoardPushButtonText())
      .click();

    cy.url().should("eq", MainPage.forCandidatesUrl());

    MainPage.visitMainPageAndPrintToConsoleLog();
  });
});
