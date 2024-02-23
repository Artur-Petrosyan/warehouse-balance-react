import React from "react";
import CurrencyFlagImage from "react-currency-flags/dist/components";

const Flags = ({ code }) => {
    return <CurrencyFlagImage currency={code} width={30} />;
};

export default Flags;
