class weatherAPIData {
  constructor(city) {
    this.city = city;
  }

  async callAPI() {
    const citySearch = this.city;
    let cityTrimmed = citySearch.trim();
    if (cityTrimmed.length == 0) throw new Error('City cannot be empty');
    let response;
    try {
      response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${citySearch}/?unitGroup=metric&include=days&key=X9XTUW6LCMB5SDN7VEBEZ2ABD&contentType=json`,
      );
    } catch {
      throw new Error('Failed to fetch Data');
    }

    if (!response.ok) {
      if (response.status === 400) throw new Error('City not found');
      if (response.status === 429)
        throw new Error('Weather Data not available rn, pls check later');
      else throw new Error('Something went wrong, please try again');
    }
    const responseJSON = await response.json();
    return responseJSON;
  }

  getCurrWeatherData(responseJSON) {
    console.log(responseJSON);
    let currWeather = responseJSON.days[0];
    const currWeatherData = {
      city: responseJSON.address,
      date: currWeather.datetime,
      weather: currWeather.conditions,
      temp: currWeather.temp,
      maxTemp: currWeather.tempmax,
      minTemp: currWeather.tempmin,
      UVIndex: currWeather.uvindex,
      precipProb: currWeather.precipprob,
      visiblity: currWeather.visibility,
      humidity: currWeather.humidity,
    };
    return currWeatherData;
  }

  getDayWeatherData(responseJSON, index) {
    let dayWeather = responseJSON.days[index];

    const dayWeatherData = {
      date: dayWeather.datetime,
      weather: dayWeather.conditions,
      maxTemp: dayWeather.tempmax,
      minTemp: dayWeather.tempmin,
    };
    return dayWeatherData;
  }
}

export { weatherAPIData };
