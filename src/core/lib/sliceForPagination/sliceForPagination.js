/**
 * Slices a given array of data for pagination based on the specified page number and limit.
 *
 * @param {Array} data - The array of data to be paginated.
 * @param {number} pageNumber - The current page number.
 * @returns {Array} - The sliced data for the specified page.
 *
 * @example
 * // Slice data for the first page (page number 1) with a limit of 40 items per page
 * const firstPageData = sliceForPagination(dataArray, 1);
 * console.log(firstPageData);
 *
 * @example
 * // Slice data for the third page (page number 3) with a limit of 40 items per page
 * const thirdPageData = sliceForPagination(dataArray, 3);
 * console.log(thirdPageData);
 */
export const sliceForPagination = (data, pageNumber) => {
  const limit = 40;
  const lastShow = pageNumber * limit;
  const firstShow = lastShow - limit;
  return data.slice(firstShow, lastShow);
};
