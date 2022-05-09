import characters from '../../support/page-object/characters';
import card from '../../fixtures/card.json'
import selectors from '../../support/selectors'
// Ruta desde este archivo hasta el archivo donde tengo mis clases (sin la extension .js)
before(() => {
    let character = new characters();
    character.visitCharacters();
})

describe('Example E2E Test', () => {
    let character = new characters();
    it('Example E2E Test 1 - Create new Character Card', () => {
            character.addCharacter()
            character.fillCharacter()
            character.alertAppears()
            character.alertDisappears()
    })
})
