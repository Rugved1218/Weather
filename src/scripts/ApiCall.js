class weatherAPIData {
  constructor(city) {
    this.city = city;
  }

  async callAPI() {
    const citySearch = this.city;
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${citySearch}/?unitGroup=metric&include=days&key=X9XTUW6LCMB5SDN7VEBEZ2ABD&contentType=json`,
    );
    const responseJSON = await response.json();
    return responseJSON;
  }

  async getCurrWeatherData() {
    let responseJSON = await this.callAPI();
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

  async getDayWeatherData(index) {
    let responseJSON = await this.callAPI();
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
