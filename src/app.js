function displayTemperature(response) {
  console.log(response.data.main.temp);
}
let apiKey = "16dbd1b981cb512ad69b8f3c1794a804";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid={API key}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
