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
    return this.getAboutUsFromMenu().children(
      'a[href="https://alan-systems.com/pl/dla-biznesu-o-nas/"][class="nav-link "]'
    );
  }

  aboutUsFromMenuUrl() {
    return "https://alan-systems.com/pl/dla-biznesu-o-nas/";
  }

  aboutUsFromMenuText() {
    return "O nas";
  }

  getOfferFromMenu() {
    return cy.get("#menu-item-331");
  }

  offerFromMenuAll() {
    return this.getOfferFromMenu().children(
      'a[class="nav-link "][href="https://alan-systems.com/pl/dla-biznesu-oferta/"]'
    );
  }

  offerFromMenuUrl() {
    return "https://alan-systems.com/pl/dla-biznesu-oferta/";
  }

  offerFromMenuText() {
    return "Oferta";
  }

  getContactFromMenu() {
    return cy.get("#menu-item-285");
  }

  contactFromMenuAll() {
    return this.getContactFromMenu().children(
      'a[class="nav-link "][href="https://alan-systems.com/pl/dla-biznesu-kontakt/"]'
    );
  }

  contactFromMenuUrl() {
    return "https://alan-systems.com/pl/dla-biznesu-kontakt/";
  }

  contactFromMenuText() {
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

  carrierFromMenuText() {
    return "Kariera w ALAN Systems";
  }

  carrierFromMenuUrl() {
    return "https://alan-systems.com/pl/dla-kandydatow/";
  }

  getToKnowOffer() {
    return cy.get("h3");
  }

  knowOfferAll() {
    return this.getToKnowOffer().children(
      'a[class="btn secondary text-uppercase big"][href="https://alan-systems.com/dla-biznesu-oferta/"]'
    );
  }

  knowOfferText() {
    return "Poznaj ofertę ";
  }

  knowOfferUrl() {
    return "https://alan-systems.com/pl/dla-biznesu-oferta/";
  }

  getReadOn() {
    return cy.get(
      'a[class="btn primary text-uppercase my-4"][href="/dla-biznesu-o-nas/"]'
    );
  }

  readOnText() {
    return "Czytaj dalej";
  }

  readOnUrl() {
    return "https://alan-systems.com/pl/dla-biznesu-o-nas/";
  }

  getForBusinessFooter() {
    return cy.get(
      'a[class="nav-link active"][href="https://alan-systems.com/pl/dla-biznesu/"]'
    );
  }

  forBusinessFooterText() {
    return "Dla biznesu";
  }

  forBusinessFooterUrl() {
    return "https://alan-systems.com/pl/dla-biznesu/";
  }

  getAboutUsFooter() {
    return cy.get(
      'li[class="menu-item menu-item-type-post_type menu-item-object-page nav-item nav-item-286"]'
    );
  }

  aboutUsFooterAll() {
    return this.getAboutUsFooter().children(
      'a[class="nav-link "][href="https://alan-systems.com/pl/dla-biznesu-o-nas/"]'
    );
  }

  aboutUsFooterText() {
    return "O nas";
  }

  aboutUsFooterUrl() {
    return "https://alan-systems.com/pl/dla-biznesu-o-nas/";
  }

  getOfferFooter() {
    return cy.get(
      'li[class="menu-item menu-item-type-post_type menu-item-object-page nav-item nav-item-331"]'
    );
  }

  offerFooterAll() {
    return this.getOfferFooter().children(
      'a[class="nav-link "][href="https://alan-systems.com/pl/dla-biznesu-oferta/"]'
    );
  }

  offerFooterText() {
    return "Oferta";
  }

  offerFooterUrl() {
    return "https://alan-systems.com/pl/dla-biznesu-oferta/";
  }

  getContactFooter() {
    return cy.get(
      'li[class="menu-item menu-item-type-post_type menu-item-object-page nav-item nav-item-285"]'
    );
  }
  contactFooterAll() {
    return this.getContactFooter().children(
      'a[class="nav-link "][href="https://alan-systems.com/pl/dla-biznesu-kontakt/"]'
    );
  }

  contactFooterText() {
    return "Kontakt";
  }

  contactFooterUrl() {
    return "https://alan-systems.com/pl/dla-biznesu-kontakt/";
  }

  getCarierFooter() {
    return cy.get(
      'li[class="menu-item menu-item-type-post_type menu-item-object-page nav-item nav-item-287"]'
    );
  }

  carrierFooterAll() {
    return this.getCarierFooter().children(
      'a[class="nav-link "][href="https://alan-systems.com/pl/dla-kandydatow/"]'
    );
  }

  carrierFooterText() {
    return "Kariera w ALAN Systems";
  }

  carrierFooterUrl() {
    return "https://alan-systems.com/pl/dla-kandydatow/";
  }

  colOption() {
    return cy.get('div[class="col-12"]');
  }

  colOptionAndImg() {
    return this.colOption().find('div[class="img"]');
  }

  colOptionAndImgAllZero() {
    return this.colOptionAndImg().children(
      'img[src="https://alan-systems.com/shared/uploads/clients/tele2.png"]'
    );
  }

  colOptionAndImgAllOne() {
    return this.colOptionAndImg().children(
      'img[src="https://alan-systems.com/shared/uploads/clients/gvc-logo.png"]'
    );
  }
  colOptionAndImgAllTwo() {
    return this.colOptionAndImg().children(
      'img[src="https://alan-systems.com/shared/uploads/clients/cbg-white.png"]'
    );
  }

  colOptionAndImgAllThree() {
    return this.colOptionAndImg().children(
      'img[src="https://alan-systems.com/shared/uploads/clients/i2.png"]'
    );
  }

  colOptionAndImgAllFour() {
    return this.colOptionAndImg().children(
      'img[src="https://alan-systems.com/shared/uploads/clients/gfk-color.png"]'
    );
  }

  colTOptionTwelve() {
    return cy.get('div[class="col-12 col-lg-10 col-xl-8 text"]');
  }

  colTOptionTwelveAll() {
    return this.colTOptionTwelve().find('div[class="mt-3 small"]');
  }

  colTOptionTwelveOneText() {
    return "Hans Gruber, Head of Application Management, Tele2,";
  }

  colTOptionTwelveTwoText() {
    return "Robert Wilfingseder, Procurement Manager";
  }

  colTOptionTwelveThreeText() {
    return "Urszula Lorente, Pełnomocnik Spółki";
  }

  colTOptionTwelveFourText() {
    return "Natalia Szwed, v-ce Dyrektor";
  }

  colTOptionTwelveFiveText() {
    return "Monika Macura, Senior HR Specialist";
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
