class ForCandidatesPage {
  visitOnMainPage() {
    return cy
      .visit("/dla-kandydatow/")
      .then(() =>
        console.log("Visit on https://alan-systems.com/pl/dla-kandydatow/")
      );
  }
}

export default new ForCandidates();
