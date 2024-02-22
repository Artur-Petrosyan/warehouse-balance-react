/**
 * Replaces all spaces in a string with hyphens.
 *
 * @param {string} name - The string to modify.
 * @returns {string} The modified string with spaces replaced by hyphens.
 */
export const navigateToRegex = name => {
    const regex = / /g;
    return name.replace(regex, "-");
};
