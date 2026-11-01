import "../src/styles.css";
import { weatherAPIData } from "../src/scripts/ApiCall.js";
import { searchWeathLoc } from "../src/scripts/Search.js";

let city = "pune";
const weatherData = new weatherAPIData(city);

// Taking User Input for location
const submitBtn = document.querySelector(".submitBtn");
const searchBar = document.querySelector(".searchBar");
submitBtn.addEventListener("click", () => {
  const city = searchBar.value;
  searchWeathLoc(city);
});
