import React from "react";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { Loader } from "core";
import { SelectSearchCurrency } from "./SearchCurrency";
import { useExchangeCalculatorModel } from "../model/useExchangeCalculatorModel";

const ExchangeCalculator = () => {
    const { form, rate, currencyData, searchCurrency, handleOk } = useExchangeCalculatorModel();
    return (
        <>
            {currencyData ? (
                <Row align={"stretch"} justify={"space-around"} wrap={false} style={{ background: "white" }}>
                    <Form form={form} onFinish={values => handleOk(values)} layout={"vertical"}>
                        <Col span={24}>
                            <Typography.Title level={1}>Currency Converter</Typography.Title>
                        </Col>
                        <Form.Item
                            name="amount"
                            label={<span>Amount</span>}
                            rules={[
                                {
                                    message: "Please enter a valid amount",
                                    pattern: /^\d+$/
                                }
                            ]}
                        >
                            <Col>
                                <Input
                                    style={{
                                        width: 400,
                                        height: 50,
                                        marginBottom: 20
                                    }}
                                />
                            </Col>
                        </Form.Item>
                        <Col>
                            <Form.Item name="from" hasFeedback label={<span>From</span>} initialValue={"EUR"}>
                                <SelectSearchCurrency searchCurrency={searchCurrency} currencyData={currencyData} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="to" hasFeedback label={<span>To</span>} initialValue={"USD"}>
                                <SelectSearchCurrency searchCurrency={searchCurrency} currencyData={currencyData} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item>
                                <Button size={"large"} type={"primary"} htmlType="submit" style={{ width: 400 }}>
                                    Convert
                                </Button>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Typography.Title level={1}>{rate}</Typography.Title>
                        </Col>
                    </Form>
                </Row>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default ExchangeCalculator;
