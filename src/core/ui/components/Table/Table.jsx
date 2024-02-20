/**
 * Renders a table component using Ant Design.
 * @param {Object} props - The component's props.
 * @param {string} props.status - The status of the table data, either "loading" or "loaded".
 * @param {Array} props.dataSource - The data to be displayed in the table.
 * @param {Array} props.columns - The columns to be displayed in the table.
 * @returns {JSX.Element} - The rendered table component.
 * @example
 * import { Table } from "./Table";
 *
 * const dataSource = [
 *   {
 *     key: "1",
 *     name: "John Doe",
 *     age: 32,
 *     address: "123 Main St",
 *   },
 *   {
 *     key: "2",
 *     name: "Jane Smith",
 *     age: 28,
 *     address: "456 Elm St",
 *   },
 * ];
 *
 * const columns = [
 *   {
 *     title: "Name",
 *     dataIndex: "name",
 *     key: "name",
 *   },
 *   {
 *     title: "Age",
 *     dataIndex: "age",
 *     key: "age",
 *   },
 *   {
 *     title: "Address",
 *     dataIndex: "address",
 *     key: "address",
 *   },
 * ];
 *
 * const MyTable = () => {
 *   return <Table status="loaded" dataSource={dataSource} columns={columns} />;
 * };
 */
import { Table as TableAntd } from "antd";
import { Loader } from "../Loader/Loader";
import { memo } from "react";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";

export const Table = memo(
  ({ status, dataSource, columns, expandedRowRenderTable }) => {
    const breakPoints = useBreakpoint();
    return status === "loading" ? (
      <Loader />
    ) : (
      <TableAntd
        columns={columns}
        dataSource={dataSource}
        expandedRowRender={expandedRowRenderTable}
        size={breakPoints.md ? "large" : "small"}
      />
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.dataSource !== nextProps.dataSource) return false;
  },
);
