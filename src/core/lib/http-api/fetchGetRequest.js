import { BASE_URL } from "src/constants/api";

/**
 * Fetches a GET request to the specified endpoint.
 *
 * @param {string} endpoint - The endpoint to send the GET request to.
 * @returns {Promise<object>} - A Promise that resolves to the response data.
 */
export const fetchGetRequest = async endpoint => {
    try {
        const baseUrl = `${BASE_URL}`;
        const response = await fetch(`${baseUrl}${endpoint}`, {
            method: "GET"
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};
