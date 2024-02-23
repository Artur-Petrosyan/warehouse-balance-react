import { Flex, Select, Typography } from "antd";
import React from "react";
import Flags from "./Flags";

export const SelectSearchCurrency = ({ initialValue, searchCurrency, currencyData, onChange }) => {
    return (
        <Select
            showSearch
            style={{
                height: 50,
                marginBottom: 20
            }}
            onChange={onChange}
            virtual={false}
            placeholder="Type to Search"
            optionFilterProp="children"
            optionLabelProp="children"
            filterOption={searchCurrency}
            defaultValue={initialValue}
            filterSort={(optionA, optionB) =>
                (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())
            }
        >
            {currencyData.map(({ code, currency }) => (
                <Select.Option key={code} value={code} maxTagTextLength={10}>
                    <Flex align={"center"} style={{ gap: 10 }}>
                        <Flags currency={code} />
                        <Typography.Text style={{ fontSize: 16 }} strong={true}>
                            {currency.length > 24 ? `${code} - ${currency.slice(0, 24)}...` : `${code} - ${currency}`}
                        </Typography.Text>
                    </Flex>
                </Select.Option>
            ))}
        </Select>
    );
};
