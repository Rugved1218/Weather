import { weatherAPIData } from './ApiCall.js';
import { StringFn } from '../HelperFn/strings.js';

export class SearchWeather {
  constructor(citySearch) {
    this.city = citySearch;
    this.stringFn = new StringFn();
    this.weatherData = new weatherAPIData(this.city);
    this.data;
  }

  async load() {
    this.data = await this.weatherData.callAPI();
  }

  searchWeathLoc() {
    const currWeatherData = this.weatherData.getCurrWeatherData(this.data);

    let city = currWeatherData.city;
    city = city.toLowerCase();
    city = this.stringFn.capitallize(city);

    let date = currWeatherData.date;
    date = this.stringFn.convertDate(date);

    let weatherDisplay = currWeatherData.weather;
    weatherDisplay = this.stringFn.convertWeather2DisplayForm(weatherDisplay);

    let weatherSvgFormat = currWeatherData.weather;
    weatherSvgFormat = this.stringFn.convertWeather2SVGForm(weatherSvgFormat);

    let temp = currWeatherData.temp;
    temp = this.stringFn.temperatureC(temp);

    let maxTemp = currWeatherData.maxTemp;
    maxTemp = this.stringFn.temperatureC(maxTemp);

    let minTemp = currWeatherData.minTemp;
    minTemp = this.stringFn.temperatureC(minTemp);

    let uv = currWeatherData.UVIndex;
    const uvHealth = this.stringFn.uvHealth(uv);

    let humidity = currWeatherData.humidity;
    humidity = this.stringFn.percentage(humidity);

    let precipProb = currWeatherData.precipProb;
    precipProb = this.stringFn.percentage(precipProb);

    let visiblity = currWeatherData.visiblity;
    visiblity = this.stringFn.distKm(visiblity);

    return {
      city,
      date,
      weatherDisplay,
      weatherSvgFormat,
      temp,
      maxTemp,
      minTemp,
      uv,
      uvHealth,
      humidity,
      precipProb,
      visiblity,
    };
  }

  searchDayWeathLoc(index) {
    const dayWeatherData = this.weatherData.getDayWeatherData(this.data, index);

    let date = dayWeatherData.date;
    let day = this.stringFn.convertDate2Day(date, index);

    let weatherIcon = dayWeatherData.weather;
    weatherIcon = this.stringFn.convertWeather2SVGForm(weatherIcon);

    let maxTemp = dayWeatherData.maxTemp;
    maxTemp = this.stringFn.temperatureC(maxTemp);

    let minTemp = dayWeatherData.minTemp;
    minTemp = this.stringFn.temperatureC(minTemp);

    return {
      date,
      day,
      weatherIcon,
      maxTemp,
      minTemp,
    };
  }
}
