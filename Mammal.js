import Animal from "./Animal.js";

class Mammal extends Animal {
  constructor(name, food, canReproduce, energy, age) {
    super(name, food, canReproduce, energy, age);
  }

  isAdult() {
    return this.getAge() > 50;
  }
}

export default Mammal;
