import { weatherAPIData } from "./ApiCall.js";
import { StringFn } from "../HelperFn/strings.js";
const stringFn = new StringFn();

export async function searchWeathLoc() {
  const citySearch = window.prompt("Enter City");
  //const citySearch = "pune";
  const weatherData = new weatherAPIData(citySearch);
  const currWeatherData = await weatherData.getCurrWeatherData();

  let city = currWeatherData.city;
  city = stringFn.capitallize(city);
  console.log("City:", city);

  let date = currWeatherData.date;
  date = stringFn.convertDate(date);
  console.log(date);

  let weather = currWeatherData.weather;
  weather = stringFn.title(weather);
  console.log("Weather:", weather);

  let temp = currWeatherData.temp;
  temp = stringFn.temperatureF(temp);
  console.log("Temp:", temp);

  let maxTemp = currWeatherData.maxTemp;
  maxTemp = stringFn.temperatureF(maxTemp);
  console.log("Temp Max:", maxTemp);

  let minTemp = currWeatherData.minTemp;
  minTemp = stringFn.temperatureF(minTemp);
  console.log("Temp Min:", minTemp);

  let uv = currWeatherData.UVIndex;
  const uvHealth = stringFn.uvHealth(uv);
  console.log(`UV Index: ${uv} (${uvHealth})`);

  let humidity = currWeatherData.humidity;
  humidity = stringFn.percentage(humidity);
  console.log("Humidity:", humidity);

  let precipProb = currWeatherData.precipProb;
  precipProb = stringFn.percentage(precipProb);
  console.log("Precipitation Probablity:", precipProb);

  let visiblity = currWeatherData.visiblity;
  visiblity = stringFn.distKm(visiblity);
  console.log("Visiblity:", visiblity);
}
