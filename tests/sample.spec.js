const {test, expect} = require('@playwright/test');

test("My First Test", async function({page}){
   expect(2.0).toBe(2.0);

})

test("My second Test", async function({page}){
   expect("Junil Shrestha").toContain("Junil");

})