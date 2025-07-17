import { test, expect } from '@playwright/test';

test("select values from dropdown", async function({page}) {

   await page.goto("https://the-internet.herokuapp.com/upload")

   await page.locator("#file-upload").setInputFiles("C:/Users/junil/Desktop/testData.png");

   await page.locator("#file-submit").click();

   expect(await page.locator("//h3")).toHaveText("File Uploaded!")
})