/**
 * Custom hook to scroll the window to the top when the path changes.
 * @param {string} path - The path that triggers the scroll behavior.
 * @example
 * // Usage example:
 * // Import the custom hook
 * import React from 'react';
 * import useScrollToTop from './useScrollToTop';
 *
 * const YourComponent = () => {
 *     const path = '/your-path'; // Replace this with your actual path
 *
 *     useScrollToTop(path);
 *
 *     return (
 *         <div>
 *             {/* Your component content here *\/}
 *         </div>
 *     );
 * };
 *
 * export default YourComponent;
 */
import { useEffect } from 'react';

const useScrollToTop = (path) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [path]);
};

export default useScrollToTop;
