/// <reference types="cypress"/>

describe("Login With Invalid User", () => {
  it("Given I am at Automation Practice Site", () => {
    cy.visit("http://automationpractice.com/index.php");
  });
  
  it("When I click on Sign In Buttom", () => {
    cy.get(".login").click();
  });

  it("And I fill the email field", () => {
    cy.get('#email').focus().type('bho.jsoliveira@gmail.com');
  });

  it("And I fill the password field", () => {
    cy.get('#passwd').focus().type('password');
  });

  it("And I click on continue Sign In Buttom", () => {
    cy.get('#SubmitLogin').focus().click();
  });

});
