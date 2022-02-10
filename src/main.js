console.log("Hello World!");

/*
    Variable
*/

// ES5
var myName = "Fikri Khairul Shaleh";

myName = "Fikri KS";
console.log(`Var pada ES5 : ${myName}`);

// ES6
// Const tidak bisa diubah
// Let bisa diubah

const myCar = "Lamborghini";
// myCar = "Ayla"; -> error

console.log(`Const pada ES6 : ${myCar}`);

let myClothes = "Wadezig"; 
myClothes = "AHHA";

console.log(`Let pada ES6 : ${myClothes}`);

/*
    String Concatenation
*/

const user = document.getElementById('user');
const user1 = document.getElementById('user1');
const user_logged = "Fikri";

// ES5
user.innerHTML = "Hi, " + user_logged + " Apa Kabar?";

// ES6
user1.innerHTML = `Hi, ${user_logged} Apa Kabar?`;