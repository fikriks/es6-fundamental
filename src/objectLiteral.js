/*
    Object Literal
*/

// ES5
function addProduct(name, category){
    return {
        name: name,
        category: category
    }
}

let getProduct = addProduct("Iphone 13 Pro Max", "Gadget");
console.log(`Object Literal Pada ES5 = Produk : ${getProduct.name}, Category : ${getProduct.category}`);

// ES6
function addProduct1(name, category){
    return {
        name,
        category
    }
}

let getProduct1 = addProduct1("Iphone 13 Pro Max", "Gadget");
console.log(`Object Literal Pada ES6 = Produk : ${getProduct1.name}, Category : ${getProduct1.category}`);