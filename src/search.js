import apiCall from "./api";
import { currentWheatherRender, hourlyForecastRender } from "./elements/body";

const getCity = function () {
  const searchButton = document.querySelector("#search-button");
  const searchBox = document.querySelector("#search-box");
  searchButton.addEventListener("click", () => {
    const city = searchBox.value;
    searchBox.value = "";
    apiCall(city)
      .then((data) => {
        currentWheatherRender(data);
        return data;
      })
      .then((data) => hourlyForecastRender(data));
  });
};
export { getCity as default };
