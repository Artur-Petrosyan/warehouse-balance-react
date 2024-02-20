/**
 * Renders a loader component.
 *
 * @returns {JSX.Element} The rendered loader component.
 *
 * @example
 * import React from 'react';
 * import { Loader } from './Loader';
 *
 * const loader = (
 *   <Loader />
 * );
 *
 * export default loader;
 */
import "src/core/ui/components/Loader/loader.scss";

export const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};
