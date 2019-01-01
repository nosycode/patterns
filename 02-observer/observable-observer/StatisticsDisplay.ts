import { Observable } from './Observable';
import { DisplayElement } from './DisplayElement';
import { Observer } from './Observer';
import { WeatherData } from './WeatherData';

export class StatisticsDisplay implements Observer, DisplayElement {
  private maxTemp: number = 0;
	private minTemp: number = 200;
	private tempSum: number = 0;
	private numReadings: number = 0;
  private observable: Observable;
  
  constructor(observable: Observable) {
    this.observable = observable;
		observable.addObserver(this);
  }

  update(observable: Observable, arg: Object) {
    if (observable instanceof WeatherData) {
      const weatherData: WeatherData = observable;
      const temp: number = weatherData.getTemperature();
      this.tempSum += temp;
      this.numReadings += 1;

      if (temp > this.maxTemp) {
        this.maxTemp = temp;
      }
  
      if (temp < this.minTemp) {
        this.minTemp = temp;
      }

      this.display();
    }
  }
  
  display(): void {
		console.log(`Avg/Max/Min temperature = ${this.tempSum / this.numReadings}/${this.maxTemp}/${this.minTemp}`);
	}
}
