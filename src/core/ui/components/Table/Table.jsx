import { Table as TableAntd } from "antd";

const columns = [
    {
        key : '1' ,
        title : 'Name' ,
        dataIndex : 'name' ,
    } ,
    {
        key : '2' ,
        title : 'Quantity' ,
        dataIndex : "amount" ,

    } ,
    {
        key : '3' ,
        title : 'Without NDS' ,
        dataIndex : 'notNDS' ,

    } ,
    {
        key : '4' ,
        title : 'Total Amount' ,
        dataIndex : 'totalPrice' ,

    } ,
];
const onChange = ( pagination , filters , sorter , extra ) => {
    console.log('params' , pagination , filters , sorter , extra);
};

export const Table = ( {dataSource} ) => {
    return (
        <TableAntd
            columns={columns}
            dataSource={dataSource}
            onChange={onChange}/>
    )
}

