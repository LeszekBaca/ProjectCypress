class ForBusinessPage {
  //TO DO
  visitOnMainPage() {
    return cy
      .visit("/dla-biznesu/")
      .then(() =>
        console.log("Visit on https://alan-systems.com/pl/dla-biznesu/")
      );
  }
}

export default new ForBusiness();
