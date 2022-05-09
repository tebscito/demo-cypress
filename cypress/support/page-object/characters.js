import selectors from '../../support/selectors'
import card from '../../fixtures/card.json'

class characters {
    visitCharacters() {
        cy.visit('https://dsternlicht.github.io/RESTool/#/characters?search='); // Se visita la pagina antes de cada test para que un test no dependa de otro 
    }

    addCharacter() {
        return cy.get(selectors.ADD_ITEM_BUTTON).click()
    }

    fillCharacter() {
        return cy.fillFormCharacter(card.image, card.name, card.real_name, card.current_location)
    }

    alertAppears() {
        return cy.get(selectors.SUCCESS_ALERT).should(($el) => {
            expect($el).to.have.text('Great Success!')
        })
    }

    alertDisappears() {
        return cy.get(selectors.SUCCESS_ALERT).should(($el) => {
            expect($el).not.to.exist
        })
    }
}
export default characters;