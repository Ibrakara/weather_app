const bodyRender = function () {
  const mainTag = document.createElement("main");
  const mainCity = document.createElement("div");
  const cityName = document.createElement("h3");
  const weatherCondition = document.createElement("h1");
  const weather = document.createElement("img");
  const cityTemp = document.createElement("h2");
  const forcastDiv = document.createElement("div");
  document.body.appendChild(mainTag);
  mainTag.appendChild(mainCity);
  mainTag.appendChild(forcastDiv);
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
  forcastDiv.id = "forecast-container";
};

const forecastRender = function () {
  const forecastDiv = document.querySelector("#forecast-container");
};

const currentWheatherRender = function (obj) {
  // const forcastDiv = document.querySelector("#forcast-container");
  const cityName = document.querySelector("#city-name");
  const weatherCondition = document.querySelector("#weather-condition");
  const weatherImg = document.querySelector("#wheather-img");
  const cityTemp = document.querySelector("#city-temp");
  const forcastData = obj;
  cityName.textContent = forcastData.city.name;
  cityTemp.textContent = forcastData.list[0].main.temp;
  weatherCondition.textContent = forcastData.list[0].weather[0].description;
  weatherImg.src = `http://openweathermap.org/img/wn/${forcastData.list[0].weather[0].icon}@2x.png`;
  weatherImg.title = forcastData.list[0].weather[0].description;
};

export { bodyRender, currentWheatherRender };
