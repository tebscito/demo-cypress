/// <reference types="cypress" />
import { httpMethods } from '../../utils/enums/httpMethods';
import { URL } from '../../utils/enums/url';
import user from '../../fixtures/user-mock.json';
import userUpdate from '../../fixtures/user-mock-update.json';

describe('Example API Test', () => {
  let id = 'id';
  it('Example API Test 1-POST', () => {
    cy.requestApi(httpMethods.POST, URL.characterCreation, user).then(
      response => {
        expect(response.body[id]).to.equal(user.id);
        expect(response.status).to.equal(200);
      }
    );
    cy.visit(URL.homepage);
    cy.wait(3000);
  });

  it('Example API Test 1-PUT', () => {
    cy.visit(URL.homepage);
    cy.wait(3000);
    cy.requestApi(httpMethods.PUT, URL.getCharacter + user.id, userUpdate).then(
      response => {
        expect(response.body).to.equal('ok');
        expect(response.status).to.equal(200);
      }
    );
    cy.reload();
  });

  it('Example API Test 1-DELETE', () => {
    cy.visit(URL.homepage);
    cy.wait(5000);
    cy.requestApi(httpMethods.DELETE, URL.getCharacter + user.id).then(
      response => {
        expect(response.body).to.equal('ok');
        expect(response.status).to.equal(200);
      }
    );
    cy.reload();
  });
});
