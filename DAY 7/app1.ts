// QUESTION : 19

let guest: string[] = ["Ali", "Subhan", "Farhan", "Salman"];
console.log(`I am inviting ${guest.length} guest for my Dinner`);

// QUESTION : 20

let contries: string[] = ["Pakistan", "Portugal", "New York", "Toronto"];
console.log(`i would like to live in these contry :`, contries);

// QUESTION : 21
let car: {
  make: string;
  model: string;
  year: number;
  features: {
    power: number;
    seats: number;
    airConditioning: boolean;
    navigation: boolean;
    bluetooth: boolean;
  };
} = {
  make: "toyota",
  model: "corrola",
  year: 2014,
  features: {
    power: 120,
    seats: 5,
    airConditioning: true,
    navigation: true,
    bluetooth: true,
  },
};

console.log(`My car is ${car.make} ${car.model} from ${car.year} year`);
// DAY 7 DONE