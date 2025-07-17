import { test, expect } from '@playwright/test';

test('Working with multiple tabs', async ({ browser }) => {

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('https:freeLance-Learn-automation.vercel.app/Login');

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
       // page.locator("//a[contains(@href,'facebook')]").click()   
       page.locator('//*[@id="login_container"]/div/div/a[4]').click() 
    ]);




})