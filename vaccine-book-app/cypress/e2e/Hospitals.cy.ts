describe('test', () => {
    it('should visit and has video',() =>{
        cy.visit('/')
        cy.get('video').should('exist')
        cy.get('video').should('have.prop','paused',false)

        cy.wait(5000)
        cy.get('button#playbutton').click()
        cy.get('video').should('have.prop','paused',true)


        cy.get('button#enterbutton').click()

        cy.wait(5000)

        cy.get('#imagediv').find('img').should('have.length.at.least', 3)
    })
})