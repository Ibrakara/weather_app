const bodyRender = function () {
  const mainTag = document.createElement("main");
  const mainCity = document.createElement("div");
  const cityName = document.createElement("h3");
  const weatherCondition = document.createElement("h1");
  const weather = document.createElement("img");
  const cityTemp = document.createElement("h2");
  const forecastDiv = document.createElement("div");
  document.body.appendChild(mainTag);
  mainTag.appendChild(mainCity);
  mainTag.appendChild(forecastDiv);
  mainCity.appendChild(cityName);
  mainCity.appendChild(weatherCondition);
  mainCity.appendChild(weather);
  mainCity.appendChild(cityTemp);
  mainTag.id = "main";
  mainCity.id = "city-container";
  cityName.id = "city-name";
  weatherCondition.id = "weather-condition";
  weather.id = "wheather-img";
  cityTemp.id = "city-temp";
  forecastDiv.id = "forecast-container";
  cityTemp.className = "current-temp temp";
};

const hourlyForecastRender = async function (data) {
  const forecastDiv = document.querySelector("#forecast-container");
  if (forecastDiv.hasChildNodes()) {
    forecastDiv.innerHTML = "";
  }
  const degreeSymbol = String.fromCharCode(176);
  for (let i = 0; i < 24; i += 1) {
    const element = document.createElement("div");
    const hour = document.createElement("p");
    const img = document.createElement("img");
    const temp = document.createElement("p");
    element.className = "day-div";
    temp.className = "forecast-temp temp";
    temp.dataset.unit = "c";
    forecastDiv.appendChild(element);
    element.append(hour, img, temp);
    const unixTimestamp = data.hourly[i].dt;
    const date = new Date(unixTimestamp * 1000);
    const hours =
      date.getHours() < 10 ? `0${date.getHours()}.00` : `${date.getHours()}.00`;
    hour.textContent = hours;
    img.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${data.hourly[i].weather[0].icon}@2x.png`
    );
    temp.textContent = `${Math.round(data.hourly[i].temp)} ${degreeSymbol}`;
  }
};

const currentWheatherRender = function (data) {
  const cityName = document.querySelector("#city-name");
  const weatherCondition = document.querySelector("#weather-condition");
  const weatherImg = document.querySelector("#wheather-img");
  const cityTemp = document.querySelector("#city-temp");
  const degreeSymbol = String.fromCharCode(176);
  const forcastData = data;
  cityName.textContent = `${forcastData.city.name}, ${forcastData.city.country}`;
  cityTemp.textContent = `${Math.round(
    forcastData.current.temp
  )} ${degreeSymbol}`;
  cityTemp.dataset.unit = "c";
  weatherCondition.textContent = forcastData.current.weather[0].description;
  weatherImg.src = `http://openweathermap.org/img/wn/${forcastData.current.weather[0].icon}@2x.png`;
  weatherImg.title = forcastData.current.weather[0].description;
};

export { bodyRender, currentWheatherRender, hourlyForecastRender };
