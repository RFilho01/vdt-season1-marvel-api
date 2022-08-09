// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('back2ThePast', () => {
    cy.api({
        method: 'DELETE',
        url: '/back2thepast/62eb12fbf5eb730016f482a7'
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})

Cypress.Commands.add('setToken', () => {
    cy.api({
        method: 'POST',
        url: '/sessions',
        body: {
            email: 'robertofilho@qacademy.io',
            password: 'teste123'
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        Cypress.env('token', response.body.token)
    })

})

Cypress.Commands.add('postCharacter', (payload) => {
    cy.api({
        method: 'POST',
        url: '/characters',
        body: payload,
        headers: {
            Authorization: Cypress.env('token')
        },
        failOnStatusCode: false
    }).then((response) => {
        return response
    })
})