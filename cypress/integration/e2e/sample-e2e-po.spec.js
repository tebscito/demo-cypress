import Character from '../../support/page-object/Character';
import card from '../../fixtures/card.json'

describe('Example E2E Test', () => {
    let character = new Character();

    before(() => {
        character.visitCharacters('https://dsternlicht.github.io/RESTool/#/characters?search=');
    })

    it('Example E2E Test 1 - Create new Character Card', () => {
        character.locator.addItem().click()
        character.fillCharacter(card.image, card.name, card.real_name, card.current_location) // p
        character.locator.successAlert().should(($el) => {
            expect($el).to.have.text('Great Success!')
        })
        character.locator.successAlert().should(($el) => {
            expect($el).not.to.exist
        })
    })

    it('Example E2E Test 2 - Search an Existing Character', () => {
        character.wait(3000)
        character.waitingAllCharacters() //p
        character.locator.characterSearchInputText().type(card.name)
        character.locator.characterSubmitButton().click()
        character.waitGetChar()
        character.locator.cardRowText().should(($el) => {
            expect($el.eq(1)).to.have.text(card.name)
            expect($el.eq(2)).to.have.text(card.real_name)
            expect($el.eq(3)).to.have.text(card.current_location)
        })
        character.locator.cardRowLabel().should(($el) => {
            expect($el).to.be.visible
        })
    })

    it('Example E2E Test 3 - Search and Delet a Character', () => {
        character.wait(3000)
        character.waitingAllCharacters() //p 
        character.locator.characterSearchInputText().clear().type(card.name)
        character.locator.characterSubmitButton().click()
        character.waitGetChar()
        character.locator.card().should('be.visible')
        character.locator.deleteCard().click()
        character.locator.cardNotFound().should(($el) => {
            expect($el).to.have.text('Nothing to see here. Result is empty.')
        })
    })

})
