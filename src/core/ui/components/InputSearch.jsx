
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
import { useEffect, useState } from 'react';
import { Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { setSearchPartnersData } from "app/Providers/store/searchPartnersDataReducer";
import { removeAllSymbolsFromString } from "src/core/lib/removeAllSymbolsFromString";

const { Search } = Input;

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
export const InputSearch = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const data = useSelector(state => state.EXCELData);

    useEffect(() => {
        if (searchQuery) {
            const timeOutId = setTimeout(() => {
                dispatch(setSearchPartnersData({
                    data: data.EXCELData || [],
                    query: removeAllSymbolsFromString(searchQuery),
                }));
            }, 1000);
            return () => clearTimeout(timeOutId);
        } else {
            dispatch(setSearchPartnersData({
                data: [],
                query: searchQuery,
            }));
        }
    }, [searchQuery, dispatch, data]);

    return (
        <div className='header__search'>
            <Search
                placeholder="Find Partners"
                allowClear
                onChange={e => setSearchQuery(e.target.value)}
                size="large"
            />
        </div>
    );
};
