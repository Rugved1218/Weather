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

  uvKm(string) {
    return string + "km";
  }
}

export { StringFn };
