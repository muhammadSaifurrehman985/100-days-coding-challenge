"use strict";
//   day 13 
// QUESTION NO :37
function DefaultTShirt(size = "large", message = "i love every language") {
    console.log(`The size of the shirt is ${size} and this text will be on shirt : ${message}`);
}
DefaultTShirt(); // large, i love every language
DefaultTShirt("medium"); // medium, i love every language
DefaultTShirt("small", "i love programming"); // small, i love programming
//QUESTION NO : 38
function cities(cityName, contryName = "Pakistan") {
    console.log(`${cityName} is in this ${contryName}`);
}
cities("karachi");
//QUESTION NO : 39
function contryCites(cityName, contryName) {
    console.log(`${cityName} is in ${contryName}`);
}
contryCites("Islamabad", "Pakistan");
