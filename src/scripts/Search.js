import { weatherAPIData } from './ApiCall.js';
import { StringFn } from '../HelperFn/strings.js';

export class SearchWeather {
  constructor(citySearch) {
    this.city = citySearch;
    this.stringFn = new StringFn();
  }

  async searchWeathLoc(citySearch) {
    const weatherData = new weatherAPIData(citySearch);
    const currWeatherData = await weatherData.getCurrWeatherData();
    console.log(currWeatherData);

    let city = currWeatherData.city;
    city = this.stringFn.capitallize(city);
    console.log('City:', city);

    let date = currWeatherData.date;
    date = this.stringFn.convertDate(date);
    console.log(date);

    let weather = currWeatherData.weather;
    weather = this.stringFn.title(weather);
    console.log('Weather:', weather);

    let temp = currWeatherData.temp;
    temp = this.stringFn.temperatureF(temp);
    console.log('Temp:', temp);

    let maxTemp = currWeatherData.maxTemp;
    maxTemp = this.stringFn.temperatureF(maxTemp);
    console.log('Temp Max:', maxTemp);

    let minTemp = currWeatherData.minTemp;
    minTemp = this.stringFn.temperatureF(minTemp);
    console.log('Temp Min:', minTemp);

    let uv = currWeatherData.UVIndex;
    const uvHealth = this.stringFn.uvHealth(uv);
    console.log(`UV Index: ${uv} (${uvHealth})`);

    let humidity = currWeatherData.humidity;
    humidity = this.stringFn.percentage(humidity);
    console.log('Humidity:', humidity);

    let precipProb = currWeatherData.precipProb;
    precipProb = this.stringFn.percentage(precipProb);
    console.log('Precipitation Probablity:', precipProb);

    let visiblity = currWeatherData.visiblity;
    visiblity = this.stringFn.distKm(visiblity);
    console.log('Visiblity:', visiblity);

    return {
      city,
      date,
      weather,
      temp,
      maxTemp,
      minTemp,
      uv,
      humidity,
      precipProb,
      visiblity,
    };
  }
}
