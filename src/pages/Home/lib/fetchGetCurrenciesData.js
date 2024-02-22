import { API_KEY } from "./API_KEY";

export const fetchGetCurrenciesData = async () => {
    const url = "https://currency-exchange.p.rapidapi.com/listquotes";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": `${API_KEY}`,
            "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com"
        }
    };
    try {
        const response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};
