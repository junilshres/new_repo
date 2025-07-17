const {test, expect} = require('@playwright/test');

test.use({
    viewport: { width: 1000, height: 700 }, // Set the viewport size for all tests in this file
});

test("valid login", async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder('Username').type("Admin")

    await page.getByPlaceholder('Password').type("admin1234")

    await page.locator("//button[@type='submit']").click()

    await page.waitForTimeout(5000)

    await expect(page).toHaveURL(/dashboard/)

    await page.getByAltText('profile picture').first().click()

    await page.getByText('Logout').click()

    await page.waitForTimeout(3000)

    await expect(page).toHaveURL(/login/)


})