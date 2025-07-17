const {test, expect} = require('@playwright/test');

test("Verify Error Message", async function({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)
    // Set the viewport size to 800x600
   // await page.setViewportSize({ width: 800, height: 600 })


    await page.getByPlaceholder('Username').type("Admin")

    await page.getByPlaceholder('Password').type("wrongpassword")

   // await page.locator("//button[@type='submit']").click()
   await page.locator("//button[normalize-space()='Login']").click()

   const errorMessage = await page.locator("//p[contains(@class, 'alert-content-text')]").textContent()
   console.log("Error message is " + errorMessage)

   // Verify the error message
    expect(errorMessage).toContain("Invalid credentials")
    expect(errorMessage.includes("invalid1")).toBeFalsy()
    expect(errorMessage==="Invalid credentials").toBeTruthy()


       

}) 