class weatherAPIData {
  constructor(city) {
    this.city = city;
  }

  async getCurrWeatherData() {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.city}/?unitGroup=metric&include=days&key=X9XTUW6LCMB5SDN7VEBEZ2ABD&contentType=json`,
    );
    const responseJSON = await response.json();
    let currWeather = responseJSON.days[0];
    const currWeatherData = {
      city: this.city,
      date: currWeather.datetime,
      weather: currWeather.conditions,
      temp: currWeather.temp,
      maxTemp: currWeather.tempmax,
      minTemp: currWeather.tempmin,
      UVIndex: currWeather.uvindex,
      precipProb: currWeather.precipprob,
      visiblity: currWeather.visibility,
    };
    return currWeatherData;
  }
}

export { weatherAPIData };
