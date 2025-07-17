import { test, expect } from '@playwright/test';
test("Verrify Application Title using  loop", async ({ page }) => {

    await page.goto('https://www.google.com/');
    await page.locator("textarea[name='q']").type("Mukesh Otwani");

    await page.waitForSelector("//li[@role='presentation']")

    const elements = await page.$$("li[role='presentation']");

    for (let i = 0; i < elements.length; i++) {
        const text = await elements[i].textContent();
        console.log(text);
        if (text.includes("Mukesh Otwani")) {
            await elements[i].click();
            break;
        }

    }
})