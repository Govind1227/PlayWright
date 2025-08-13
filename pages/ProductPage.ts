import { Locator, Page } from "@playwright/test";

export class ProductPage{
    readonly page : Page;
    readonly productbutton : Locator;
    readonly addcartbutton : Locator;
    readonly goback : Locator;

    constructor (page : Page, productname : string){
        this.page = page;
        this.productbutton = page.locator(`//div[normalize-space(text())='${productname}']`);
        this.goback = page.locator("//button[normalize-space(text())='<- Back']");
        this.addcartbutton = page.locator("//button[normalize-space(text())='ADD TO CART']");
    }

    async selectProduct(){
        await this.productbutton.click();
    }
    async addToCart(){
        await this.addcartbutton.click();
    }
    async goBack(){
        await this.goback.click();
    }
}

