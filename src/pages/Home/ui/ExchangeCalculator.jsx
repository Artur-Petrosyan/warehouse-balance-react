import React, { useCallback, useEffect, useMemo, useState } from "react";
import { fetchGetExchangeRate } from "pages/Home/lib/fetchGetExchangeData";
import { Select, Typography } from "antd";
import { Loader } from "core";
import cc, { data } from "currency-codes";

const ExchangeCalculator = () => {
  const [rate, setRate] = useState("");
  // const [currencies, setCurrencies] = useState();
  const currencyData = useMemo(() => cc.data, []);
  //TODO: add the default value in "Select" component
  //TODO: add second "SELECT" component in right side
  //TODO: add flags in SELECT.OPTION
  //TODO: add logic for get rate in 'onChange' SELECT
  const getRateData = useCallback(async () => {
    try {
      const data = await fetchGetExchangeRate();
      setRate(data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const selectOnChange = (value) => {
    console.log(value);
  };

  useEffect(() => {
    console.log("worked");
    getRateData();
    // getCurrenciesData();
  }, [getRateData]);
  console.log(data);
  return (
    <div>
      {rate}
      <div>
        {currencyData ? (
          <Select onChange={selectOnChange} style={{ width: "291px" }}>
            {currencyData.map(({ code, currency }) => (
              <Select.Option key={code} value={code}>
                <Typography.Text>
                  {code} {currency}
                </Typography.Text>
              </Select.Option>
            ))}
          </Select>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default ExchangeCalculator;
