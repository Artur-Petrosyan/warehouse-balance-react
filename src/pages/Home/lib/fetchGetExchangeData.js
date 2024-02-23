import { API_KEY } from "./API_KEY";

export const fetchGetExchangeRate = async (from, to, setIsLoading) => {
    const url = `https://currency-exchange.p.rapidapi.com/exchange?from=${from}&to=${to}`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": `${API_KEY}`,
            "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com"
        }
    };
    try {
        setIsLoading(true);
        const response = await fetch(url, options);
        const data = await response.json();
        setIsLoading(false);
        return data;
    } catch (error) {
        console.error(error);
    }
};
