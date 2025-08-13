import { LoginPage } from "../pages/LoginPage";
import { Page } from "@playwright/test";
import { User } from "../data/UserData";

export class LoginService{
readonly page : Page;
readonly loginPage : LoginPage;

constructor(page : Page){
    this.page = page;
    this.loginPage = new LoginPage(page); 
}

async login(user : User){
    await this.loginPage.goto();
    await this.loginPage.login(user.email, user.password);
}

getErrorMessageLocator() {
    return this.page.locator("//h3[@data-test='error']");
}

async assertionService(){
    this.loginPage.assertion();
}

}
