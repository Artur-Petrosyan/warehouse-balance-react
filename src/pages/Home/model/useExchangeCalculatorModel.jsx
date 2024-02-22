import { Form } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import cc from "currency-codes";
import { fetchGetExchangeRate } from "../lib/fetchGetExchangeData";

export const useExchangeCalculatorModel = () => {
    const [form] = Form.useForm();
    const [rate, setRate] = useState("");
    const currencyData = useMemo(() => cc.data, []);

    const getRateData = useCallback(async (amount = 1, from, to) => {
        try {
            const data = await fetchGetExchangeRate(from, to);
            setRate(amount * data);
        } catch (e) {
            console.log(e);
        }
    }, []);
    const searchCurrency = (input, option) => {
        return (option?.value.toLowerCase() ?? "").includes(input.toLowerCase());
    };
    const handleOk = values => {
        const { amount, from, to } = values;
        if (amount && from && to && from !== to) {
            getRateData(amount, from, to);
        }
        if (!amount && from && to) {
            getRateData(from, to);
        }
    };
    useEffect(() => {
        getRateData();
    }, [getRateData]);
    return { form, rate, currencyData, searchCurrency, handleOk };
};
