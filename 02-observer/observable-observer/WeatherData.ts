import { Observable } from './Observable';

export class WeatherData extends Observable {
  private temperature: number;
  private humidity: number;
  private pressure: number;

  measurementsChanged(): void {
    this.setChanged();
    this.notifyObservers();
  }
  setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  getTemperature(): number {
    return this.temperature;
  }

  getHumidity(): number {
    return this.humidity;
  }

  getPressure(): number {
    return this.pressure;
  }
}
