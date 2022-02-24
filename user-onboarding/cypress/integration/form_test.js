describe("User Onboarding App", () => {
   beforeEach(() => {
      cy.visit("http://localhost:3000");
   })

   const firstNameInput = () => cy.get('input[name=fname]');
   const lastNameInput = () => cy.get('input[name=lname]');
   const emailInput = () => cy.get('input[name=email]');
   const passwordInput = () => cy.get('input[name=password]');
   const checkboxInput = () => cy.get('input[name=termsOfService]');
   const createUserBtn = () => cy.get('button[id="create-user"]');

   it("sanity check", () => {
      expect(1 + 1).to.equal(2);
   })

   it("the elements are showing properly", () => {
      firstNameInput().should("exist");
      lastNameInput().should("exist");
      emailInput().should("exist");
      passwordInput().should("exist");
      checkboxInput().should("exist");
      createUserBtn().should("exist");
      cy.contains("User Onboarding").should("exist");
      cy.contains("Create User").should("exist");
   })

   describe("Filling out the inputs and checking button accessibility", () => {
      it("can navigate to the site", () => {
         cy.url().should("include", "localhost");
      })

      it("create user button starts out disabled", () => {
         createUserBtn().should("be.disabled");
      })

      it("can type in a first name", () => {
         firstNameInput().should("have.value", "").type("Joseph").should("have.value", "Joseph");
      })

      it("can type in a last name", () => {
         lastNameInput().should("have.value", "").type("Fantuzzi").should("have.value", "Fantuzzi");
      })

      it("can type in an email", () => {
         emailInput().should("have.value", "").type("hi@hi.com").should("have.value", "hi@hi.com");
      })

      it("can type in an password", () => {
         passwordInput().should("have.value", "").type("123456").should("have.value", "123456");
      })

      it("can check the terms of service checkbox", () => {
         checkboxInput().check();
      })

      it("can enable the button when all inputs are filled out and satisfied", () => {
         firstNameInput().type("John");
         lastNameInput().type("Smith");
         emailInput().type("what@what.com");
         passwordInput().type("111111");
         checkboxInput().check();
         createUserBtn().should("not.be.disabled");
      })

      it("can check to see that a user can submit the form and confirm that creating a user resets the input fields", () => {
         firstNameInput().type("Alex");
         lastNameInput().type("Smith");
         emailInput().type("yep@yahoo.com");
         passwordInput().type("ahhhhhhhhhhhhh");
         checkboxInput().check();
         createUserBtn().click();
         firstNameInput().should("have.value", "");
         lastNameInput().should("have.value", "");
         emailInput().should("have.value", "");
         passwordInput().should("have.value", "");
         checkboxInput().should("have.value", "false");
         createUserBtn().should("be.disabled");
      })
   })
})