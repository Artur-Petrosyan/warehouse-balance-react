import { memo } from "react";

/**
 * Higher-order component that adds memoization to a component.
 *
 * @param {React.Component} component - The component to be memoized.
 * @returns {React.Component} - The memoized component.
 *
 * @example
 * import { withMemo } from "./withMemo";
 * import MyComponent from "./MyComponent";
 *
 * const MemoizedComponent = withMemo(MyComponent);
 *
 * export default MemoizedComponent;
 */
export const withMemo = (component) => memo(component);
