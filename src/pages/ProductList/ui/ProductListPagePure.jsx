import React from "react";
import { Table, Upload } from "core";
import { Button, Form, Input, Modal } from "antd";

const columnsProductList = [
  {
    key: "1",
    title: "Code",
    dataIndex: "code",
  },
  {
    key: "2",
    title: "Name",
    dataIndex: "name",
  },
  {
    key: "3",
    title: "Unit",
    dataIndex: "unit",
  },
  {
    key: "4",
    title: "Price",
    dataIndex: "price",
  },
  {
    key: "5",
    title: "Price Without NDS",
    dataIndex: "notNDS",
  },
];
export const ProductListPagePure = ({
  data,
  beforeUpload,
  removeData,
  isModalOpen,
  handleOk,
  showModal,
  handleCancel,
  expandedRowRenderTable,
}) => {
  const { EXCELProductListData } = data;
  const [form] = Form.useForm();
  const inputCheckNumber = (value) => {
    const pattern = /^\d+$/;
    if (value && !pattern.test(value)) {
      return Promise.reject(new Error("Must be a number"));
    }
    return Promise.resolve();
  };

  return (
    <div>
      <Table
        columns={columnsProductList}
        dataSource={EXCELProductListData}
        expandedRowRenderTable={expandedRowRenderTable}
      />
      <div className="upload-open__container">
        <Button onClick={showModal}>Add Product</Button>
        <Modal
          open={isModalOpen}
          onCancel={handleCancel}
          title="Add a new product"
          footer={null}
        >
          <Form
            form={form}
            layout="vertical"
            scrollToFirstError={true}
            size="middle"
            onFinish={(values) => handleOk(values)}
          >
            <Form.Item
              label="code"
              name="code"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
                {
                  validator(_, value) {
                    return inputCheckNumber(value);
                  },
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="unit"
              name="unit"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
                {
                  validator(_, value) {
                    return inputCheckNumber(value);
                  },
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="price"
              name="price"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
                {
                  validator(_, value) {
                    return inputCheckNumber(value);
                  },
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Add</Button>
            </Form.Item>
          </Form>
        </Modal>
        <Upload beforeUpload={beforeUpload} />
        {EXCELProductListData.length ? (
          <Button onClick={() => removeData("excelProductListData")}>
            Remove File
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
