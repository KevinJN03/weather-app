import cloudy from "../Images/storm.png";
import rain from "../Images/rain.png"
import storm from "../Images/storm.png"
import partlyCloudy from "../Images/partly-cloudy.png"
import cloudyNight from "../Images/cloudy-night.png"

export default function domWeather(data) {
  console.log("this is the data: ", data);
  let image = document.querySelector(["data-img"]);
  let cityName = document.querySelector("[data-city-name] span");
  let country = document.querySelector("#country span");
  let tempC = document.querySelector("[data-temp-c] span");
  let windKph = document.querySelector("[data-wind-kph] span");
  let humidity = document.querySelector("[data-humidity] span");
    console.log( windKph)
  image.src = icon
  cityName.textContent = `${data.name},`;
 country.textContent = `${data.country}`;
  tempC.textContent = `${data.temp_c}°`;
  windKph.textContent = `${data.wind_kph}km/h`;
  humidity.textContent = `${data.humidity}%`;


}
