export default async function Weather(input) {
  function getData(dataInfo) {
    const {
      location: { name, country },
      current: {
        temp_c,
        temp_f,
        wind_kph,
        humidity,
        condition: { text, icon },
      },
    } = dataInfo;
    return { name, country, temp_c, temp_f, wind_kph, humidity, text, icon };
  }

  let API_KEY = process.env.API_KEY;
  let baseUrl = "https://api.weatherapi.com/v1/current.json?key=";

  let response = await fetch(baseUrl + API_KEY + `&q=${input}`, {
    mode: "cors",
  });
  if (response.status != 200) alert(new Error(`${input} Location not found`));
  let data = await response.json();
  return getData(data);
}
