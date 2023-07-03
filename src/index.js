import Weather from "./modules/weather"
import domWeather from "./modules/DomWeather"
import "./style.css"
let input = document.querySelector("[data-input]")
let submitBtn = document.querySelector("[data-form-btn]")
// import "./Images/wind.png";
// import "./Images/humidity.png";
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