/**
 * Removes all symbols from a string.
 *
 * @param {string} str - The string to remove symbols from.
 * @returns {string} - The string with all symbols removed.
 *
 * @example
 * const strWithSymbols = 'Hello<,./«» -"\' |@#$%^*()_+~`;:{}&?World';
 * const strWithoutSymbols = removeAllSymbolsFromString(strWithSymbols);
 * console.log(strWithoutSymbols); // 'HelloWorld'
 */
export const removeAllSymbolsFromString = ( str ) => str.replace(/[<,.>«» -"' |@#$%^*()_+~!՞՚։—՜՝`;:{}&?]/g , '');