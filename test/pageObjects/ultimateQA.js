class Page {
    get contactNameEdit() { return $('//input[@id = "et_pb_contact_name_0"]') }
    get contactMessageEdit() { return $('//textarea[@id="et_pb_contact_message_0"]') }
    get submitBtn() { return $('//button[@name="et_builder_submit_button"]') }
    get successMsgElm() { return $('//p[text() = "Thanks for contacting us"]') }

    // 2
    // get contactNameEdit() { return $('//input[@id = "et_pb_contact_name_0"]') }
    // get contactMessageEdit() { return $('//textarea[@id="et_pb_contact_message_0"]') }
    // get submitBtn() { return $('//button[@name="et_builder_submit_button"]') }
    // get successMsgElm() { return $('//p[text() = "Thanks for contacting us"]') }
    // get captchaElm() { return $('//') }

    async navigate() {
        await browser.url('https://ultimateqa.com/filling-out-forms/')
    }

}

export default new Page()