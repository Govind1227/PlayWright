import { test } from "@playwright/test";
import { LoginService } from "../services/LoginService";
import { users } from "../data/UserData";

test("This is a login test", async({page}) =>{
    const loginService = new LoginService(page);
    for (const user of users){
        await loginService.login(user)
    }
});