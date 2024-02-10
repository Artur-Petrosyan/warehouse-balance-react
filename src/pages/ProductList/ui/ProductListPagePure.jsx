import React from "react";
import {Table, Upload} from "core";
import {Button, Form, Input, Modal} from "antd";


const columnsProductList = [
    {
        key: '1',
        title: 'Code',
        dataIndex: 'code',
    },
    {
        key: '2',
        title: 'Name',
        dataIndex: 'name',
    },
    {
        key: '3',
        title: 'Unit',
        dataIndex: "unit",

    },
    {
        key: '4',
        title: 'Price',
        dataIndex: "price",
    },
    {
        key: '5',
        title: 'Price Without NDS',
        dataIndex: 'notNDS',
    },
];
export const ProductListPagePure = ({
                                        data,
                                        beforeUpload,
                                        removeData,
                                        addProduct,
                                        isModalOpen,
                                        showModal,
                                        handleOk,
                                        handleCancel
                                    }) => {
    const {EXCELProductListData} = data;
    return <div>
        <Table columns={columnsProductList} dataSource={EXCELProductListData}/>
        <div className="upload-open__container">
            <Button onClick={showModal}>Add Product</Button>
            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                onOk={handleOk}
                title="Add a new product"
            >
                <Form>
                    <Form.Item
                        label="code"
                        name="code"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the code"
                            }
                        ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the name"
                            }
                        ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="price"
                        name="price"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the price"
                            }
                        ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="price without NDS"
                        name="price without NDS"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the price without NDS"
                            }
                        ]}>
                        <Input/>
                    </Form.Item>

                </Form>
            </Modal>
            <Upload beforeUpload={beforeUpload}/>
            {EXCELProductListData.length ?
                <Button onClick={() => removeData('excelProductListData')}>Remove File</Button> : <></>}
        </div>
    </div>
}
