import { Select, Typography } from "antd";
import React from "react";

export const SelectSearchCurrency = ({ searchCurrency, currencyData, onChange, defaultValue }) => {
    return (
        <Select
            showSearch
            style={{
                width: 400,
                height: 50,
                marginBottom: 20
            }}
            onChange={onChange}
            placeholder="Type to Search"
            optionFilterProp="children"
            filterOption={searchCurrency}
            defaultValue={defaultValue}
            filterSort={(optionA, optionB) =>
                (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())
            }
        >
            {currencyData.map(({ code, currency }) => (
                <Select.Option key={code} value={code}>
                    <Typography.Text style={{ fontSize: 20 }}>
                        {code} - {currency}
                    </Typography.Text>
                </Select.Option>
            ))}
        </Select>
    );
};
