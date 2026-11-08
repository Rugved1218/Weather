import defaultIcon from '../weatherIcons/dynamicIcons/snow.svg';

import clearStaticIcon from '../weatherIcons/staticIcons/clear.svg';
import cloudyStaticIcon from '../weatherIcons/staticIcons/cloudy.svg';
import fogStaticIcon from '../weatherIcons/staticIcons/fog.svg';
import partiallyCloudyStaticIcon from '../weatherIcons/staticIcons/partially-cloudy.svg';
import rainStaticIcon from '../weatherIcons/staticIcons/rain.svg';
import snowStaticIcon from '../weatherIcons/staticIcons/snow.svg';
import windStaticIcon from '../weatherIcons/staticIcons/wind.svg';

let staticIcons = [
  clearStaticIcon,
  cloudyStaticIcon,
  fogStaticIcon,
  partiallyCloudyStaticIcon,
  rainStaticIcon,
  snowStaticIcon,
  windStaticIcon,
];
let staticIconsAlt = [
  'clear-day-static',
  'cloudy-day-static',
  'fog-day-static',
  'partially-cloudy-day-static',
  'rain-day-static',
  'snow-day-static',
  'wind-day-static',
];
function resetPage() {
  const currDateText = document.querySelector('.currDateText');

  const visiblityBodyText = document.querySelector('.visibilityBody');
  visiblityBodyText.textContent = '--';

  const humidityBodyText = document.querySelector('.humidityBody');
  humidityBodyText.textContent = '--';

  const uvBodyText = document.querySelector('.uvBody');
  uvBodyText.textContent = '--';

  const maxTempBodyText = document.querySelector('.maxTempBody');
  maxTempBodyText.textContent = '--';

  const minTempBodyText = document.querySelector('.minTempBody');
  minTempBodyText.textContent = '--';

  const precipProbBodyText = document.querySelector('.precipProbBody');
  precipProbBodyText.textContent = '--';

  const weatherIcon = document.querySelector('.currWeatherIcons');
  weatherIcon.src = defaultIcon;
  weatherIcon.classList.add('empty');
  weatherIcon.alt = 'No weather loaded yet';

  const currWeatherCondTextDisplay = document.querySelector('.currWeatherCond');
  currWeatherCondTextDisplay.textContent = '--';

  const currWeatherTempTextDisplay = document.querySelector('.currTemp');
  currWeatherTempTextDisplay.textContent = '--';

  document.body.classList = ' ';

  let dayHeading = document.querySelectorAll('.dayName.sevenDays');
  let dayIcon = document.querySelectorAll('.icon.sevenDays');
  let maxTemp = document.querySelectorAll('.maxTemp.sevenDays');
  let minTemp = document.querySelectorAll('.minTemp.sevenDays');

  dayHeading.forEach((dayHeaders) => {
    dayHeaders.textContent = '--';
  });
  dayIcon.forEach((dayIcons, i) => {
    dayIcons.src = staticIcons[i];
    dayIcons.alt = staticIconsAlt[i];
  });
  maxTemp.forEach((maxTempValues) => {
    maxTempValues.textContent = '--';
  });
  minTemp.forEach((minTempValues) => {
    minTempValues.textContent = '--';
  });
}

export { resetPage };
