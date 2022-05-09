import characters from '../../support/page-object/characters';
import card from '../../fixtures/card.json'
import selectors from '../../support/selectors'
// Ruta desde este archivo hasta el archivo donde tengo mis clases (sin la extension .js)

describe('Example E2E Test', () => {
    let character = new characters();

    before(() => {
        character.visitCharacters();
    })

    it('Example E2E Test 1 - Create new Character Card', () => {
        character.addItemButton()
        character.fillCharacter()

            cy.get(selectors.SUCCESS_ALERT).should(($el) => {
                expect($el).to.have.text('Great Success!')
            })

            cy.get(selectors.SUCCESS_ALERT).should(($el) => {
                expect($el).not.to.exist
            })
    })

    it('Example E2E Test 2 - Search an Existing Character', () => {
        character.wait(3000)

        character.waitingAllCharacters()
        character.typeName()
        character.clickOnCharacterSubmitButton()

        character.waitGetChar()
        cy.get(selectors.CARD_ROW_TEXT).should(($el) => {
            expect($el.eq(1)).to.have.text(card.name)
            expect($el.eq(2)).to.have.text(card.real_name)
            expect($el.eq(3)).to.have.text(card.current_location)
        })
            .get(selectors.CARD_ROW_LABEL).should(($el) => {
                expect($el).to.be.visible
            })
    })

    it('Example E2E Test 3 - Search and Delet a Character', () => {
        character.wait(3000)

        character.waitingAllCharacters()
        character.clearPreviousSearchAndWrite()
        character.clickOnSearchSubmitButton()

        cy.get(selectors.CARD).should('be.visible')
        // cy  
        //     .wait('@getChar')
        //     .get(selectors.CARD).should('be.visible')
        //     .get(selectors.DELETE_CARD).click()
        //     .get(selectors.CARD_NOT_FOUND).should(($el) => {
        //         expect($el).to.have.text('Nothing to see here. Result is empty.')
        //     })
    })
})
