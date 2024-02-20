/**
 * Calculates the number of pages for pagination based on the length of the data array.
 * @param {Array} data - The array of data to be paginated.
 * @returns {Array} - An array of numbers representing the pages.
 */
export function getPagesForPagination(data) {
  let numOfPages = [];
  let pages = Math.ceil(data.length / 25);
  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }
  return numOfPages;
}
