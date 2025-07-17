const {test, expect} = require('@playwright/test');

test("Verify Appliction Title", async function({page}){
   await page.goto('https://www.google.com');
   
   const url = await page.url();
   console.log(url);

   const title = await page.title();
   console.log("Title is  "+ title);

    // Verify the title
   await expect(page).toHaveTitle('Google');
  

})