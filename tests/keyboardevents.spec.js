import { test, expect } from '@playwright/test';

test("Keyboard events in Playwright", async function({page}) {

    await page.goto("https://www.google.com/");
    await page.locator("textArea[name='q']").focus()
    await page.keyboard.type("Playwright testing framework");

    await page.keyboard.press("ArrowLeft")

    await page.keyboard.down("Shift")  

    for (let i = 0; i < 10; i++) {
        await page.keyboard.press("Backspace")
    }

    await page.keyboard.up("Shift")



});
