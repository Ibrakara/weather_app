const apiCall = async function (city) {
  // eslint-disable-next-line prefer-destructuring
  const API_KEY = process.env.API_KEY;
  try {
    const cityResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`,
      { mode: "cors" }
    );
    const data = await cityResponse.json();
    const latitude = data.city.coord.lat;
    const longitude = data.city.coord.lon;
    const lanLonResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${API_KEY}&units=metric`,
      { mode: "cors" }
    );
    const finalData = await lanLonResponse.json();
    finalData.city = data.city;
    return finalData;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { apiCall as default };
