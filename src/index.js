import Weather from "./modules/weather"
import domWeather from "./modules/DomWeather"

let input = document.querySelector("[data-input]")
let submitBtn = document.querySelector("[data-form-btn]")

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("input:", input.value)
    let weatherInfo = await Weather(input.value)
    domWeather(weatherInfo)
})