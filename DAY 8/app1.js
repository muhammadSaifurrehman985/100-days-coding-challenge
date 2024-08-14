"use strict";
//QUESTION: 22
let array = ["a", "b", "c", "d"];
let result = array[5]; // = "f"  // in this case index 5 will be occupied by 9f)
console.log(result);
let result2 = array[4]; // in this case index 4 will be undefined
console.log(result2);
//QUESTION: 23 =Conditional Tests: Write a series of conditional tests.
// Predict the results of each test.
let a = 10;
let b = 20;
if (a === b) { // in this condition a is not equal to b as we can see above :let a : number= 10
    console.log("The value is same"); // so this condition will not execute
}
else if (a != b) { // in this condition code will execute because of the changed values
    console.log("The value is not same");
}
else {
    console.log("The value is neither true not false"); // if we wil pass another type of value this conition will execute
}
// QUESTION : 24 MORE TESTT 
let value1 = "value1";
let value2 = "value2";
console.log(value1 == value2); // FALSE
console.log(value1.toLowerCase() === "value1"); //TRUE
console.log(value1.toUpperCase() === "value1"); //FALSE
console.log(value1.toUpperCase() === "VALUE1"); //TRUE
console.log(value2.toUpperCase() === "VALUE2"); //TRUE
console.log(value2.toLowerCase() === "Value1"); //FALSE
console.log(2 + 3 === 3 + 2); // TRUE
console.log(2 + 3 * 4 === 14); // TRUE
console.log(2 + 3 * 4 || (4 + 3) * 4); // 14
let array1 = ["mango", "apple", " kiwi", "orange"];
console.log(array1.includes("mango")); // true
console.log(array1.includes("strawberry")); //FALSE
