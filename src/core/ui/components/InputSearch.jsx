
/**
 * Renders an input search component with the given props.
 *
 * @returns {JSX.Element} The rendered input search component.
 *
 * @example
 * import React from 'eact';
 * import { InputSearch } from './InputSearch';
 *
 * const inputSearch = (
 *   <InputSearch />
 * );
 *
 * export default inputSearch;
 */
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Input} from 'antd'

const {Search} = Input


export const InputSearch = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()

    return (
        <div className='header__search'>
            <Search
                placeholder="Find show"
                allowClear
                enterButton="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
                onSearch={() => navigate(`search?q=${searchQuery}`)}
                size="large"

            />
        </div>
    )
}
