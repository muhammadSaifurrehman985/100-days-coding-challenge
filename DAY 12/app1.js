"use strict";
//QUESTION : 34
Object.defineProperty(exports, "__esModule", { value: true });
let pizzaList = [
    "Chicken pizza",
    "Tikka pizza",
    "Fajita pizza",
    "Peperoni pizza",
    "Tandoori pizza",
    "Beef pizza",
];
pizzaList.forEach((pizza) => {
    console.log(`${pizza} is my favorite pizza`);
});
console.log(`I really like Pizzas`);
// QUESTION :35
let animals = ["Cat", "Dog", "goat"];
animals.forEach((animal) => {
    console.log(`i would like to pet a ${animal} `);
});
console.log(`I have a craze of animals!!!`);
// QUESTION : 36(CUSTOMIZEABLE t-SHIRT)
function TShirt(color, size, material) {
    console.log(`I'm going to make a ${color}color,${size} size,and a ${material} t-shirt.`);
}
TShirt("red", "medium", "cotton");
