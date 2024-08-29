class Car {
  name: string;

  constructor(input: string) {
    this.name = input;
  }
}

const bmw = new Car("BMW");

if (bmw instanceof Car) {
  console.log("yes you are right");
}

console.log(bmw);
