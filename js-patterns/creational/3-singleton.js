/**
 * Singleton pattern
 * 
 * The singleton pattern makes sure that we don't 
 * have more than one instance of a particular class.
 */
let instance = null;

class Car {
  constructor(doors, engine, color) {
    if (instance) {
      return instance;
    }
    this.doors = doors;
    this.engine = engine;
    this.color = color;
    instance = this;
  }
}

const civic = new Car(4, 'V6', 'grey');
const honda = new Car(2, 'V4', 'red');

console.log(civic); // Car { doors: 4, engine: 'V6', color: 'grey' }
console.log(honda); // Car { doors: 4, engine: 'V6', color: 'grey' }
