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
  console.log(search);
  const weatherObj = await search.searchWeathLoc();
  console.log(weatherObj);
  const currDateText = document.querySelector('.currDateText');
  currDateText.textContent = `${weatherObj.city} ${weatherObj.date}`;
});
