import { Subject } from './Subject';
import { DisplayElement } from './DisplayElement';
import { Observer } from './Observer';

export class ForecastDisplay implements Observer, DisplayElement {
  private currentPressure: number = 29.92;  
	private lastPressure: number;
  private weatherData: Subject;
  
  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
		weatherData.registerObserver(this);
  }

  update(temp: number, humidity: number, pressure: number) {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure;

    this.display();
  }

  display() {
    let message: string;
    if (this.currentPressure > this.lastPressure) {
			message = "Improving weather on the way!";
		} else if (this.currentPressure === this.lastPressure) {
			message = "More of the same";
		} else if (this.currentPressure < this.lastPressure) {
			message = "Watch out for cooler, rainy weather";
		}
    console.log(`Forecast: ${message}`);
	}
}
