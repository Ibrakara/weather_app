const headerRender = function () {
  const headerTag = document.createElement("header");
  const headerLogo = document.createElement("img");
  const searchBox = document.createElement("input");
  const searchButton = document.createElement("button");
  const degreeButton = document.createElement("button");
  searchBox.setAttribute("placeholder", "City Name");
  searchButton.textContent = "Search";
  degreeButton.textContent = "Celcius/Fahrenheit";
  searchBox.id = "search-box";
  searchButton.id = "search-button";
  const headerElements = [headerLogo, searchBox, searchButton, degreeButton];
  document.body.appendChild(headerTag);
  headerElements.forEach((e) => {
    headerTag.appendChild(e);
    e.className = "header-element";
  });
};

export { headerRender as default };
