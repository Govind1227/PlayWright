import { expect, test } from "@playwright/test";
import { LoginService } from "../services/LoginService";
import { users,invalidUser } from "../data/UserData";

test("This is a login test", async({page}) =>{
    const loginService = new LoginService(page);
    for (const user of users){
        await loginService.login(user)
    }
});

test("Invalid Login test", async({page}) =>{
    const loginService = new LoginService(page);
    await loginService.login(invalidUser);
    await expect(loginService.getErrorMessageLocator()).toBeVisible();
    await loginService.page.waitForTimeout(5000);
    await loginService.page.screenshot({path : "Reports/invalid.png"});
});
