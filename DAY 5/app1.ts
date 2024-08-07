import { log } from "console";

//QUESTION : 13
let transportation: string[] = ["Honda", "Toyota", "changan", "Kia", "Audi"];

for (let i = 0; i < transportation.length; i++) {
  const element = transportation[i];
  console.log(`i would like to travel on ${element} car!!`);
}
// i personally prefer this approach

// transportation.forEach(result=>{
//     console.log (`i would like to travel on ${result} car!!`)
// })

//QUESTION : 14

let guestList: string[] = ["Ali", "Waqar", "Subhan", "Zakir"];

for (let i = 0; i < guestList.length; i++) {
  let names = guestList[i];
  console.log(`Welcome ${names} to The Party!!!`);
}

//QUESTION : 15

let cannotAttend :string = "Waqar"
console.log(`unfortunatly ${cannotAttend} cannot make dinner with us`);

let newGuest = 'Salman'
guestList[guestList.indexOf(cannotAttend)] = newGuest

for (let i = 0; i < guestList.length; i++) {
    const element = guestList[i];
    console.log(`Welcome ${element} to The Party!!!`)
    
}


// DAY 5 DONE