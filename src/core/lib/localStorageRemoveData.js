/**
 * Removes data from local storage with the specified name.
 *
 * @function
 * @param {string} dataName - The name of the data to remove from local storage.
 *
 * @example
 * // Remove data from local storage with the name "myData"
 * removeDataFromLocalStorage("myData");
 */
export const removeDataFromLocalStorage = (dataName) =>
  localStorage.removeItem(`${dataName}`);
