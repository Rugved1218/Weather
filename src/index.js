import "../src/styles.css";
import { weatherAPIData } from "../src/scripts/ApiCall.js";
import { searchWeathLoc } from "../src/scripts/Search.js";

let city = "pune";
const weatherData = new weatherAPIData(city);
const currWeatherData = await weatherData.getCurrWeatherData();

searchWeathLoc();
