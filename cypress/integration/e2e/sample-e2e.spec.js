import card from '../../fixtures/card.json'

const ADD_ITEM_BUTTON = '.button.add-item.green'

const POPUP_INPUT_TEXT = '.popup-content input[type="text"]'
const POPUP_LOCATION_SELECT = '.popup-content select'
const POPUP_ALIVE_CHECK = '.popup-content input[type="checkbox"]'
const POPUP_SUMBIT_BUTTON = '.popup-content button[type="submit"]'
const SUCCESS_ALERT = 'div [role="alert"]'

const CHARACTER_SEARCH_INPUT_TEXT = 'section form input[type="text"]'
const CHARACTER_SUBMIT_BUTTON = 'section form button[type="submit"]'

const CARD_ROW_TEXT = '.card .card-row.text span'
const CARD_ROW_LABEL = '.bool.true'

describe('Example E2E Test', () => {
    before(() => {
        cy.visit('/')
    })
  
    it('Example E2E Test 1', () => {
        cy
            .get(ADD_ITEM_BUTTON).click()
            .get(POPUP_INPUT_TEXT).eq(0).type(card.image)
            .get(POPUP_INPUT_TEXT).eq(1).type(card.name)
            .get(POPUP_INPUT_TEXT).eq(2).type(card.real_name)
            .get(POPUP_LOCATION_SELECT).select(card.current_location)
            .get(POPUP_ALIVE_CHECK).check()
            .get(POPUP_SUMBIT_BUTTON).click()
            .get(SUCCESS_ALERT).should(($el) => {
                expect($el).to.have.text('Great Success!')
            })
            .get(SUCCESS_ALERT).should(($el) => {
                expect($el).not.to.exist
            })
    })

    it('Example E2E Test 2', () => {
        cy.intercept('GET', '**/character?search*').as('getChar')
        cy
            .get(CHARACTER_SEARCH_INPUT_TEXT).type(card.name)
            .get(CHARACTER_SUBMIT_BUTTON).click()
        cy  
            .wait('@getChar')
            .get(CARD_ROW_TEXT).should(($el) => {
                expect($el.eq(1)).to.have.text(card.name)
                expect($el.eq(2)).to.have.text(card.real_name)
                expect($el.eq(3)).to.have.text(card.current_location)
            })
            .get(CARD_ROW_LABEL).should(($el) => {
                expect($el).to.be.visible
            })
    })
})
