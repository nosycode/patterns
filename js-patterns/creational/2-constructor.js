/**
 * Constructor pattern
 * 
 * Use the constructor pattern to create more 
 * classes by extending and not repeating the 
 * same information every single time.
 */
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class Suv extends Car {
  constructor(doors, engine, color) {
    super(doors, engine, color);
    this.wheels = 4;
  }
}

const civic = new Car(4, 'V6', 'grey');
const cx5 = new Suv(4, 'V8', 'red');

console.log(civic); // Car { doors: 4, engine: 'V6', color: 'grey' }
console.log(cx5);   // Suv { doors: 4, engine: 'V8', color: 'red', wheels: 4 }
