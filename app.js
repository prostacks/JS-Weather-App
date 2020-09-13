const saveBtn = document.querySelector("#saveBtn");
const cityInput = document.querySelector("#city");
const weatherLoc = document.querySelector("#location");
const description = document.querySelector("#condition");
const temperature = document.querySelector("#temp");
const icon = document.querySelector("#icon");
const humidity = document.querySelector("#humidity");
const feelsLike = document.querySelector("#feelsLike");
const wind = document.querySelector("#wind");

saveBtn.addEventListener("click", getWeather);

weatherDefault("tampa");

// Load Default City
function weatherDefault(city) {
  getDefault(city).then((weather) => {
    weatherLoc.textContent = weather.name;
    description.textContent = weather.weather[0].description;
    temperature.innerHTML = `${Math.round(weather.main.temp)}&#8457;`;
    icon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    humidity.innerHTML = `Relative Humidity: ${weather.main.humidity}%`;
    feelsLike.innerHTML = `Feels Like: ${Math.round(
      weather.main.feels_like
    )}&#8457;`;
    wind.innerHTML = `Wind: From the ${converter(
      weather.wind.deg
    )} at ${Math.round(weather.wind.speed)} MPH`;
  });
}

async function getDefault(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=cf1c7672cfd2b1a4e6ae07889b7e5cc3`
  );
  const data = await response.json();
  return data;
}

async function getData() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=imperial&APPID=cf1c7672cfd2b1a4e6ae07889b7e5cc3`
  );
  const data = await response.json();
  return data;
}

function getWeather() {
  getData().then((weather) => {
    weatherLoc.textContent = weather.name;
    description.textContent = weather.weather[0].description;
    temperature.innerHTML = `${Math.round(weather.main.temp)}&#8457;`;
    icon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    humidity.innerHTML = `Relative Humidity: ${weather.main.humidity}%`;
    feelsLike.innerHTML = `Feels Like: ${Math.round(
      weather.main.feels_like
    )}&#8457;`;
    wind.innerHTML = `Wind: From the ${converter(
      weather.wind.deg
    )} at ${Math.round(weather.wind.speed)} MPH`;
  });
}

function converter(deg) {
  switch (true) {
    case deg > 337.5 || deg < 22.5:
      return "N";
    case deg > 22.5 && deg < 67.5:
      return "NE";
    case deg > 67.5 && deg < 112.5:
      return "E";
    case deg > 112.5 && deg < 157.5:
      return "SE";
    case deg > 157.5 && deg < 202.5:
      return "S";
    case deg > 202.5 && deg < 247.5:
      return "SW";
    case deg > 247.5 && deg < 292.5:
      return "W";
    case deg > 292.5 && deg < 337.5:
      return "NW";
    default:
      return "Error";
  }
}
