import Animal from "./Animal.js";
import Mammal from "./Mammal.js";

const elephant = new Animal("Gajah", "Herbivore", 100, true, 100);
const tiger = new Animal("Macan", "Carnivore", 50, true, 19);
const orangutan = new Mammal("Orangutan", "herbivore", 100, false, 21);

// // type of modifiers
// 1. public
console.log(tiger);
console.log(tiger.food);

// 2. private (define with hastag)
// console.log(tiger.showAge());
console.log(tiger.isAdult());

console.log(orangutan);
console.log(orangutan.isAdult());
