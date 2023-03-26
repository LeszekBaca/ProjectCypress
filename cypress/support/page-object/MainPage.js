class MainPage {
  getFindOutMorePushButton() {
    return cy.get(
      'a[class="btn secondary text-uppercase big"][href="/dla-biznesu/"]'
    );
  }

  getJumpOnBoardPushButton() {
    return cy.get(
      'a[class="btn secondary text-uppercase big"][href="/dla-kandydatow/"]'
    );
  }

  visitMainPageAndPrintToConsoleLog() {
    return cy
      .visit("/")
      .then(() => console.log("Visit on https://alan-systems.com/pl/"));
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

  forCandidatesUrl() {
    return "https://alan-systems.com/pl/dla-kandydatow/";
  }
}

export default new MainPage();
