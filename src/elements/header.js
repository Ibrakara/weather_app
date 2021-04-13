import tempUnitChange from "../unit";

const headerRender = function () {
  const headerTag = document.createElement("header");
  const headerTitle = document.createElement("h2");
  const headerLogo = document.createElement("img");
  const logoDiv = document.createElement("div");
  const searchBox = document.createElement("input");
  const searchButton = document.createElement("button");
  const searchDiv = document.createElement("div");
  const degreeButton = document.createElement("button");
  headerLogo.src = "https://www.accuweather.com/images/logos/accuweather.svg";
  searchBox.setAttribute("placeholder", "City Name");
  searchButton.textContent = "Search";
  degreeButton.textContent = "Celcius/Fahrenheit";
  searchBox.id = "search-box";
  searchButton.id = "search-button";
  degreeButton.id = "unit-change";
  headerTitle.id = "header-title";
  headerLogo.id = "logo";
  searchDiv.id = "search-div";
  logoDiv.id = "logo-div";
  headerTitle.textContent = "Super Weather";
  logoDiv.append(headerLogo, headerTitle);
  searchDiv.append(searchBox, searchButton);
  const headerElements = [logoDiv, searchDiv, degreeButton];
  document.body.appendChild(headerTag);
  headerElements.forEach((e) => {
    headerTag.appendChild(e);
    e.className = "header-element";
  });
  degreeButton.addEventListener("click", tempUnitChange);
};

export { headerRender as default };
