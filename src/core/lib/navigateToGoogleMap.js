/**
 * Navigates to a Google Map with the provided cell location.
 *
 * @param {string} cell - The cell location to navigate to.
 * @param {function} setAlertState - The function to set the alert state.
 *
 * @returns {Window} - The window object for the Google Map page.
 *
 * @example
 * navigateToGoogleMap('123 Main St, Anytown USA', setAlertState);
 *
 * @example
 * navigateToGoogleMap('unknown', setAlertState);
 */
export function navigateToGoogleMap( cell , setAlertState ) {
    if ( cell !== 'unknown' ) {
        const googleMapURL = `https://www.google.com/maps?q=${encodeURIComponent(cell)}`;
        setAlertState(false);
        return window.open(googleMapURL , '_black');
    } else {
        return setAlertState(true);
    }
}