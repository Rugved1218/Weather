import '../src/styles.css';
import { StringFn } from './HelperFn/strings.js';

import { SearchWeather } from '../src/scripts/Search.js';

const string = new StringFn();
console.log(string.capitallize('rugved'));
// Taking User Input for location
const submitBtn = document.querySelector('.submitBtn');
const searchBar = document.querySelector('.searchBar');

submitBtn.addEventListener('click', async () => {
  const city = searchBar.value;
  const search = new SearchWeather(city);
  const weatherObj = await search.searchWeathLoc();
  const currDateText = document.querySelector('.currDateText');
  currDateText.textContent = `${weatherObj.city} ${weatherObj.date}`;

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
  //weatherIcon.src=`./weatherIcons/dynamicIcons/${weatherObj.}`
});
