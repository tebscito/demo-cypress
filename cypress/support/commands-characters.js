import selectors from './selectors'

Cypress.Commands.add('fillFormCharacter', (image, name, realName, location) => {
    cy.log('Fill character card form and submit')
    cy
        .get(selectors.POPUP_INPUT_TEXT).eq(0).type(image)
        .get(selectors.POPUP_INPUT_TEXT).eq(1).type(name)
        .get(selectors.POPUP_INPUT_TEXT).eq(2).type(realName)
        .get(selectors.POPUP_LOCATION_SELECT).select(location)
        .get(selectors.POPUP_ALIVE_CHECK).check()
        .get(selectors.POPUP_SUMBIT_BUTTON).click()
})