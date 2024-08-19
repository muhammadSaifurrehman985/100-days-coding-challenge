"use strict";
//QUESTION :28
let age = 45;
if (age >= 1 && age <= 9) {
    console.log("You are a todler ");
}
else if (age >= 10 && age <= 18) {
    console.log("You are a boy");
}
else if (age >= 19 && age <= 25) {
    console.log("You are a young Man ");
}
else if (age >= 26 && age <= 40) {
    console.log("You are an adult");
}
else if (age >= 41 && age <= 60) {
    console.log("You are on a old age ");
}
else {
    console.log("You are very old");
}
// QUESTION : 29
let favoriteFruits = ["apples", "bananas", "cherries"];
if (favoriteFruits.includes("apples")) {
    console.log('apple is my favorite fruit');
}
if (favoriteFruits.includes("bananas")) {
    console.log('bananas is my favorite fruit');
}
if (favoriteFruits.includes("cherries")) {
    console.log('cherries is my favorite fruit');
}
if (favoriteFruits.includes("kiwies")) {
    console.log('kiwies is my favorite fruit');
}
if (favoriteFruits.includes("strawberries")) {
    console.log('strawberries is my favorite fruit');
}
//QUESTION : 30
let userName = ["Admin", "Ali", "Ukasha", "Ijaz", "Zia", "Farhan"];
userName.forEach((result) => {
    if (result === "Admin") {
        console.log(`Hello Admin welcome home`);
    }
    else {
        console.log(`Hello ${result} hoe are you`);
    }
});
