import React from "react";
import { Button, Col, Flex, Form, Input, Row, Spin, Typography } from "antd";
import { SelectSearchCurrency } from "./SearchCurrency";
import { useExchangeCalculatorModel } from "../model/useExchangeCalculatorModel";

const ExchangeCalculator = () => {
    const { form, rate, currencyData, searchCurrency, handleOk, isLoading, errorMessage } =
        useExchangeCalculatorModel();
    return (
        <>
            <Flex justify={"center"}>
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
                                    initialValue={1}
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
                                <Form.Item name="from" label={<span>From</span>}>
                                    <SelectSearchCurrency
                                        searchCurrency={searchCurrency}
                                        currencyData={currencyData}
                                        initialValue={"EUR"}
                                    />
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item name="to" label={<span>To</span>}>
                                    <SelectSearchCurrency
                                        searchCurrency={searchCurrency}
                                        currencyData={currencyData}
                                        initialValue={"USD"}
                                    />
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
                                {isLoading ? (
                                    <Spin size={"large"} />
                                ) : errorMessage ? (
                                    <Typography.Title style={{ color: "red" }} level={5}>
                                        {errorMessage}
                                    </Typography.Title>
                                ) : (
                                    <>
                                        <Typography.Title level={1}>{rate}</Typography.Title>
                                    </>
                                )}
                            </Col>
                        </Form>
                    </Row>
                ) : (
                    <Spin size={"large"} />
                )}
            </Flex>
        </>
    );
};

export default ExchangeCalculator;
