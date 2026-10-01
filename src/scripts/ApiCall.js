class weatherAPIData {
  constructor(city) {
    this.city = city;
  }

  async getWeatherLoc() {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.city}?unitGroup=metric&include=days&key=X9XTUW6LCMB5SDN7VEBEZ2ABD&contentType=json`,
    );
    const responseJSON = await response.json();
    let weather = responseJSON.days[0].conditions;
    return weather;
  }
}

export { weatherAPIData };
