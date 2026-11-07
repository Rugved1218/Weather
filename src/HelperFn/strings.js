class StringFn {
  capitallize(string) {
    const firstChar = string[0].toUpperCase();
    const rest = string.slice(1);
    return firstChar + rest;
  }

  temperatureC(string) {
    return string + '°C';
  }

  title(string) {
    let strings = string.split(' ');
    strings.forEach((stringBr, index) => {
      strings[index] = this.capitallize(stringBr);
    });
    return strings.join(' ');
  }

  distKm(string) {
    return string + 'km';
  }

  percentage(string) {
    return string + '%';
  }

  convertDate(string) {
    const [year, month, day] = string.split('-');

    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];

    const monthName = months[parseInt(month, 10) - 1];

    return ` ${day}th ${monthName}, ${year}`;
  }

  uvHealth(uv) {
    const uvInt = parseInt(uv);
    if (0 <= uvInt && uvInt <= 2) return 'Low';
    else if (3 <= uvInt && uvInt <= 5) return 'Moderate';
    else if (6 <= uvInt && uvInt <= 7) return 'High';
    else if (8 <= uvInt && uvInt <= 10) return 'Very High';
    else if (uvInt >= 11) return 'Extreme';
    else {
      return null;
    }
  }

  convertWeather2DisplayForm(weather) {
    const weatherArray = weather.split(',');
    return weatherArray[0];
  }

  convertWeather2SVGForm(weather) {
    const weatherArray = weather.split(',');
    weather = weatherArray[0];
    weather = weather.toLowerCase();
    weather = weather.split(' ');
    weather = weather.join('-');
    return weather;
  }

  convertDate2Day(date, index) {
    if (index == 0) return 'Today';
    else if (index == 1) return 'Tomorrow';

    const [year, month, day] = date.split('-').map(Number);
    const formattedDate = new Date(year, month - 1, day);
    const dayName = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
    }).format(formattedDate);
    return dayName;
  }
}

export { StringFn };
