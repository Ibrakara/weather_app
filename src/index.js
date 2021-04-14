import "./style.css";
import { bodyRender } from "./elements/body";
import headerRender from "./elements/header";
import getCity from "./search";
import getCurrentCityWeather from "./currentCityWeather";

headerRender();
bodyRender();
getCity();
getCurrentCityWeather();
