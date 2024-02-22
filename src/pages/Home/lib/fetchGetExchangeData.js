import { API_KEY } from "./API_KEY";

export const fetchGetExchangeRate = async () => {
    const url = `https://currency-exchange.p.rapidapi.com/exchange?from=KWD&to=USD`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": `${API_KEY}`,
            "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com"
        }
    };
    try {
        const response = await fetch(url, options);
        const res = await response.json();
        return Number(res?.toFixed(3));
    } catch (error) {
        console.error(error);
    }
};
