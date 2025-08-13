import {Page, Locator, expect} from '@playwright/test';
import dotenv from "dotenv"

dotenv.config();
const loginURL = process.env.loginURL;


export class LoginPage{
readonly page : Page;
readonly emailInput : Locator;
readonly passwordInput : Locator;
readonly loginbutton : Locator ;
readonly assertionText : Locator;

constructor (page : Page){
this.page = page;
this.emailInput = page.locator('[data-test="username"]');
this.passwordInput = page.locator('[data-test="password"]');
this.loginbutton = page.getByRole('button', { name: 'LOGIN' });
this.assertionText = page.locator('#inventory_filter_container');
}

async goto(){
  // ! is used to tell the code that loginURL is not undefined.
  await this.page.goto(loginURL!)
}

async login(email : string, password : string){
  await this.emailInput.fill(email);
  await this.passwordInput.fill(password);
  await this.loginbutton.click();
  await this.page.waitForTimeout(5_000);
  await this.page.screenshot({path : "Reports/Login.png"});
}
async assertion(){
  await expect(this.assertionText).toContainText('Products');
}
}


