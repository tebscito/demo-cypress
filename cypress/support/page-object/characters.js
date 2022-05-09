import selectors from '../../support/selectors'
import card from '../../fixtures/card.json'

class characters {

    wait(millisec) { cy.wait(millisec) }

    visitCharacters() {
        cy.visit('https://dsternlicht.github.io/RESTool/#/characters?search=');
    }
    addItemButton() {
        return cy.get(selectors.ADD_ITEM_BUTTON).click()
    }

    fillCharacter() {
        return cy.fillFormCharacter(card.image, card.name, card.real_name, card.current_location)
    }

    getSelector(selector) {
        cy.get(selector)
    }

    typeName() {
        return cy.get(selectors.CHARACTER_SEARCH_INPUT_TEXT).type(card.name)
    }

    clickOnCharacterSubmitButton() {
        return cy.get(selectors.CHARACTER_SUBMIT_BUTTON).click()
    }

    waitingAllCharacters() {
        return cy.intercept('GET', '**/character?search*').as('getChar')
    }

    clearPreviousSearchAndWrite() {
        return cy.get(selectors.CHARACTER_SEARCH_INPUT_TEXT).clear().type(card.name)
    }

    clickOnSearchSubmitButton() {
        return cy.get(selectors.CHARACTER_SUBMIT_BUTTON).click()
    }

    deleteCard() {
        return cy.get(selectors.DELETE_CARD).click()
    }

    waitGetChar() {
        cy.wait('@getChar')
    }
}

export default characters;