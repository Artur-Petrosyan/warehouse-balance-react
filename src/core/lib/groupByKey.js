/**
 * Groups an array of objects by a given key.
 *
 * @param {array} data - The array of objects to group.
 * @returns {array} An array of arrays, where each inner array contains objects with the same key value.
 */
export const groupByKey = (data) => {
  const seasons = data.reduce((acc, current) => {
    const season = current.season;
    if (!acc[season]) {
      acc[season] = [];
    }
    acc[season].push(current);
    return acc;
  }, {});
  return Object.values(seasons);
};
