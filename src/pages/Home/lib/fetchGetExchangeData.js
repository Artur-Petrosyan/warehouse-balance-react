export const fetchGetExchangeRate = async () => {
  const url = `https://currency-exchange.p.rapidapi.com/exchange?from=KWD&to=USD`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d66b181827mshf97181d3a8359fdp103386jsn32f89a2cba7b",
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const res = await response.json();
    return Number(res?.toFixed(3));
  } catch (error) {
    console.error(error);
  }
};
