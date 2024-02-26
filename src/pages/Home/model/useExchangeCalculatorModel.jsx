import { Form } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import cc from "currency-codes";
import { fetchGetExchangeRate } from "../lib/fetchGetExchangeData";

export const useExchangeCalculatorModel = () => {
    const [form] = Form.useForm();
    const [rate, setRate] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const currencyData = useMemo(() => cc.data, []);
    const [errorMessage, setErrorMessage] = useState("");
    const getRateData = useCallback(async (amount = 1, from = "EUR", to = "USD") => {
        try {
            const data = await fetchGetExchangeRate(from, to, setIsLoading, setErrorMessage);
            setRate((amount * data).toFixed(3));
        } catch (e) {
            console.log(e);
        }
    }, []);
    const searchCurrency = (input, option) => {
        return (option?.value.toLowerCase() ?? "").includes(input.toLowerCase());
    };
    const handleOk = ({ amount = 1, from = "EUR", to = "USD" }) => {
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
    return { form, rate, currencyData, searchCurrency, handleOk, isLoading, errorMessage };
};
