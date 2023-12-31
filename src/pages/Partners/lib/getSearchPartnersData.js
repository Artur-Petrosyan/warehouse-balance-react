/**
 * Filters and returns an array of partner data based on a search query.
 *
 * @param {Array} data - An array of partner data objects.
 * @param {string} query - The search query to filter the partner data by.
 * @returns {Array} - An array of filtered partner data objects.
 *
 * @example
 * const partnerData = [
 *   { id: 1, name: 'John Doe' },
 *   { id: 2, name: 'Jane Smith' },
 *   { id: 3, name: 'Bob Johnson' },
 * ];
 *
 * const filteredPartnerData = getSearchPartnersData(partnerData, 'Doe');
 * console.log(filteredPartnerData); // [{ id: 1, name: 'John Doe' }]
 */
export const getSearchPartnersData = (data, query) => {
    if (data.length) {
        return data.filter(item => {
                if (item.name) {
                    return item.name.toLowerCase().includes(query.toLowerCase())
                }
            }
        );
    }
};