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
}
