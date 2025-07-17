import { test, expect } from '@playwright/test';

test('Handle Frames', async ({ page }) => {

    await page.goto("https://docs.oracle.com/javase/8/docs/api/")

    const iFrame = await page.frameLocator("//frame[@nmae ='packageListFrame']");
    await iFrame.locator("//a[text()='java.applet']").click();

    //await page.pause(2000);

})