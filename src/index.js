//Date&time
function formatDateTime(date) {
  
  let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[date.getDay()];
let hour = date.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = date.getMinutes(); 
if (minutes < 10 ) {
  minutes = `0${minutes}`;

}
return `${day} ${hour}:${minutes}`;

}

let h5 = document.querySelector("#date");
let now = new Date();

h5.innerHTML = formatDateTime(now);


//Show Weather

function showWeather(response) {
  let cityName = document.querySelector("h3");
  cityName.innerHTML = response.data.name;
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let description = document.querySelector("#description");
  description.innerHTML= response.data.weather[0].main;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `${Math.round(response.data.wind.speed)} m/s`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML =  `${response.data.main.humidity}%`;
  let pressure = document.querySelector("#pressure");
  pressure.innerHTML = `${response.data.main.pressure}hPA` ;


  console.log(response);
}


//Show inputSearch
function citySearch(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  let h3 = document.querySelector("#city");
  h3.innerHTML = `${city}`;  
  let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(urlWeather).then(showWeather);
  
}

let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", citySearch);
let apiKey = "743bee57fddbfaf52447193a87d5dd25";
let units = "metric";
//Bonus current city

function displayCurrentCity(position) {
let latitude = position.coords.latitude;
let longitude = position.coords.longitude;
let urlCurrentCity = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(urlCurrentCity).then(showWeather);
}


function getCurrentCity(event) {
  event.preventDefault;
  navigator.geolocation.getCurrentPosition(displayCurrentCity);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentCity);


 
