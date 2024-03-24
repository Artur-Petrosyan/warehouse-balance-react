/**
 * Renders a button component with the given props.
 *
 * @param {object} props - The component's props.
 * @param {string} props.children - The button's content.
 * @param {string} props.variant - The button's variant (optional).
 * @param {object} props.rest - Any additional props to be passed to the button element.
 * @returns {JSX.Element} The rendered button component.
 *
 * @example
 * import React from 'react';
 * import { Button } from './Button';
 *
 * const primaryButton = (
 *   <Button variant='primary'>Click me</Button>
 * );
 *
 * const secondaryButton = (
 *   <Button variant='secondary' disabled>Disabled</Button>
 * );
 *
 * export default function App() {
 *   return (
 *     <div>
 *       <h1>Button Example</h1>
 *       <div>{primaryButton}</div>
 *       <div>{secondaryButton}</div>
 *     </div>
 *   );
 * }
 */
export const Button = ({ children, variant = "", ...rest }) => {
    console.log("Hello World!");
    return (
        <button {...rest} className={`button ${variant}`}>
            {children}
        </button>
    );
};
