import { test, expect } from '@playwright/test';
test("select values from dropdown", async function({page}) {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

   

    await page.locator("#state").selectOption({Label:"Goa"});
    //await page.waitForTimeout(2000)

    await page.locator("#state").selectOption({value:"Maharashtra"}); 
    //await page.waitForTimeout(2000)

    //page.pause();

    await page.locator("#state").selectOption({index:2});
    //await page.waitForTimeout(2000) 

    const value = await page.locator("#state").textContent();
    console.log("All content " +value);

    await expect(value.includes("Goa")).toBeTruthy();;

    await page.locator("#hobbies").selectOption(['Playing', 'Swimming']);

    await page.waitForTimeout(3000);

    
})