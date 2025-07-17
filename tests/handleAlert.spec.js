import { test, expect } from '@playwright/test';

test('Handle Alert', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Click the button to trigger the alert
    await page.click('button:has-text("Click for JS Alert")');

    // Wait for the alert to appear and accept it
    page.on('dialog', async dialog => {
        console.log(`Alert message: ${dialog.message()}`);
        await dialog.accept();
    });

    // Verify that the result text has changed after accepting the alert
    const resultText = await page.textContent('#result');
    expect(resultText).toBe('You successfully clicked an alert');


})