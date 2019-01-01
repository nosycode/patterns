import { Observable } from './Observable';
import { DisplayElement } from './DisplayElement';
import { Observer } from './Observer';
import { WeatherData } from './WeatherData';

export class ForecastDisplay implements Observer, DisplayElement {
  private currentPressure: number = 29.92;  
	private lastPressure: number;
  
  constructor(observable: Observable) {
		observable.addObserver(this);
  }

  update(observable: Observable, arg: Object) {
    if (observable instanceof WeatherData) {
      const weatherData: WeatherData = observable;
      this.lastPressure = this.currentPressure;
      this.currentPressure = weatherData.getPressure();
  
      this.display();
    }
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
