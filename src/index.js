import "./style.css";
import apiCall from "./api";
import { bodyRender, currentWheatherRender } from "./elements/body";
import headerRender from "./elements/header";
import getCity from "./search";

apiCall("Istanbul").then((data) => console.log(data));
headerRender();
bodyRender();
getCity();
