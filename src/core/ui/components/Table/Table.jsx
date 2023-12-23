import { Table as TableAntd } from "antd";

const columns = [
    {
        title : 'Name' ,
        dataIndex : 'name' ,
    } ,
    {
        title : 'Quantity' ,
        dataIndex : "quantity"
    } ,
    {
        title : 'Without NDS' ,
        dataIndex : 'Without NDS' ,
    } ,
    {
        title : 'English Score' ,
        dataIndex : 'english' ,
        sorter : {
            compare : ( a , b ) => a.english - b.english ,
            multiple : 1 ,
        } ,
    } ,
];
const data = [
    {
        key : '1' ,
        name : 'John Brown' ,
        chinese : 98 ,
        math : 60 ,
        english : 70 ,
    } ,
    {
        key : '2' ,
        name : 'Jim Green' ,
        chinese : 98 ,
        math : 66 ,
        english : 89 ,
    } ,
    {
        key : '3' ,
        name : 'Joe Black' ,
        chinese : 98 ,
        math : 90 ,
        english : 70 ,
    } ,
    {
        key : '4' ,
        name : 'Jim Red' ,
        chinese : 88 ,
        math : 99 ,
        english : 89 ,
    } ,
];
const onChange = ( pagination , filters , sorter , extra ) => {
    console.log('params' , pagination , filters , sorter , extra);
};

export const Table = () => {
    return (
        <TableAntd columns={columns} dataSource={data} onChange={onChange}/>
    )
}

