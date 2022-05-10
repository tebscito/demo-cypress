import selectors from '../selectors'

class Character {

    locator = {
        card: () => cy.get('.card'),
        addItem: () => cy.get('.button.add-item.green'),
        popupInputText: () => cy.get('.popup-content input[type="text"]'),
        popupLocationSelect: () => cy.get('.popup-content select'),
        popupAliveCheck: () => cy.get('.popup-content input[type="checkbox"]'),
        popupSubmitButton: () => cy.get('.popup-content button[type="submit"]'),
        successAlert: () => cy.get('div [role="alert"]'),
        characterSearchInputText: () => cy.get('section form input[type="text"]'),
        characterSubmitButton: () => cy.get('section form button[type="submit"]'),
        cardRowText: () => cy.get('.card .card-row.text span'),
        cardRowLabel: () => cy.get('.bool.true'),
        deleteCard: () => cy.get('button[title="Delete"]'),
        cardNotFound: () => cy.get('.app-error')
    }

    wait(millisec) { cy.wait(millisec) }

    visitCharacters(url) {
        cy.visit(url);
    }

    fillCharacter(image, name, real_Name, current_Location) {
        cy.log('Fill character card form and submit')
    cy
        .get(selectors.POPUP_INPUT_TEXT).eq(0).type(image)
        .get(selectors.POPUP_INPUT_TEXT).eq(1).type(name)
        .get(selectors.POPUP_INPUT_TEXT).eq(2).type(real_Name)
        .get(selectors.POPUP_LOCATION_SELECT).select(current_Location)
        .get(selectors.POPUP_ALIVE_CHECK).check()
        .get(selectors.POPUP_SUMBIT_BUTTON).click()
    }

    waitingAllCharacters() {
        return cy.intercept('GET', '**/character?search*').as('getChar')
    }

    waitGetChar() {
        cy.wait('@getChar')
    }
}

export default Character;