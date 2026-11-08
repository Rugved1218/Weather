import '../src/styles.css';
import { StringFn } from './HelperFn/strings.js';

import clearDynamicIcon from './weatherIcons/dynamicIcons/clear.svg';
import cloudyDynamicIcon from './weatherIcons/dynamicIcons/cloudy.svg';
import fogDynamicIcon from './weatherIcons/dynamicIcons/fog.svg';
import partiallyCloudyDynamicIcon from './weatherIcons/dynamicIcons/partially-cloudy.svg';
import rainDynamicIcon from './weatherIcons/dynamicIcons/rain.svg';
import snowDynamicIcon from './weatherIcons/dynamicIcons/snow.svg';
import windDynamicIcon from './weatherIcons/dynamicIcons/wind.svg';

import clearStaticIcon from './weatherIcons/staticIcons/clear.svg';
import cloudyStaticIcon from './weatherIcons/staticIcons/cloudy.svg';
import fogStaticIcon from './weatherIcons/staticIcons/fog.svg';
import partiallyCloudyStaticIcon from './weatherIcons/staticIcons/partially-cloudy.svg';
import rainStaticIcon from './weatherIcons/staticIcons/rain.svg';
import snowStaticIcon from './weatherIcons/staticIcons/snow.svg';
import windStaticIcon from './weatherIcons/staticIcons/wind.svg';

const dynamicIcons = {
  clear: clearDynamicIcon,
  cloudy: cloudyDynamicIcon,
  overcast: cloudyDynamicIcon,
  fog: fogDynamicIcon,
  'partially-cloudy': partiallyCloudyDynamicIcon,
  rain: rainDynamicIcon,
  snow: snowDynamicIcon,
  wind: windDynamicIcon,
};

const staticIcons = {
  clear: clearStaticIcon,
  cloudy: cloudyStaticIcon,
  overcast: cloudyStaticIcon,
  fog: fogStaticIcon,
  'partially-cloudy': partiallyCloudyStaticIcon,
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
  const currWeatherObj = await search.searchWeathLoc();
  const currDateText = document.querySelector('.currDateText');
  currDateText.textContent = `${currWeatherObj.city} ${currWeatherObj.date}`;

  const visiblityBodyText = document.querySelector('.visibilityBody');
  visiblityBodyText.textContent = currWeatherObj.visiblity;

  const humidityBodyText = document.querySelector('.humidityBody');
  humidityBodyText.textContent = currWeatherObj.humidity;

  const uvBodyText = document.querySelector('.uvBody');
  uvBodyText.textContent = `${currWeatherObj.uv} (${currWeatherObj.uvHealth})`;

  const maxTempBodyText = document.querySelector('.maxTempBody');
  maxTempBodyText.textContent = currWeatherObj.maxTemp;

  const minTempBodyText = document.querySelector('.minTempBody');
  minTempBodyText.textContent = currWeatherObj.minTemp;

  const precipProbBodyText = document.querySelector('.precipProbBody');
  precipProbBodyText.textContent = currWeatherObj.precipProb;

  const weatherIcon = document.querySelector('.currWeatherIcons');
  weatherIcon.src = dynamicIcons[currWeatherObj.weatherSvgFormat];
  weatherIcon.classList.remove('empty');
  weatherIcon.alt = `${currWeatherObj.weatherDisplay} dynamic icon`;

  const currWeatherCondTextDisplay = document.querySelector('.currWeatherCond');
  currWeatherCondTextDisplay.textContent = currWeatherObj.weatherDisplay;

  const currWeatherTempTextDisplay = document.querySelector('.currTemp');
  currWeatherTempTextDisplay.textContent = currWeatherObj.temp;

  document.body.classList = ' ';
  document.body.classList = `${currWeatherObj.weatherSvgFormat}`;

  let dayHeading = document.querySelectorAll('.dayName.sevenDays');
  let dayIcon = document.querySelectorAll('.icon.sevenDays');
  let maxTemp = document.querySelectorAll('.maxTemp.sevenDays');
  let minTemp = document.querySelectorAll('.minTemp.sevenDays');

  const forecastData = await Promise.all(
    Array.from({ length: 7 }, (_, i) => search.searchDayWeathLoc(i)),
  );

  forecastData.forEach((dayWeatherObj, i) => {
    console.log(`Day ${i + 1}`);
    console.log(dayWeatherObj);
    dayHeading[i].textContent = dayWeatherObj.day;
    dayIcon[i].src = staticIcons[dayWeatherObj.weatherIcon];
    dayIcon[i].alt = `${dayWeatherObj.weatherIcon} static icon`;
    maxTemp[i].textContent = dayWeatherObj.maxTemp;
    minTemp[i].textContent = dayWeatherObj.minTemp;
  });
});
