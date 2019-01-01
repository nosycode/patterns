import { WeatherData } from './WeatherData';
import { CurrentConditionsDisplay } from './CurrentConditionsDisplay';
import { StatisticsDisplay } from './StatisticsDisplay';
import { ForecastDisplay } from './ForecastDisplay';
import { HeatIndexDisplay } from './HeatIndexDisplay';

export default () => {
  const weatherData: WeatherData = new WeatherData();
  const currentDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
  const statisticsDisplay: StatisticsDisplay = new StatisticsDisplay(weatherData);
  const forecastDisplay: ForecastDisplay = new ForecastDisplay(weatherData);
  const heatIndexDisplay: HeatIndexDisplay = new HeatIndexDisplay(weatherData);

  weatherData.setMeasurements(80, 65, 30.4);
  weatherData.setMeasurements(82, 70, 29.2);
  weatherData.setMeasurements(78, 90, 29.2);
}

