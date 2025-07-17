const {test, expect} = require('@playwright/test');

const testdata = JSON.parse(JSON.stringify(require('../testData.json')))


test("Login to application", async function({page}) {

    await page.goto("https://freelance-learn-automation.vercel.app/Login")

    await page.locator("//input[@id='email1']").fill(testdata.email)


});
