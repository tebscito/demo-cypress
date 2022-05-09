/// <reference types="cypress" />
/// <reference path="../../support/index.d.ts" />

import card from '../../fixtures/card.json'
import selectors from '../../support/selectors'

describe('Example E2E Test', () => {
    before(() => {
        cy.visit('/')
    })
  
    it('Example E2E Test 1 - Create new Character Card', () => {
        cy
            .get(selectors.ADD_ITEM_BUTTON).click()
            .fillFormCharacter(card.image, card.name, card.real_name, card.current_location)
            .get(selectors.SUCCESS_ALERT).should(($el) => {
                expect($el).to.have.text('Great Success!')
            })
            .get(selectors.SUCCESS_ALERT).should(($el) => {
                expect($el).not.to.exist
            })
    })

    it('Example E2E Test 2 - Search an Existing Character', () => {
        cy.wait(3000)
        cy.intercept('GET', '**/character?search*').as('getChar')
        cy
            .get(selectors.CHARACTER_SEARCH_INPUT_TEXT).type(card.name)
            .get(selectors.CHARACTER_SUBMIT_BUTTON).click()
        cy  
            .wait('@getChar')
            .get(selectors.CARD_ROW_TEXT).should(($el) => {
                expect($el.eq(1)).to.have.text(card.name)
                expect($el.eq(2)).to.have.text(card.real_name)
                expect($el.eq(3)).to.have.text(card.current_location)
            })
            .get(selectors.CARD_ROW_LABEL).should(($el) => {
                expect($el).to.be.visible
            })
    })

    it('Example E2E Test 3 - Search and Delet a Character', () => {
        cy.wait(3000)
        cy.intercept('GET', '**/character?search*').as('getChar')
        cy
            .get(selectors.CHARACTER_SEARCH_INPUT_TEXT).clear().type(card.name)
            .get(selectors.CHARACTER_SUBMIT_BUTTON).click()
        cy  
            .wait('@getChar')
            .get(selectors.CARD).should('be.visible')
            .get(selectors.DELETE_CARD).click()
            .get(selectors.CARD_NOT_FOUND).should(($el) => {
                expect($el).to.have.text('Nothing to see here. Result is empty.')
            })
    })
})
