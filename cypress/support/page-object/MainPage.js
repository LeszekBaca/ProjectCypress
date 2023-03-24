class MainPage {
  //TO DO
  get findOutMorePushButton() {
    return cy.get(
      'a[class="btn secondary text-uppercase big"][href="/dla-biznesu/"]'
    );
  }

  get jumpOnBoardPushButton() {
    return cy.get(
      'a[class="btn secondary text-uppercase big"][href="/dla-kandydatow/"]'
    );
  }

  findOutMorePushButtonText() {
    return "DOWIEDZ SIĘ WIĘCEJ";
  }

  jumpOnBoardPushButtonText() {
    return "WSKAKUJ NA POKŁAD";
  }

  forBusinessUrl() {
    return "https://alan-systems.com/pl/dla-biznesu/";
  }

  forCandidates() {
    return "https://alan-systems.com/pl/dla-kandydatow/";
  }

  visitOnMainPage() {
    return cy
      .visit("/")
      .then(() => console.log("Visit on https://alan-systems.com/pl/"));
  }
}

export default new MainPage();
