/**
 * Renders a navigation bar component with the given props.
 *
 * @param {object} props - The component's props.
 * @param {array} props.navList - An array of objects representing the navigation items.
 * @param {boolean} props.subMenu - A boolean indicating whether the navigation bar is being used as a sub-menu.
 * @returns {JSX.Element} The rendered navigation bar component.
 *
 * @example
 * import React from 'react';
 * import { NavBar } from './NavBar';
 *
 * const navList = [
 *   { id: 1, name: 'Home' },
 *   { id: 2, name: 'About' },
 *   { id: 3, name: 'Contact' },
 * ];
 *
 * const navBar = (
 *   <NavBar navList={navList} />
 * );
 *
 * export default navBar;
 */
import { useNavigation } from "core/hooks/useNavigation";
import { NavLink } from "react-router-dom";
import "core/ui/components/Header/header.scss";

export const NavBar = ({ navList, subMenu }) => {
  const navigate = useNavigation();
  return (
    <nav className="header__nav">
      <ul className={`nav__ul ${subMenu ? "sub-menu" : ""}`}>
        {navList.map((item) => (
          <NavLink
            to={navigate(item.name)}
            className={({ isActive }) => `nav__li ${isActive ? "active" : ""}`}
            key={item.id}
          >
            {item.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
