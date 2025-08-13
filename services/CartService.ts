import { Page } from "@playwright/test";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";

export class CartService{
    readonly page : Page;
    readonly productPage : ProductPage;
    readonly cartPage : CartPage;

    constructor(page : Page){
        this.page = page;
        this.cartPage = new CartPage(page);
    }

    async addProductToCart(productname : string){
        const product1 = new ProductPage(this.page, productname);
        await product1.selectProduct();
        await product1.addToCart();
        await product1.goBack();
    }

    async checkCart(){
        await this.cartPage.cartButton.click();
    }

}


