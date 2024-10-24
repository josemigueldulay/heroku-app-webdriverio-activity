import { browser, expect } from '@wdio/globals'
import Utils from '../util/objUtil.js'
import HerokuObjects from '../pageObjects/heroku_app_objects.js'
import moment from 'moment'
import reporter from '../util/reporter.js'
import fileUtil from '../util/file.js'



describe('Dulay_Heroku_App_QAAutomation_Activity', () => {

    // txt file path
    const txtFilePath = "./test/specs/heroku_app_activity_contact_list";

    // name
    const userProfileFirstName = 'SampleFirstName';
    const userProfileLastName = 'SampleLastName';
    // email
    let userProfileEmail;
    const sampleDate = moment(new Date()).format('YYYY-MM-DD');
    const forUserEdit = moment(new Date()).format('YYYYMMDD');

    // password
    const userProfilePassword = 'SamplePassword';
    let isUserSignedUp = false;

    before(async () => {
        const emailExists = await fileUtil.emailFileExists();
        if (emailExists) {
            userProfileEmail = await fileUtil.getUserProfileEmail();
            console.log(`Using existing userProfileEmail: ${userProfileEmail}`);
            isUserSignedUp = true; 
        } else {
            const uniqueDate = moment().format('YYYYMMDDHHMM');
            userProfileEmail = `test_${uniqueDate}9@test.com`;
            await fileUtil.saveUserProfileEmail(userProfileEmail);
            console.log(`Saved new userProfileEmail: ${userProfileEmail}`);
        }
    });


    it('Heroku App SignUp_TC001', async function() {
        if (isUserSignedUp) {
            console.log('Skipping sign-up as user already exists.');
            this.skip();
        }

        await reporter.addLog('STEP 1: Navigate to thinking tester website');
        await HerokuObjects.navigate();
        await reporter.addLog('VALIDATED STEP 1: User successfully navigated to website.');

        await reporter.addLog('STEP 2: User click the Sign up button');
        await HerokuObjects.signUpButton.waitForExist();
        await Utils.clickObject(HerokuObjects.signUpButton);

        await reporter.addLog('STEP 3: User fill first name field.');
        await HerokuObjects.firstNameField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.firstNameField, userProfileFirstName);

        await reporter.addLog('STEP 4: User fill last name field.');
        await HerokuObjects.lastNameField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.lastNameField, userProfileLastName);

        await reporter.addLog('STEP 5: User fill email field.');
        await HerokuObjects.emailField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.emailField, userProfileEmail);

        await reporter.addLog('STEP 6: User fill password field.');
        await HerokuObjects.passwordField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.passwordField, userProfilePassword);

        await reporter.addLog('STEP 7: Click Submit Button.');
        await HerokuObjects.submitButton.waitForExist();
        await Utils.clickObject(HerokuObjects.submitButton);

        // Verify
        await expect(HerokuObjects.logoutButton).toBeExisting();
        await reporter.addLog('VALIDATED STEP 7: User successfully navigated to homepage.');
    });

    it('Heroku App Login User_TC002', async () => {
        await reporter.addLog('STEP 1: Navigate to thinking tester website');
        await HerokuObjects.navigate();
        await reporter.addLog('VALIDATED STEP 1: User successfully navigated to website.');

        await reporter.addLog('STEP 2: User fill email field.');
        await HerokuObjects.emailField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.emailField, userProfileEmail);
        // await browser.pause(10000);

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

        await HerokuObjects.logoutButton.waitForExist();
        await Utils.clickObject(HerokuObjects.logoutButton);
    })

    it('Heroku App Add Contact TC003', async () => {
        // navigate
        await reporter.addLog('STEP 1: Navigate to thinking tester website');
        await HerokuObjects.navigate();
        await reporter.addLog('VALIDATED STEP 1: User successfully navigated to website.');
        // await browser.pause(3000);


        // login
        await reporter.addLog('STEP 2: Login using the save credentials.');
        await HerokuObjects.emailField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.emailField, userProfileEmail);
        await HerokuObjects.passwordField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.passwordField, userProfilePassword);
        await HerokuObjects.submitButton.waitForExist();
        await Utils.clickObject(HerokuObjects.submitButton);

        // // verify login
        // await expect(HerokuObjects.logoutButton).toBeExisting();
        // await reporter.addLog('VALIDATED STEP 2: User successfully navigated to homepage.');
        // // await browser.pause(3000);

        // loop start here
        for (let i = 1; i <= 3; i++) {
            await reporter.addLog(`STEP 3: User clicks the Add New Contact Button for contact ${i}`);
            await HerokuObjects.addNewContactButton.waitForExist();
            await Utils.clickObject(HerokuObjects.addNewContactButton);
        
            await reporter.addLog(`STEP 4: User fills first name field for contact ${i}.`);
            await HerokuObjects.firstNameField.waitForExist();
            await Utils.setObjectValue(HerokuObjects.firstNameField, `sampleFirstName${i}`);
        
            await reporter.addLog(`STEP 5: User fills last name field for contact ${i}.`);
            await HerokuObjects.lastNameField.waitForExist();
            await Utils.setObjectValue(HerokuObjects.lastNameField, `sampleLastName${i}`);
        
            await reporter.addLog(`STEP 6: User fills date of birth field for contact ${i}.`);
            await HerokuObjects.birthdateField.waitForExist();
            await Utils.setObjectValue(HerokuObjects.birthdateField, sampleDate);
        
            await reporter.addLog(`STEP 7: User fills email field for contact ${i}.`);
            await HerokuObjects.emailField.waitForExist();
            await Utils.setObjectValue(HerokuObjects.emailField, `contact_${i}@email.com`);
        
            await reporter.addLog(`STEP 8: User fills phone field for contact ${i}.`);
            await HerokuObjects.phoneField.waitForExist();
            await Utils.setObjectValue(HerokuObjects.phoneField, `123456789${i}`);
        
            await reporter.addLog(`STEP 9: User fills street address 1 field for contact ${i}.`);
            await HerokuObjects.streetAddress1.waitForExist();
            await Utils.setObjectValue(HerokuObjects.streetAddress1, `SampleStreet_${i}`);
        
            await reporter.addLog(`STEP 10: User fills street address 2 field for contact ${i}.`);
            await HerokuObjects.streetAddress2.waitForExist();
            await Utils.setObjectValue(HerokuObjects.streetAddress2, `SampleStreet_${i}`);
        
            await reporter.addLog(`STEP 11: User fills city field for contact ${i}.`);
            await HerokuObjects.cityField.waitForExist();
            await Utils.setObjectValue(HerokuObjects.cityField, `SampleCity_${i}`);
        
            await reporter.addLog(`STEP 12: User fills state or province field for contact ${i}.`);
            await HerokuObjects.stateProvinceField.waitForExist();
            await Utils.setObjectValue(HerokuObjects.stateProvinceField, `state_${i}`);
        
            await reporter.addLog(`STEP 13: User fills postal code field for contact ${i}.`);
            await HerokuObjects.postalCodeField.waitForExist();
            await Utils.setObjectValue(HerokuObjects.postalCodeField, `123${i}`);
        
            await reporter.addLog(`STEP 14: User fills country field for contact ${i}.`);
            await HerokuObjects.countryField.waitForExist();
            await Utils.setObjectValue(HerokuObjects.countryField, 'Philippines');
        
            await reporter.addLog(`STEP 15: Click submit button.`);
            await HerokuObjects.submitButton.waitForExist();
            await Utils.clickObject(HerokuObjects.submitButton);
            
            await reporter.addLog(`VALIDATED: Contact ${i} created successfully.`);
        }
        
        await expect(HerokuObjects.addNewContactButton).toBeExisting();

        await HerokuObjects.logoutButton.waitForExist();
        await Utils.clickObject(HerokuObjects.logoutButton);
    

    })

    it('Heroku App Edit Contact TC004', async () => {
        // navigate
        await reporter.addLog('STEP 1: Navigate to thinking tester website');
        await HerokuObjects.navigate();
        await reporter.addLog('VALIDATED STEP 1: User successfully navigated to website.');



        // login
        await reporter.addLog('STEP 2: Login using the save credentials.');
        await HerokuObjects.emailField.waitForExist({ timeout: 20000 });
        await Utils.setObjectValue(HerokuObjects.emailField, userProfileEmail);
        await HerokuObjects.passwordField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.passwordField, userProfilePassword);
        await HerokuObjects.submitButton.waitForExist();
        await Utils.clickObject(HerokuObjects.submitButton);

        await reporter.addLog('STEP 3: User clicks the first contact on the table');
        await HerokuObjects.firstContact.waitForExist();
        await Utils.clickObject(HerokuObjects.firstContact);

        await reporter.addLog('STEP 4: User clicks the edit contact button');
        await HerokuObjects.editContactButton.waitForExist();
        await Utils.clickObject(HerokuObjects.editContactButton);

        await reporter.addLog('STEP 5: User edit the postal code to the date and today ');
        await HerokuObjects.postalCodeField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.postalCodeField, "")
        await Utils.setObjectValue(HerokuObjects.postalCodeField, forUserEdit)

        await reporter.addLog('STEP 6: Click Submit Button.');
        await HerokuObjects.submitButton.waitForExist();
        await Utils.clickObject(HerokuObjects.submitButton);
        
        await HerokuObjects.returnButton.waitForExist();
        await Utils.clickObject(HerokuObjects.returnButton);

        await HerokuObjects.logoutButton.waitForExist();
        await Utils.clickObject(HerokuObjects.logoutButton);
    

    })

    it('Heroku App Delete Contact TC005', async () => {
        // navigate
        await reporter.addLog('STEP 1: Navigate to thinking tester website');
        await HerokuObjects.navigate();
        await reporter.addLog('VALIDATED STEP 1: User successfully navigated to website.');


        // login
        await reporter.addLog('STEP 2: Login using the save credentials.');
        await HerokuObjects.emailField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.emailField, userProfileEmail);
        await HerokuObjects.passwordField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.passwordField, userProfilePassword);
        await HerokuObjects.submitButton.waitForExist();
        await Utils.clickObject(HerokuObjects.submitButton);

        await reporter.addLog('STEP 3: User clicks the last contact on the table');
        await HerokuObjects.lastContact.waitForExist();
        await Utils.clickObject(HerokuObjects.lastContact);

        await reporter.addLog('STEP 4: User clicks the delete contact button');
        await HerokuObjects.deleteButton.waitForExist();
        await Utils.clickObject(HerokuObjects.deleteButton);
        // await browser.pause(10000);

        await browser.acceptAlert();
        // await browser.pause(3000)

        await HerokuObjects.logoutButton.waitForExist();
        await Utils.clickObject(HerokuObjects.logoutButton);
    

    })

    it('Heroku App Export Contacts on File_TC006', async () => {
        // navigate
        await reporter.addLog('STEP 1: Navigate to thinking tester website');
        await HerokuObjects.navigate();
        await reporter.addLog('VALIDATED STEP 1: User successfully navigated to website.');
    
        // login
        await reporter.addLog('STEP 2: Login using the saved credentials.');
        await HerokuObjects.emailField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.emailField, userProfileEmail);
        await HerokuObjects.passwordField.waitForExist();
        await Utils.setObjectValue(HerokuObjects.passwordField, userProfilePassword);
        await HerokuObjects.submitButton.waitForExist();
        await Utils.clickObject(HerokuObjects.submitButton);
    
        const table = await HerokuObjects.contactTable;
        const rows = await table.$$('tr');
    
        await reporter.addLog('STEP 3: User creates a text file containing all the details of the existing contacts in the table.');
        await fileUtil.createTxtFileHeroku(txtFilePath, "--------- LIST OF CONTACTS ---------\n\n");
    
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const cells = await row.$$('td');
    
            for (let j = 0; j < cells.length; j++) {
                const cell = cells[j];
                const cellText = await cell.getText();
    
                if (cellText == "") {
                    await fileUtil.appendTxtFileHeroku(txtFilePath, `\n------------ Contact ${i} ------------\n`);
                } else {
                    await fileUtil.appendTxtFileHeroku(txtFilePath, cellText);
                }
            }
        }

        await HerokuObjects.logoutButton.waitForExist();
        await Utils.clickObject(HerokuObjects.logoutButton);
    });
    

})