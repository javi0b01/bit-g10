/* OOP (Object-Oriented Programming) */
// Object literal
const credentials = {
  username: 'pepa',
  password: 'ABC123',
};
console.log(credentials);

// Interfaces
interface ICredential {
  username: string;
  password: string;
  active: boolean;
}

const credential: ICredential = {
  username: 'Fulanito',
  password: 'XYZ321',
  active: true,
};
console.log(credential);

// Classe
class User {
  name: string;
  surname: string;
  age: number;
  email: string;

  constructor(name: string, surname: string, age: number, email: string) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.email = email;
  }

  getInfo() {
    return `${this.name} ${this.surname}, is ${this.age} old, email: ${this.email}`;
  }
}

// Instance
const pepita = new User('Pepita', 'Pérez', 21, 'pepita@example.com');
console.log(pepita);
console.log(pepita.getInfo());
const fulanito = new User('Fulanito', 'De Tal', 22, 'fulanito@demo.com');
console.log(fulanito);
console.log(fulanito.getInfo());

// Inheritance - Superclass and Subclass
class Vehicle {
  move() {
    console.log('The vehicle moves');
  }
}

class Car extends Vehicle {
  honk() {
    console.log('Beep beep!');
  }
}

const car = new Car();
console.log(car);
car.move();
car.honk();

// Polymorphism
class Animal {
  speak() {
    console.log('The animal makes a sound');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Woof!');
  }
}

class Cat extends Animal {
  speak() {
    console.log('Meow!');
  }
}

const dog = new Dog();
const cat = new Cat();

dog.speak();
cat.speak();

// Abstraction
abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  area() {
    return this.side * this.side;
  }
}

const circle = new Circle(2);
console.log(circle.area());
const square = new Square(2);
console.log(square.area());

// Encapsulation
class Cake {
  private flavor: string;

  constructor(flavor: string) {
    this.flavor = flavor;
  }

  getFlavor(): string {
    return this.flavor;
  }

  setFlavor(newFlavor: string): void {
    this.flavor = newFlavor;
  }
}
const cake = new Cake('Vanilla');
console.log(cake.getFlavor());
cake.setFlavor('Chocolate');
console.log(cake.getFlavor());
