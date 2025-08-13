import { test } from "@playwright/test";
import { LoginService } from "../services/LoginService";
import { users, Products } from "../data/UserData";
import { CartService } from "../services/CartService";

test("Add to cart", async({page}) =>{

    const loginServive = new LoginService(page);
    const cartService = new CartService(page); 
    const user1 = users[0]; 
    await loginServive.login(user1);
    await loginServive.assertionService();
    await cartService.addProductToCart(Products.product1);
    await cartService.addProductToCart(Products.product2);
    await loginServive.page.screenshot({path : "Reports/Cart.png"});
    await cartService.checkCart();
    await loginServive.page.screenshot({path : "Reports/Cart1.png"});
    
});
