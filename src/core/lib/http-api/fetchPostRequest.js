import { BASE_URL } from "src/constants/api";

/**
 * Fetches a POST request to the specified endpoint with the provided data.
 *
 * @param {string} endpoint - The endpoint to send the POST request to.
 * @param {object} data - The data to send in the request body.
 * @returns {Promise<object>} - A Promise that resolves to the response data.
 */
export const fetchPostRequest = async ( endpoint , data ) => {
    try {
        const baseUrl = `${BASE_URL}`;
        const response = await fetch(`${baseUrl}${endpoint}` , {
            headers : {
                "Content-Type" : "application/json" ,
            } ,
            body : JSON.stringify(data) ,
            method : "POST" ,
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};