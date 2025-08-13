export interface User{
    email : string,
    password : string,
}


export const users : User[] = [{
    email : "performance_glitch_user",
    password : "secret_sauce",
},
{
    email : "standard_user",
    password : "secret_sauce",
},
{
    email : "locked_out_user",
    password : "secret_sauce"
},
{
    email : "problem_user",
    password : "secret_sauce"
}];

export const invalidUser = {
    email : "invalid_user",
    password : "wrong_password"
};


export const Products = {
    product1 : "Sauce Labs Backpack",
    product2 : "Sauce Labs Bike Light",
    product3 : "Sauce Labs Bolt T-Shirt",
    product4 : "Sauce Labs Fleece Jacket",
    product5 : "Sauce Labs Onesie",
    product6 : "Test.allTheThings() T-Shirt (Red)",
};