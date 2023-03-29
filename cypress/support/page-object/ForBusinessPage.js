class ForBusinessPage {
  //TO DO

  getForBusinessFromMenu() {
    return cy.get("#menu-item-290");
  }

  forBusinessFromMenuAll() {
    return this.getForBusinessFromMenu().children(
      'a[href="https://alan-systems.com/pl/dla-biznesu/"][class="nav-link active"]'
    );
  }

  forBusinessUrl() {
    return "https://alan-systems.com/pl/dla-biznesu/";
  }

  forBusinessText() {
    return "Dla biznesu";
  }

  getAboutUsFromMenu() {
    return cy.get("#menu-item-286");
  }

  aboutUsFromMenuAll() {
    return this.getAboutUs().children(
      'a[href="https://alan-systems.com/pl/dla-biznesu-o-nas/"][class="nav-link "]'
    );
  }

  aboutUsUrl() {
    return "https://alan-systems.com/pl/dla-biznesu-o-nas/";
  }

  aboutUsText() {
    return "O nas";
  }

  getOfferFromMenu() {
    return cy.get("#menu-item-331");
  }

  offerFromMenuAll() {
    return this.offerFromMenu().children(
      'a[class="nav-link "][href="https://alan-systems.com/pl/dla-biznesu-oferta/"]'
    );
  }

  offerUrl() {
    return "https://alan-systems.com/pl/dla-biznesu-oferta/";
  }

  getContactFromMenu() {
    return cy.get("#menu-item-285");
  }

  contactFromMenuAll() {
    return this.getContactFromMenu().children(
      'a[class="nav-link "][href="https://alan-systems.com/pl/dla-biznesu-kontakt/"]'
    );
  }

  contactUrl() {
    return "https://alan-systems.com/pl/dla-biznesu-kontakt/";
  }

  contactText() {
    return "Kontakt";
  }

  getCarrierFromMenu() {
    return cy.get("#menu-item-287");
  }

  carrierFromMenuAll() {
    return this.getCarrierFromMenu().children(
      'a[class="nav-link "][href="https://alan-systems.com/pl/dla-kandydatow/"]'
    );
  }

  visitOnMainPage() {
    return cy
      .visit("/dla-biznesu/")
      .then(() =>
        console.log("Visit on https://alan-systems.com/pl/dla-biznesu/")
      );
  }
}

export default new ForBusinessPage();
