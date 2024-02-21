export const fetchGetCurrenciesData = async () => {
  const url = "https://currency-exchange.p.rapidapi.com/listquotes";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d66b181827mshf97181d3a8359fdp103386jsn32f89a2cba7b",
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
