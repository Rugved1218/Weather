import '../src/styles.css';
import { StringFn } from './HelperFn/strings.js';

import clearDynamicIcon from './weatherIcons/dynamicIcons/clear.svg';
import cloudyDynamicIcon from './weatherIcons/dynamicIcons/cloudy.svg';
import fogDynamicIcon from './weatherIcons/dynamicIcons/fog.svg';
import partlyCloudyDynamicIcon from './weatherIcons/dynamicIcons/partly-cloudy.svg';
import rainDynamicIcon from './weatherIcons/dynamicIcons/rain.svg';
import snowDynamicIcon from './weatherIcons/dynamicIcons/snow.svg';
import windDynamicIcon from './weatherIcons/dynamicIcons/wind.svg';

import clearStaticIcon from './weatherIcons/staticIcons/clear.svg';
import cloudyStaticIcon from './weatherIcons/staticIcons/cloudy.svg';
import fogStaticIcon from './weatherIcons/staticIcons/fog.svg';
import partlyCloudyStaticIcon from './weatherIcons/staticIcons/partly-cloudy.svg';
import rainStaticIcon from './weatherIcons/staticIcons/rain.svg';
import snowStaticIcon from './weatherIcons/staticIcons/snow.svg';
import windStaticIcon from './weatherIcons/staticIcons/wind.svg';

const dynamicIcons = {
  clear: clearDynamicIcon,
  cloudy: cloudyDynamicIcon,
  fog: fogDynamicIcon,
  'partially-cloudy': partlyCloudyDynamicIcon,
  rain: rainDynamicIcon,
  snow: snowDynamicIcon,
  wind: windDynamicIcon,
};

const staticIcons = {
  clear: clearStaticIcon,
  cloudy: cloudyStaticIcon,
  fog: fogStaticIcon,
  'partially-cloudy': partlyCloudyStaticIcon,
  rain: rainStaticIcon,
  snow: snowStaticIcon,
  wind: windStaticIcon,
};

import { SearchWeather } from '../src/scripts/Search.js';

const string = new StringFn();
console.log(string.capitallize('rugved'));
const submitBtn = document.querySelector('.submitBtn');
const searchBar = document.querySelector('.searchBar');

submitBtn.addEventListener('click', async () => {
  const city = searchBar.value;
  const search = new SearchWeather(city);
  const weatherObj = await search.searchWeathLoc();
  const currDateText = document.querySelector('.currDateText');
  currDateText.textContent = `${weatherObj.city} ${weatherObj.date}`;

  console.log(weatherObj.weatherDisplay);
  const visiblityBodyText = document.querySelector('.visibilityBody');
  visiblityBodyText.textContent = weatherObj.visiblity;

  const humidityBodyText = document.querySelector('.humidityBody');
  humidityBodyText.textContent = weatherObj.humidity;

  const uvBodyText = document.querySelector('.uvBody');
  uvBodyText.textContent = weatherObj.uv;

  const maxTempBodyText = document.querySelector('.maxTempBody');
  maxTempBodyText.textContent = weatherObj.maxTemp;

  const minTempBodyText = document.querySelector('.minTempBody');
  minTempBodyText.textContent = weatherObj.minTemp;

  const precipProbBodyText = document.querySelector('.precipProbBody');
  precipProbBodyText.textContent = weatherObj.precipProb;

  const weatherIcon = document.querySelector('.currWeatherIcons');
  weatherIcon.src = dynamicIcons[weatherObj.weatherSvgFormat];
  weatherIcon.alt = `${weatherObj.weatherDisplay} dynamic icon`;

  const currWeatherCondTextDisplay = document.querySelector('.currWeatherCond');
  currWeatherCondTextDisplay.textContent = weatherObj.weatherDisplay;

  const currWeatherTempTextDisplay = document.querySelector('.currTemp');
  currWeatherTempTextDisplay.textContent = weatherObj.temp;

  document.body.classList = ' ';
  document.body.classList = `${weatherObj.weatherSvgFormat}`;
});
