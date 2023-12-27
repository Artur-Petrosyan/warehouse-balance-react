import { Table as TableAntd } from "antd";

const onChange = ( pagination , filters , sorter , extra ) => {
    console.log('params' , pagination , filters , sorter , extra);
};

export const Table = ( {dataSource , columns} ) => {
    return (
        <TableAntd
            columns={columns}
            dataSource={dataSource}
            onChange={onChange}/>
    )
}

