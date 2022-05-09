/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Login description
       */
       fillFormCharacter(image:string, name:string, realName:string, location:string): Chainable<any>
       requestApi(method:string, url:string, body:string): Chainable<any>
  }
  }