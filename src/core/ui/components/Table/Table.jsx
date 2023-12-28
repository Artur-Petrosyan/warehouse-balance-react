import { Table as TableAntd } from "antd";
import { Loader } from "../Loader/Loader";

const onChange = ( pagination , filters , sorter , extra ) => {
    console.log('params' , pagination , filters , sorter , extra);
};

export const Table = ( {status , dataSource , columns} ) => {
    return status === "loading" ? <Loader/> : <TableAntd
        columns={columns}
        dataSource={dataSource}
        onChange={onChange}
    />


}

