class weatherAPIData {
  constructor(city) {
    this.city = city;
  }

  async getCurrWeatherData() {
    const citySearch = this.city;
    console.log(citySearch);
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${citySearch}/?unitGroup=metric&include=days&key=X9XTUW6LCMB5SDN7VEBEZ2ABD&contentType=json`,
    );
    const responseJSON = await response.json();
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
}

export { weatherAPIData };
