import { expect, browser, $ } from '@wdio/globals'
import pgUltimateQA from '../pageObjects/ultimateQA.js'
import objUtil from '../util/objUtil.js'
import file from '../util/file.js'
import Reporter from '../util/reporter.js'



describe('UltimateQA - Filling Out Forms', () => {
    it('Fill Sample Form_TC001', async () => {
        // navigate to browser
        await file.appendTxtFile(global.strPath, "Step 1: Navigate to Ultimateqa website");
        await browser.url('https://ultimateqa.com/filling-out-forms/')

        // wait for the element (name) to load, then inputs a value in it
        await $('//input[@id = "et_pb_contact_name_0"]').waitForExist({ timeout: 3000 });
        await file.appendTxtFile(global.strPath, "Step 2: User fill contact name field");
        await $('//input[@id = "et_pb_contact_name_0"]').setValue('This is my test contact name - Original');


        // wait for the element (message) to load, then inputs a value in it
        await file.appendTxtFile(global.strPath, "Step 3: User fill contact message field");
        await $('//textarea[@id = "et_pb_contact_message_0"]').setValue('This is my test contact message - Original');

        await file.appendTxtFile(global.strPath, "Step 4: Click Submit Button");
        await $('//button[@name = "et_builder_submit_button"]').click();
        await $('//div[@class = "et-pb-contact-message"]//p').waitForExist();
        
    })

    it('Fill Sample Form_TC001_OOP', async () => {

        await Reporter.addLog('Step 1: Navigate to Ultimateqa website');
        await pgUltimateQA.navigate();
        await browser.takeScreenshot();

        await Reporter.addLog('Step 2: User fill contact name field');
        await objUtil.setObjectValue(pgUltimateQA.contactNameEdit, 'This is my test contact name - OOP');
        await browser.takeScreenshot();

        await Reporter.addLog('Step 3: User fill contact message field');
        await objUtil.setObjectValue(pgUltimateQA.contactMessageEdit, 'This is my test contact message - OOP');
        await browser.takeScreenshot();

        await Reporter.addLog('Step 4: Click Submit Button');
        await objUtil.clickObject(pgUltimateQA.submitBtn);
        await browser.takeScreenshot();

        await expect(pgUltimateQA.successMsgElm).toHaveText("Thanks for contacting us");
        await browser.takeScreenshot();
        // const strSuccessMsg = objUtil.getObjValue(pgUltimateQA.successMsgElm);
        // await expect(pgUltimateQA.successMsgElm, "ERROR: Message not equal!").to.equals("Thanks for contacting us");
        
    })
})





