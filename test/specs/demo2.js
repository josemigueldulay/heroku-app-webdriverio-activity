import { expect, browser, $ } from '@wdio/globals'


describe('My Login application', () => {
    it('Fill Sample Form Wrong Captcha_TC002', async () => {
        await browser.url('https://ultimateqa.com/filling-out-forms/')

        await $('//input[@id = "et_pb_contact_name_1"]').waitForExist({ timeout: 3000 });
        await $('//input[@id = "et_pb_contact_name_1"]').setValue('TestingIsFun');


        await $('//textarea[@id = "et_pb_contact_message_1"]').setValue('TestingIsFun');
        await $('//input[@name = "et_pb_contact_captcha_1"]').setValue('5');
        await $('//div[@id = "et_pb_contact_form_1"]//button').click();
        await $('//div[@id = "et_pb_contact_form_1"]//li').waitForExist();
    })
})
