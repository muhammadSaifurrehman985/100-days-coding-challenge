// QUESTION : 16

let guest :string[]=["Ahmed","Farha","Ali"]
console.log(`Hurray i found a bigger table now`);

guest.push("Salman")
guest.unshift("Subhan")
guest.splice(guest.length / 2,1 , "Azain")

guest.forEach((result)=>{
    console.log (`Welcome ${result} you are invited to my party!!!`)
})

// QUESTION : 17
while (guest.length > 2) {
    let remoeveGuest = guest.pop()
    console.log(`Sorry ${remoeveGuest} i can't invite you to my party anymore.`)
}

guest.forEach((result)=>{
    console.log (`Welcome ${result} you are still invited to my party!!!`)
})

guest.splice(0,guest.length)
console.log(guest,` this is the empty array of party members`);


//QUESTION : 18

let places : string []= ["Saudia","America","Cananda","New York","London"]

console.log(`orignal Array :`,places);

console.log(`Sorted Array :`,places.sort());

console.log(`reversed Array :`,places.reverse());

console.log(`Reversed Sorted Array :`,places.sort().reverse());

console.log("Alphabetical order Array:", [...places].sort());

// Day 6 done
