import React from "react";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { Loader } from "core";
import { SelectSearchCurrency } from "./SearchCurrency";
import { useExchangeCalculatorModel } from "../model/useExchangeCalculatorModel";

const ExchangeCalculator = () => {
    const { form, rate, currencyData, searchCurrency, handleOk } = useExchangeCalculatorModel();

    //TODO: add loader when rate is not defined
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                {currencyData ? (
                    <Row
                        align={"middle"}
                        justify={"space-around"}
                        wrap={false}
                        style={{ background: "white", marginTop: "30px", borderRadius: 15, width: "95%" }}
                        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    >
                        <Form form={form} onFinish={values => handleOk(values)} layout={"vertical"}>
                            <Col span={24}>
                                <Typography.Title level={1}>Currency Converter</Typography.Title>
                            </Col>
                            <Col>
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
                                    <Input
                                        style={{
                                            height: 50,
                                            marginBottom: 20
                                        }}
                                    />
                                </Form.Item>
                            </Col>

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
                            <Col>
                                <Form.Item>
                                    <Button size={"large"} type={"primary"} htmlType="submit">
                                        Convert
                                    </Button>
                                </Form.Item>
                            </Col>
                            <Col>
                                <Typography.Title level={1}>{rate}</Typography.Title>
                            </Col>
                        </Form>
                    </Row>
                ) : (
                    <Loader />
                )}
            </div>
        </>
    );
};

export default ExchangeCalculator;
