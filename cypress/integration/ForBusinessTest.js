///<reference types = "cypress" />

import ForBusinessPage from "../support/page-object/ForBusinessPage";

describe("E2E - For Business Page", () => {
  it("Should open 'For Business page' and check pusbutton on page", () => {
    ForBusinessPage.visitOnMainPage();

    cy.wait(2000);

    //1
    ForBusinessPage.forBusinessFromMenuAll()
      .should("contain", ForBusinessPage.forBusinessText())
      .click({
        force: true,
      });
    cy.url().should("eq", ForBusinessPage.forBusinessUrl());
    ForBusinessPage.visitOnMainPage();

    //2
    ForBusinessPage.aboutUsFromMenuAll()
      .should("contain", ForBusinessPage.aboutUsFromMenuText())
      .click({
        force: true,
      });

    cy.url().should("eq", ForBusinessPage.aboutUsFromMenuUrl());
    ForBusinessPage.visitOnMainPage();

    //3
    ForBusinessPage.offerFromMenuAll()
      .should("contain", ForBusinessPage.offerFromMenuText())
      .click();

    cy.url().should("eq", ForBusinessPage.offerFromMenuUrl());
    ForBusinessPage.visitOnMainPage();

    //4
    ForBusinessPage.contactFromMenuAll()
      .should("contain", ForBusinessPage.contactFromMenuText())
      .click();

    cy.url().should("eq", ForBusinessPage.contactFromMenuUrl());
    ForBusinessPage.visitOnMainPage();

    //5
    ForBusinessPage.carrierFromMenuAll()
      .should("contain", ForBusinessPage.carrierFromMenuText())
      .click();

    cy.url().should("eq", ForBusinessPage.carrierFromMenuUrl());
    ForBusinessPage.visitOnMainPage();

    //6
    ForBusinessPage.knowOfferAll()
      .should("contain", ForBusinessPage.knowOfferText())
      .click({
        force: true,
      });

    cy.url().should("eq", ForBusinessPage.knowOfferUrl());
    ForBusinessPage.visitOnMainPage();

    //7
    ForBusinessPage.getReadOn()
      .should("contain", ForBusinessPage.readOnText())
      .click();

    cy.url().should("eq", ForBusinessPage.readOnUrl());
    ForBusinessPage.visitOnMainPage();
  });

  it("check menu (footer)", () => {
    //1
    cy.wait(2000);
    ForBusinessPage.getForBusinessFooter()
      .last()
      .should("contain", ForBusinessPage.forBusinessFooterText())
      .click();
    cy.url().should("eq", ForBusinessPage.forBusinessFooterUrl());

    ForBusinessPage.visitOnMainPage();

    //2
    cy.wait(2000);
    ForBusinessPage.aboutUsFooterAll()
      .last()
      .should("contain", ForBusinessPage.aboutUsFooterText())
      .click();
    cy.url().should("eq", ForBusinessPage.aboutUsFooterUrl());
    ForBusinessPage.visitOnMainPage();

    //3
    cy.wait(2000);
    ForBusinessPage.offerFooterAll()
      .last()
      .should("contain", ForBusinessPage.offerFooterText())
      .click();
    cy.url().should("eq", ForBusinessPage.offerFooterUrl());
    ForBusinessPage.visitOnMainPage();

    //4
    cy.wait(2000);
    ForBusinessPage.contactFooterAll()
      .last()
      .should("contain", ForBusinessPage.contactFooterText())
      .click();
    cy.url().should("eq", ForBusinessPage.contactFooterUrl());
    ForBusinessPage.visitOnMainPage();

    //5
    cy.wait(2000);
    ForBusinessPage.carrierFooterAll()
      .last()
      .should("contain", ForBusinessPage.carrierFooterText())
      .click();
    cy.url().should("eq", ForBusinessPage.carrierFooterUrl());
    ForBusinessPage.visitOnMainPage();
  });

  it("check scrolling list", () => {
    ForBusinessPage.visitOnMainPage();

    for (let i = 0; i < 5; i++) {
      switch (i) {
        case 0: {
          cy.wait(1000);
          ForBusinessPage.colOptionAndImgAllZero().click({
            force: true,
          });

          ForBusinessPage.colTOptionTwelveAll().should(
            "contain",
            ForBusinessPage.colTOptionTwelveOneText()
          );
          break;
        }
        case 1: {
          cy.wait(1000);
          ForBusinessPage.colOptionAndImgAllOne().click({
            force: true,
          });

          cy.wait(1000);
          ForBusinessPage.colTOptionTwelveAll().should(
            "contain",
            ForBusinessPage.colTOptionTwelveTwoText()
          );
          break;
        }
        case 2: {
          cy.wait(1000);
          ForBusinessPage.colOptionAndImgAllTwo().click({
            force: true,
          });

          ForBusinessPage.colTOptionTwelveAll().should(
            "contain",
            ForBusinessPage.colTOptionTwelveThreeText()
          );

          break;
        }
        case 3: {
          cy.wait(1000);
          ForBusinessPage.colOptionAndImgAllThree().click({
            force: true,
          });

          ForBusinessPage.colTOptionTwelveAll().should(
            "contain",
            ForBusinessPage.colTOptionTwelveFourText()
          );

          break;
        }
        case 4: {
          cy.wait(1000);
          ForBusinessPage.colOptionAndImgAllFour().click({
            force: true,
          });

          ForBusinessPage.colTOptionTwelveAll().should(
            "contain",
            ForBusinessPage.colTOptionTwelveFiveText()
          );
          break;
        }
      }
    }
  });
});
