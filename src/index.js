import "../src/styles.css";
import { weatherAPIData } from "../src/scripts/ApiCall.js";
let city = "pune";
const weatherData = new weatherAPIData(city);
const currWeather = await weatherData.getWeatherLoc();
console.log(currWeather);
