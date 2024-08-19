//QUESTION : 34

import { log } from "console";

let pizzaList: string[] = [
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

let animals: string[] = ["Cat", "Dog", "goat"];

animals.forEach((animal) => {
  console.log(`i would like to pet a ${animal} `);
});

console.log(`I have a craze of animals!!!`);

// QUESTION : 36(CUSTOMIZEABLE t-SHIRT)

function TShirt(color: string, size: string, material: string) {

  console.log(`I'm going to make a ${color} color,${size} size,and a ${material} t-shirt.`);
}

TShirt("red", "medium", "cotton");

//DAY 12 DONE
