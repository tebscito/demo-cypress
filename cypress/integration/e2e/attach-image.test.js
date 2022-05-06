describe('attach image ', () => {
  it.only('upload a file via ui', () => {
    const image = 'image/clear.png';
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').attachFile(image);
    cy.get('#file-submit').click();
  });
});
