import "./style.css";
import apiCall from "./api";
import { bodyRender } from "./elements/body";
import headerRender from "./elements/header";
import getCity from "./search";
import getCurrentCityWeather from "./currentCityWeather";

apiCall("Ankara").then((data) => console.log(data));
headerRender();
bodyRender();
getCity();
getCurrentCityWeather();
