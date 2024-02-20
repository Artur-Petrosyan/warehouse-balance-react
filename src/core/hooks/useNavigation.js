/**
 * Returns a function that takes a path as an argument and returns a formatted path based on the input path.
 * @function
 * @name useNavigation
 * @returns {string} - The formatted path.
 * @throws {Error} - If the input path is not a string.
 * @example
 * const formattedPath = useNavigation()('Home'); // returns '/'
 * const formattedPath2 = useNavigation()('Written Off'); // returns '/written-off'
 * const formattedPath3 = useNavigation()('Contacts'); // returns '/contacts'
 * const formattedPath4 = useNavigation()('Some Other Path'); // returns '/some-other-path'
 *
 * // Example of throwing an error
 * const formattedPath5 = useNavigation()(123); // throws an error
 */

export const useNavigation = () => {
  return (path) => {
    const lowerPath = path.toLowerCase();
    if (lowerPath === "home") {
      return "/";
    }
    if (lowerPath === "warehouse") {
      return `warehouse`;
    }
    if (lowerPath === "about us") {
      return "about-us";
    }
    return lowerPath;
  };
};
