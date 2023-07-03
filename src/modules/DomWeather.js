import cloudy from "../Images/cloudy.png";
import rain from "../Images/rain.png";
import storm from "../Images/storm.png";
import snow from "../Images/snow.png";
import sun from "../Images/sun.png";
import foggy from "../Images/foggy.png";
import sleet from "../Images/sleet.png";
import overcast from "../Images/overcast.png";
export default function domWeather(data) {
  const card = document.querySelector(".card");
  let image = document.querySelector("[data-img]");
  let cityName = document.querySelector("[data-city-name] span");
  let country = document.querySelector("#country span");
  let tempC = document.querySelector("[data-temp-c] span");
  let windKph = document.querySelector("[data-wind-kph] span");
  let humidity = document.querySelector("[data-humidity] span");
  changeImg(data);
  cityName.textContent = `${data.name}`;
  country.textContent = `${data.country}`;
  tempC.textContent = `${data.temp_c}°`;
  windKph.textContent = `${data.wind_kph}km/h`;
  humidity.textContent = `${data.humidity}%`;

  async function changeImg() {
    let text = await data.text.toLowerCase();

    if (text.includes("cloudy")) {
      image.setAttribute("src", cloudy);
      if (card.classList.contains("darkBackground"))
        card.classList.remove("darkBackground");
      card.classList.add("lightBackground");
    } else if (text.includes("rain")) {
      if (card.classList.contains("lightBackground"))
        card.classList.remove("lightBackground");
      card.classList.add("darkBackground");
      image.setAttribute("src", rain);
    } else if (text.includes("snow") || text.includes("ice")) {
      if (card.classList.contains("lightBackground"))
        card.classList.remove("lightBackground");
      card.classList.add("darkBackground");
      image.setAttribute("src", snow);
    } else if (text.includes("storm") || text.includes("thunder")) {
      if (card.classList.contains("lightBackground"))
        card.classList.remove("lightBackground");
      card.classList.add("darkBackground");
      image.setAttribute("src", storm);
    } else if (text.includes("sun")) {
      if (card.classList.contains("darkBackground"))
        card.classList.remove("darkBackground");
      card.classList.add("lightBackground");
      image.setAttribute("src", sun);
    } else if (text.includes("fog") || text.includes("mist")) {
      if (card.classList.contains("lightBackground"))
        card.classList.remove("lightBackground");
      card.classList.add("darkBackground");
      image.setAttribute("src", foggy);
    } else if (text.includes("sleet")) {
      if (card.classList.contains("lightBackground"))
        card.classList.remove("lightBackground");
      card.classList.add("darkBackground");
      image.setAttribute("src", sleet);
    } else if (text.includes("overcast")) {
      if (card.classList.contains("lightBackground"))
        card.classList.remove("lightBackground");
      card.classList.add("darkBackground");
      image.setAttribute("src", overcast);
    } else {
      if (card.classList.contains("darkBackground"))
        card.classList.remove("darkBackground");
      card.classList.add("lightBackground");
      image.setAttribute("src", cloudy);
    }
  }
}
