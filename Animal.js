class Animal {
  #age; // data pribadi so it's set to private

  constructor(name, food, canReproduce, energy, age) {
    this.name = name;
    this.food = food;
    this.canReproduce = canReproduce;
    this.energy = energy;
    this.age = age;

    this.#age = 20;
  }

  //   // breaking encapsulation
  //   get showAge() {
  //     return this.#age;
  //   }

  getAge() {
    return this.#age;
  }

  // tell dont ask (TDA) principle
  isAdult() {
    return this.#age > 18;
  }
}

export default Animal;
