
/**
 * Renders a header component with a navigation bar, input search, and a button.
 *
 * @returns {JSX.Element} The rendered header component.
 *
 * @example
 * import React from 'eact';
 * import Header from './Header';
 *
 * export default function App() {
 *   return (
 *     <div>
 *       <h1>Header Example</h1>
 *       <Header />
 *     </div>
 *   );
 * }
 */
import { navList } from 'src/constants/headerNavList';
import {InputSearch} from 'src/core/ui/components';

import {Button} from '../Button';

import {NavBar} from '../NavBar/NavBar';

import 'src/core/ui/components/Header/header.scss'

export const Header = () => {
    return (
        <header className='header'>
            <NavBar navList={navList} />
            <InputSearch />
            <Button variant={'button-logout'}>Log out</Button>
        </header>
    );
};

