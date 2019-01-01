import { Subject } from './Subject';
import { DisplayElement } from './DisplayElement';
import { Observer } from './Observer';

export class StatisticsDisplay implements Observer, DisplayElement {
  private maxTemp: number = 0;
	private minTemp: number = 200;
	private tempSum: number = 0;
	private numReadings: number = 0;
  private weatherData: Subject;
  
  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
		weatherData.registerObserver(this);
  }

  update(temp: number, humidity: number, pressure: number): void {
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
  
  display(): void {
		console.log(`Avg/Max/Min temperature = ${this.tempSum / this.numReadings}/${this.maxTemp}/${this.minTemp}`);
	}
}
