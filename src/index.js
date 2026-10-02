import "../src/styles.css";
import { weatherAPIData } from "../src/scripts/ApiCall.js";
let city = "pune";
const weatherData = new weatherAPIData(city);
const currWeatherData = await weatherData.getCurrWeatherData();
console.log(currWeatherData);
