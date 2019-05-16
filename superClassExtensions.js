class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + " makes a noise, ";
  }
}

class Cat extends Animal {
  speak() {
    const baseMethod = super.speak();
    return baseMethod + `${this.name} goes meow.`;
  }
}

let cat = new Cat("Mr Whiskers");
console.log(cat.speak());
