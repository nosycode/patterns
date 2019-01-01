import { WeatherData } from './WeatherData';
import { CurrentConditionsDisplay } from './CurrentConditionsDisplay';
import { StatisticsDisplay } from './StatisticsDisplay';
import { ForecastDisplay } from './ForecastDisplay';
import { HeatIndexDisplay } from './HeatIndexDisplay';

export default () => {
  const weatherData: WeatherData = new WeatherData();
  new CurrentConditionsDisplay(weatherData);
  new StatisticsDisplay(weatherData);
  new ForecastDisplay(weatherData);
  new HeatIndexDisplay(weatherData);

  weatherData.setMeasurements(80, 65, 30.4);
  weatherData.setMeasurements(82, 70, 29.2);
  weatherData.setMeasurements(78, 90, 29.2);
}
