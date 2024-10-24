import { browser, expect } from '@wdio/globals'
import Utils from '../util/objUtil.js'
import HerokuObjects from '../pageObjects/heroku_app_objects.js'
import moment from 'moment'
import reporter from '../util/reporter.js'



describe('Dulay_Heroku_App_QAAutomation_Activity', () => {

    // name
    const userProfileFirstName = 'SampleFirstName';
    const userProfileLastName = 'SampleLastName';
    // email
    const uniqueDate = moment(new Date()).format('YYYYMMDDHHMM');
    const userProfileEmail = `test_${uniqueDate}9@test.com`;
    // password
    const userProfilePassword = 'SamplePassword';


    it('Heroku App SignUp_TC001', async () => {
        await browser.maximizeWindow();
        await reporter.addLog('STEP 1: Navigate to thinking tester website');
        await HerokuObjects.navigate();
        await reporter.addLog('VALIDATED STEP 1: User successfully navigated to website.');
        // await browser.pause(3000);

        await reporter.addLog('STEP 2: User click the Sign up button');
        await HerokuObjects.signUpButton.waitForExist();
        await Utils.clickObject(HerokuObjects.signUpButton);
        // await browser.pause(3000);

        await reporter.addLog('STEP 3: User fill first name field.');
        await HerokuObjects.firstNameField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.firstNameField, userProfileFirstName);
        // await browser.pause(3000);

        await reporter.addLog('STEP 4: User fill last name field.');
        await HerokuObjects.lastNameField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.lastNameField, userProfileLastName);
        // await browser.pause(3000); 

        await reporter.addLog('STEP 5: User fill email field.');
        await HerokuObjects.emailField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.emailField, userProfileEmail);
        // console.log(`Unique Date: ${uniqueDate}`)
        // console.log(`Unique Email: ${uniqueEmail}`)
        // console.log(`User Email: ${userProfileEmail}`)
        // await browser.pause(3000);

        await reporter.addLog('STEP 6: User fill password field.');
        await HerokuObjects.passwordField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.passwordField, userProfilePassword);
        // await browser.pause(3000);

        await reporter.addLog('STEP 7: Click Submit Button.');
        await HerokuObjects.submitButton.waitForExist();
        await Utils.clickObject(HerokuObjects.submitButton);

        // verify
        await expect(HerokuObjects.logoutButton).toBeExisting();
        await reporter.addLog('VALIDATED STEP 7: User successfully navigated to homepage.');
        // await browser.pause(3000);
    })

    it('Heroku App Login User_TC002', async () => {
        await browser.maximizeWindow();
        await reporter.addLog('STEP 1: Navigate to thinking tester website');
        await HerokuObjects.navigate();
        await reporter.addLog('VALIDATED STEP 1: User successfully navigated to website.');
        // await browser.pause(3000);


        await reporter.addLog('STEP 2: User fill email field.');
        await HerokuObjects.emailField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.emailField, userProfileEmail);
        // await browser.pause(3000);

        await reporter.addLog('STEP 3: User fill password field.');
        await HerokuObjects.passwordField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.passwordField, userProfilePassword);
        // await browser.pause(3000); 

        await reporter.addLog('STEP 4: Click Submit Button.');
        await HerokuObjects.submitButton.waitForExist();
        await Utils.clickObject(HerokuObjects.submitButton);

        // verify
        await expect(HerokuObjects.logoutButton).toBeExisting();
        await reporter.addLog('VALIDATED STEP 4: User successfully navigated to homepage.');
        // await browser.pause(3000);
    })

    it.only('Heroku App Add Contact TC003', async () => {
        await browser.maximizeWindow();
        await reporter.addLog('STEP 1: Navigate to thinking tester website');
        await HerokuObjects.navigate();
        await reporter.addLog('VALIDATED STEP 1: User successfully navigated to website.');
        // await browser.pause(3000);


        await reporter.addLog('STEP 2: Login using the save credentials.');
        await HerokuObjects.emailField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.emailField, userProfileEmail);
        await HerokuObjects.passwordField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.passwordField, userProfilePassword);
        await HerokuObjects.submitButton.waitForExist();
        await Utils.clickObject(HerokuObjects.submitButton);

        // verify
        await expect(HerokuObjects.logoutButton).toBeExisting();
        await reporter.addLog('VALIDATED STEP 2: User successfully navigated to homepage.');
        // await browser.pause(3000);


        await reporter.addLog('STEP 2: Login using the save credentials.');
    })
})