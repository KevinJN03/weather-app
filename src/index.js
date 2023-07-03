import Weather from "./modules/weather"
import domWeather from "./modules/DomWeather"
import "./style.css"
import wind from "./Images/wind.png";
import humidity from "./Images/humidity.png";
let humidityImage = document.querySelector("#humidityImg")
let windImage = document.querySelector("#windImg")
let input = document.querySelector("[data-input]")
let submitBtn = document.querySelector("[data-form-btn]")

humidityImage.src = humidity
windImage.src = wind
startUp()
submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("input:", input.value)
    if (input.value == "") return
    let weatherInfo = await Weather(input.value)
    domWeather(weatherInfo)
})


async function startUp(){
    let weatherInfo = await Weather("london")
    domWeather(weatherInfo)
}