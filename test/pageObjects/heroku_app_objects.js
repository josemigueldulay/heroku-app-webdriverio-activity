class Heroku {
    // buttons
    get signUpButton() { return $('//button[@id = "signup"]') }
    get submitButton() { return $('//button[@id = "submit"]') }
    get logoutButton() { return $('//button[@id = "logout"]') }
    get addNewContactButton() { return $('//button[@id = "add-contact"]') }
    get editContactButton() { return $('//button[@id = "edit-contact"]') }
    get returnButton() { return $('//button[@id = "return"]') }
    get deleteButton() { return $('//button[@id = "delete"]') }
    get logoutButton() { return $('//button[@id = "logout"]') }

    // user create fields
    get firstNameField() { return $('//input[@id = "firstName"]') }
    get lastNameField() { return $('//input[@id = "lastName"]') }
    get emailField() { return $('//input[@id = "email"]') }
    get passwordField() { return $('//input[@id = "password"]') }

    // add new contact fields
    get birthdateField() { return $('//input[@id = "birthdate"]') }
    get phoneField() { return $('//input[@id = "phone"]') }
    get streetAddress1() { return $('//input[@id = "street1"]') }
    get streetAddress2() { return $('//input[@id = "street2"]') }
    get cityField() { return $('//input[@id = "city"]') }
    get stateProvinceField() { return $('//input[@id = "stateProvince"]') }
    get postalCodeField() { return $('//input[@id = "postalCode"]') }
    get countryField() { return $('//input[@id = "country"]') }

    // contacts
    get firstContact() { return $('//table//tr[1]//td[2]') }
    get lastContact() { return $('(//tr[last()])[2]') }

    // table
    get contactTable() { return $('//table[@id="myTable"]') }

    async navigate() {
        await browser.url('https://thinking-tester-contact-list.herokuapp.com/')
    }
}

export default new Heroku()