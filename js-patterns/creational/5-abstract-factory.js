/**
 * Abstract Factory pattern
 * 
 * The abstract factory pattern abstract the factories 
 * and is able to create multiple factories, classes, etc. 
 */
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case 'civic':
        return new Car(4, 'V6', 'grey');
      case 'honda':
        return new Car(2, 'V4', 'red');
    }
  }
}

class Suv extends Car {
  constructor(doors, engine, color) {
    super(doors, engine, color);
    this.wheels = 4;
  }
}

class SuvFactory {
  createSuv(type) {
    switch (type) {
      case 'cx5':
        return new Suv(4, 'V8', 'red');
      case 'sante fe':
        return new Suv(4, 'V6', 'blue');
    }
  }
}

const carFactory =  new CarFactory();
const suvFactory =  new SuvFactory();

const autoManufacturer = (type, model) => {
  switch (type) {
    case 'car':
      return carFactory.createCar(model);
    case 'suv':
      return suvFactory.createSuv(model);
  }
}

const civic = autoManufacturer('car', 'civic');
const cx5 = autoManufacturer('suv', 'cx5');

console.log(civic); // Car { doors: 4, engine: 'V8', color: 'grey' }
console.log(cx5);   // Suv { doors: 4, engine: 'V8', color: 'red', wheels: 4 }
