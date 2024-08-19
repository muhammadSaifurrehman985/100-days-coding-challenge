"use strict";
//QUESTION : 31
let userName = [];
if (userName.length === 0) {
    console.log(`our array is empty`);
}
else {
    console.log(`we need to find some more users`);
}
//QUESTION : 32
let oldUserName = ["User1", "user2", "user3", "admin", "manager"];
let newUserName = ["User1", "manager", "Admin", "user2", "User3"];
newUserName.forEach(newUser => {
    if (oldUserName.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
//QUESTION : 33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
numbers.forEach((result) => {
    let suffix = "th";
    if (result == 1) {
        suffix = "st";
    }
    else if (result == 2) {
        suffix = "nd";
    }
    else if (result == 3) {
        suffix = "rd";
    }
    console.log(`${result}${suffix}`);
});
