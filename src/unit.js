/* eslint-disable no-param-reassign */
const tempUnitChange = function () {
  const temps = document.querySelectorAll(".temp");
  const degreeSymbol = String.fromCharCode(176);
  if (temps[0].dataset.unit === "c") {
    temps.forEach((elem) => {
      elem.dataset.unit = "f";
      const degree = elem.textContent.slice(0, -2);
      const fah = Math.round((degree * 9) / 5 + 32);
      elem.textContent = `${fah} ${degreeSymbol}`;
    });
  } else {
    temps.forEach((elem) => {
      elem.dataset.unit = "c";
      const degree = elem.textContent.slice(0, -2);
      const cel = Math.round(((degree - 32) * 5) / 9);
      elem.textContent = `${cel} ${degreeSymbol}`;
    });
  }
};
export { tempUnitChange as default };
