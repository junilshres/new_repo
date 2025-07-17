const {test, expect} = require('@playwright/test');

test("Working with Load state", async function({page}) {

    await page.goto("https://freelance-learn-automation.vercel.app/Login")

    await page.getByText("New user? Signup").click()

    // Wait for the page to load completely
    await page.waitForLoadState('networkidle')

    const count = await page.locator("//input[@type='checkbox']").count()  

    expect(count).toBe(9)

}) ;