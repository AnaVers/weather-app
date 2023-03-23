function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.temp;
}
let apiKey = "141000bebdd425d6oa3ft78e5aca2bd2f";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key={key}`;
axios.get(apiUrl).then(displayTemperature);
