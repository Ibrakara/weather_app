import apiCall from "./api";
import { currentWheatherRender, hourlyForecastRender } from "./elements/body";

const getCurrentCityWeather = async function () {
  const fetchIp = await fetch("https://api.ipify.org?format=json", {
    mode: "cors",
  });
  const ipData = await fetchIp.json();
  console.log(ipData);
  const fetcCurrentLocationData = await fetch(
    `http://ip-api.com/json/${ipData.ip}`,
    {
      mode: "cors",
    }
  );
  const cityData = await fetcCurrentLocationData.json();
  apiCall(cityData.city)
    .then((data) => {
      console.log(data);
      currentWheatherRender(data);
      return data;
    })
    .then((response) => {
      hourlyForecastRender(response);
    });
  console.log(cityData);
};
export { getCurrentCityWeather as default };