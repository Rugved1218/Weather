class StringFn {
  capitallize(string) {
    const firstChar = string[0].toUpperCase();
    const rest = string.slice(1);
    return firstChar + rest;
  }

  temperatureF(string) {
    return string + "°F";
  }

  title(string) {
    let strings = string.split(" ");
    strings.forEach((stringBr, index) => {
      strings[index] = this.capitallize(stringBr);
    });
    return strings.join(" ");
  }

  distKm(string) {
    return string + "km";
  }

  percentage(string) {
    return string + "%";
  }

  convertDate(string) {
    const [day, month, year] = string.split("-");

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    const monthName = months[parseInt(month, 10) - 1];

    return `${monthName}, ${day}, ${year}`;
  }

  uvHealth(uv) {
    const uvInt = parseInt(uv);
    if (0 <= uv && uv <= 2) return "Low";
    else if (3 <= uv && uv <= 5) return "Moderate";
    else if (6 <= uv && uv <= 7) return "High";
    else if (8 <= uv && uv <= 10) return "Very High";
    else if (uv >= 11) return "Extreme";
    else {
      return null;
    }
  }
}

export { StringFn };
