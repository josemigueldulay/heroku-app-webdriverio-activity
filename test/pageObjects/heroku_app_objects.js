class Heroku {
    // buttons
    get signUpButton() { return $('//button[@id = "signup"]') }
    get submitButton() { return $('//button[@id = "submit"]') }
    get logoutButton() { return $('//button[@id = "logout"]') }

    // fields
    get firstNameField() { return $('//input[@id = "firstName"]') }
    get lastNameField() { return $('//input[@id = "lastName"]') }
    get emailField() { return $('//input[@id = "email"]') }
    get passwordField() { return $('//input[@id = "password"]') }

    async navigate() {
        await browser.url('https://thinking-tester-contact-list.herokuapp.com/')
    }
}

export default new Heroku()