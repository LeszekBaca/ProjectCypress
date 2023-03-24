///<reference types = "cypress" />

// To DO:
describe("E2E - For Business Page", () => {
    it("Should open 'For Business page' and check pusbutton on page - automation practice", () => {
        // 1
        cy.visit("/dla-biznesu/").then(() =>
            console.log("Visit on https://alan-systems.com/pl/dla-biznesu/"));

        cy.wait(2000);
        cy.get("#menu-item-286")
        .children(
            'a[href="https://alan-systems.com/pl/dla-biznesu-o-nas/"][class="nav-link "]')
        .should("contain", "O nas")
        .click({
            force: true
        });

        cy.url().should("eq", "https://alan-systems.com/pl/dla-biznesu-o-nas/");

        cy.visit("/dla-biznesu/").then(() =>
            console.log("Visit on https://alan-systems.com/pl/dla-biznesu/"));

        // 2
        cy.get("#menu-item-331")
        .children(
            'a[class="nav-link "][href="https://alan-systems.com/pl/dla-biznesu-oferta/"]')
        //.first()
        .should("contain", "Oferta")
        .click();

        cy.url().should("eq", "https://alan-systems.com/pl/dla-biznesu-oferta/");

        cy.visit("/dla-biznesu/").then(() =>
            console.log("Visit on https://alan-systems.com/pl/dla-biznesu/"));

        //3
        cy.get("#menu-item-285")
        .children(
            'a[class="nav-link "][href="https://alan-systems.com/pl/dla-biznesu-kontakt/"]')
        //.first()
        .should("contain", "Kontakt")
        .click();

        cy.url().should("eq", "https://alan-systems.com/pl/dla-biznesu-kontakt/");

        cy.visit("/dla-biznesu/").then(() =>
            console.log("Visit on https://alan-systems.com/pl/dla-biznesu/"));

        //4
        cy.get("#menu-item-287")
        .children(
            'a[class="nav-link "][href="https://alan-systems.com/pl/dla-kandydatow/"]')
        // .first()
        .should("contain", "Kariera w ALAN Systems")
        .click();

        cy.url().should("eq", "https://alan-systems.com/pl/dla-kandydatow/");

        cy.visit("/dla-biznesu/").then(() =>
            console.log("Visit on https://alan-systems.com/pl/dla-biznesu/"));

        //5
        cy.get("h3")
        .children(
            'a[class="btn secondary text-uppercase big"][href="https://alan-systems.com/dla-biznesu-oferta/"]')
        .should("contain", "Poznaj ofertę ")
        .click({
            force: true
        });

        cy.url().should("eq", "https://alan-systems.com/pl/dla-biznesu-oferta/");

        cy.visit("/dla-biznesu/").then(() =>
            console.log("Visit on https://alan-systems.com/pl/dla-biznesu/"));

        //6
        cy.get(
            'a[class="btn primary text-uppercase my-4"][href="/dla-biznesu-o-nas/"]')
        .should("contain", "Czytaj dalej")
        .click();

        //cy.wait(2000);
        cy.url().should("eq", "https://alan-systems.com/pl/dla-biznesu-o-nas/");

        cy.visit("/dla-biznesu/").then(() =>
            console.log("Visit on https://alan-systems.com/pl/dla-biznesu/"));
        //7

        cy.wait(2000);
        cy.get("#menu-item-290")
        .children(
            'a[href="https://alan-systems.com/pl/dla-biznesu/"][class="nav-link active"]')
        .should("contain", "Dla biznesu")
        .click();

        cy.url().should("eq", "https://alan-systems.com/pl/dla-biznesu/");

        cy.visit("/dla-biznesu/").then(() =>
            console.log("Visit on https://alan-systems.com/pl/dla-biznesu/"));

        //menu-item-290
        //<a href="https://alan-systems.com/pl/dla-biznesu/" class="nav-link active">Dla biznesu</a>
    });

    it("check menu (footer)", () => {
        //1
        cy.wait(2000);
        cy.get(
            'a[class="nav-link active"][href="https://alan-systems.com/pl/dla-biznesu/"]')
        .last()
        .should("contain", "Dla biznesu")
        .click();

        //cy.wait(2000);
        cy.url().should("eq", "https://alan-systems.com/pl/dla-biznesu/");

        cy.visit("/dla-biznesu/").then(() =>
            console.log("Visit on https://alan-systems.com/pl/dla-biznesu/"));
        //2

        cy.wait(2000);
        cy.get(
            'li[class="menu-item menu-item-type-post_type menu-item-object-page nav-item nav-item-286"]')
        .children(
            'a[class="nav-link "][href="https://alan-systems.com/pl/dla-biznesu-o-nas/"]')
        .last()
        .should("contain", "O nas")
        .click();

        //cy.wait(2000);
        cy.url().should("eq", "https://alan-systems.com/pl/dla-biznesu-o-nas/");

        cy.visit("/dla-biznesu/").then(() =>
            console.log("Visit on https://alan-systems.com/pl/dla-biznesu/"));

        //3
        cy.wait(2000);
        cy.get(
            'li[class="menu-item menu-item-type-post_type menu-item-object-page nav-item nav-item-331"]')
        .children(
            'a[class="nav-link "][href="https://alan-systems.com/pl/dla-biznesu-oferta/"]')
        .last()
        .should("contain", "Oferta")
        .click();

        cy.url().should("eq", "https://alan-systems.com/pl/dla-biznesu-oferta/");

        cy.visit("/dla-biznesu/").then(() =>
            console.log("Visit on https://alan-systems.com/pl/dla-biznesu/"));
        //4

        cy.wait(2000);
        cy.get(
            'li[class="menu-item menu-item-type-post_type menu-item-object-page nav-item nav-item-285"]')
        .children(
            'a[class="nav-link "][href="https://alan-systems.com/pl/dla-biznesu-kontakt/"]')
        .last()
        .should("contain", "Kontakt")
        .click();

        cy.url().should("eq", "https://alan-systems.com/pl/dla-biznesu-kontakt/");

        cy.visit("/dla-biznesu/").then(() =>
            console.log("Visit on https://alan-systems.com/pl/dla-biznesu/"));
        //5

        cy.wait(2000);
        cy.get(
            'li[class="menu-item menu-item-type-post_type menu-item-object-page nav-item nav-item-287"]')
        .children(
            'a[class="nav-link "][href="https://alan-systems.com/pl/dla-kandydatow/"]')
        .last()
        .should("contain", "Kariera w ALAN Systems")
        .click();

        cy.url().should("eq", "https://alan-systems.com/pl/dla-kandydatow/");

        cy.visit("/dla-biznesu/").then(() =>
            console.log("Visit on https://alan-systems.com/pl/dla-biznesu/"));
    });

    it("check scrolling list", () => {
        for (let i = 0; i < 5; i++) {
            //cy.wait("1000");
            switch (i) {
            case 0: {
                    cy.wait(1000);
                    cy.get('div[class="img"]')
                    .children(
                        'img[src="https://alan-systems.com/shared/uploads/clients/tele2.png"]')
                    .last()
                    //.should("contain", "Kariera w ALAN Systems")
                    .click({
                        force: true
                    });
                    break;
                }
            case 1: {
                    cy.wait(1000);
                    cy.get('div[class="img"]')
                    .children(
                        'img[src="https://alan-systems.com/shared/uploads/clients/gvc-logo.png"]')
                    .last()
                    //.should("contain", "Kariera w ALAN Systems")
                    .click({
                        force: true
                    });
                    break;
                }
            case 2: {
                    cy.wait(1000);
                    cy.get('div[class="img"]')
                    .children(
                        'img[src="https://alan-systems.com/shared/uploads/clients/cbg-white.png"]')
                    .last()
                    //.should("contain", "Kariera w ALAN Systems")
                    .click({
                        force: true
                    });
                    break;
                }
            case 3: {
                    cy.wait(1000);
                    cy.get('div[class="img"]')
                    .children(
                        'img[src="https://alan-systems.com/shared/uploads/clients/i2.png"]')
                    .last()
                    //.should("contain", "Kariera w ALAN Systems")
                    .click({
                        force: true
                    });
                    break;
                }
            case 4: {
                    cy.wait(1000);
                    cy.get('div[class="img"]')
                    .children(
                        'img[src="https://alan-systems.com/shared/uploads/clients/gfk-color.png"]')
                    .last()
                    //.should("contain", "Kariera w ALAN Systems")
                    .click({
                        force: true
                    });
                    break;
                }
            }
        }
    });
});


