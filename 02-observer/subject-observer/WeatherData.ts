import { Subject } from './Subject';
import { Observer } from './observer';

export class WeatherData implements Subject {
  private observers: Observer[];
  private temperature: number;
  private humidity: number;
  private pressure: number;
  constructor() {
    this.observers = [];
  }
  registerObserver(o: Observer): void {
    this.observers.push(o);
  }
  removeObserver(o: Observer): void {
    const i: number = this.observers.indexOf(o);
    if (i >= 0) {
      this.observers.splice(i, 1);
    }
  }
  notifyObservers(): void {
    for (let i: number = 0; i < this.observers.length; i += 1) {
      this.observers[i].update(this.temperature, this.humidity, this.pressure);
    }
  }
  measurementsChanged(): void {
    this.notifyObservers();
  }
  setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}
