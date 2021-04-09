const apiCall = async function (city) {
  // eslint-disable-next-line prefer-destructuring
  const API_KEY = process.env.API_KEY;
  try {
    const cityResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`,
      { mode: "cors" }
    );
    const data = await cityResponse.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { apiCall as default };
