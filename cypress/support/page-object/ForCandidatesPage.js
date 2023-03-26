class ForCandidatesPage {
  getForCandidatesFromMenu() {
    return cy.get("#menu-item-291");
  }

  getAboutUsFromMenu() {
    return cy.get("#menu-item-28");
  }

  getCarrierFromMenu() {
    return cy.get("#menu-item-27");
  }

  getContactFromMenu() {
    return cy.get("#menu-item-26");
  }

  getSolutionsForBusiness() {
    return cy.get("#menu-item-29");
  }

  findOfferForYourselfPushbutton() {
    return cy.get("h3");
  }

  soundsGoodPushButton() {
    return cy.get('div[class="mx-auto w-mobile-100"]');
  }

  forCandidatesFromMenuAll() {
    return this.getForCandidatesFromMenu().children(
      'a[href="https://alan-systems.com/pl/dla-kandydatow/"][class="nav-link active"]'
    );
  }

  aboutUsFromMenuAll() {
    return this.getAboutUsFromMenu().children(
      'a[href="https://alan-systems.com/pl/dla-kandydatow-o-nas/"][class="nav-link "]'
    );
  }

  carrierFromMenuAll() {
    return this.getCarrierFromMenu().children(
      'a[class="nav-link "][href="https://alan-systems.com/pl/dla-kandydatow-kariera/"]'
    );
  }

  contactFromMenuAll() {
    return this.getContactFromMenu().children(
      'a[class="nav-link "][href="https://alan-systems.com/pl/dla-kandydatow-kontakt/"]'
    );
  }

  solutionsForBusinessAll() {
    return this.getSolutionsForBusiness().children(
      'a[class="nav-link "][href="https://alan-systems.com/pl/dla-biznesu/"]'
    );
  }

  findOfferForYourselfPushbuttonAll() {
    return this.findOfferForYourselfPushbutton().children(
      'a[class="btn secondary text-uppercase big"][href="https://alan-systems.com/dla-kandydatow-kariera/"]'
    );
  }

  soundsGoodPushButtonAll() {
    return this.soundsGoodPushButton().children(
      'a[class="btn primary text-uppercase my-4"][href="https://alan-systems.com/dla-kandydatow-kariera/"]'
    );
  }

  forCandidatesText() {
    return "For the candidate";
  }

  aboutUsText() {
    return "O nas";
  }

  carrierText() {
    return "Kariera";
  }

  contactText() {
    return "Kontakt";
  }

  solutionsForBusinessText() {
    return "Rozwiązania do biznesu";
  }

  findOfferForYourselfPushbuttonText() {
    return "Znajdź ofertę dla siebie ";
  }

  soundsGoodPushButtonText() {
    return "Brzmi nieźle, wchodzę w to!";
  }

  visitForCandidatesAndPrintToConsoleLog() {
    return cy
      .visit("/dla-kandydatow/")
      .then(() =>
        console.log("Visit on https://alan-systems.com/pl/dla-kandydatow/")
      );
  }
}

export default new ForCandidatesPage();
