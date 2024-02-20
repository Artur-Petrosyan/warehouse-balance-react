/**
 * Renders a pagination component with the given props.
 *
 * @param {object} props - The component's props.
 * @param {array} props.data - An array of data to be paginated.
 * @param {function} props.setPageNumber - A function to update the current page number.
 * @param {number} props.pageNumber - The current page number.
 * @param {string} props.pageName - The name of the page being paginated.
 * @returns {JSX.Element} The rendered pagination component.
 *
 * @example
 * import React from 'react';
 * import { Pagination } from './Pagination';
 *
 * const data = [
 *   { id: 1, name: 'John' },
 *   { id: 2, name: 'Jane' },
 *   { id: 3, name: 'Bob' },
 *   { id: 4, name: 'Alice' },
 *   { id: 5, name: 'Tom' },
 *   { id: 6, name: 'Sara' },
 *   { id: 7, name: 'Mike' },
 *   { id: 8, name: 'Emily' },
 *   { id: 9, name: 'David' },
 *   { id: 10, name: 'Linda' },
 *   { id: 11, name: 'Karen' },
 *   { id: 12, name: 'Steve' },
 *   { id: 13, name: 'Mary' },
 *   { id: 14, name: 'Mark' },
 *   { id: 15, name: 'Emma' },
 *   { id: 16, name: 'Olivia' },
 *   { id: 17, name: 'Ava' },
 *   { id: 18, name: 'Isabella' },
 *   { id: 19, name: 'Sophia' },
 *   { id: 20, name: 'Chloe' },
 *   { id: 21, name: 'Amelia' },
 *   { id: 22, name: 'Harper' },
 *   { id: 23, name: 'Evelyn' },
 *   { id: 24, name: 'Abigail' },
 *   { id: 25, name: 'Emily' },
 * ];
 *
 * const pagination = (
 *   <Pagination data={data} setPageNumber={setPageNumber} pageNumber={pageNumber} pageName='home' />
 * );
 *
 * export default pagination;
 */
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import PaginationAnt from "antd/es/pagination";
import "src/core/ui/components/Pagination/pagination.scss";

export const Pagination = memo(
  ({ data, setPageNumber, pageNumber, pageName }) => {
    const navigate = useNavigate();

    return (
      <PaginationAnt
        current={pageNumber}
        defaultCurrent={1}
        pageSize={40}
        size="large"
        className="pagination"
        total={data.length}
        showQuickJumper={true}
        onChange={(num) => {
          navigate(`/${pageName}/${Number(num)}`);
          setPageNumber(num);
        }}
        style={{ itemActiveBg: "black" }}
      />
    );
  },
);
