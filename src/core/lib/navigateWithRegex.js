/**
 * Navigates to a new page with a modified name using the navigateToRegex function.
 *
 * @param {string} id - The ID of the show.
 * @param {string} name - The name of the show.
 * @param {function} navigate - The function to use for navigation.
 * @param {string} path - The current path of the application.
 * @returns {function} The modified navigate function.
 */
import { navigateToRegex } from "./navigateToRegex";

export const navigateWithRegex = (id, name, navigate, path) => {
    const newName = navigateToRegex(name);
    if (path === "/search") {
        return navigate(`/shows/1/${id}/${newName}/main`);
    }
    return navigate(`${id}/${newName}/main`);
};
