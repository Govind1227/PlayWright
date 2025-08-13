import {Page, Locator} from "@playwright/test";


export class CartPage{
    readonly page : Page;
    readonly cartButton : Locator;

    constructor(page : Page){
        this.page = page;
        this.cartButton = page.locator("a.shopping_cart_link.fa-layers.fa-fw");
    }

}