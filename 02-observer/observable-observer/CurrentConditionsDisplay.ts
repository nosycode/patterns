import { Observable } from './Observable';
import { WeatherData } from './WeatherData';
import { DisplayElement } from './DisplayElement';
import { Observer } from './Observer';

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  private observable: Observable;
  constructor(observable: Observable) {
    this.observable = observable;
    observable.addObserver(this);
  }
  update(obs: Observable, arg: Object): void {
    if (obs instanceof WeatherData) {
      const weatherData: WeatherData = obs;
      this.temperature = weatherData.getTemperature();
      this.humidity = weatherData.getHumidity();
      this.display();
    }
  }
  display(): void {
    console.log(`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`);
  }
}
