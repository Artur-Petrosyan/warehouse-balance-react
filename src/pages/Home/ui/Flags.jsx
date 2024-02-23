import React from "react";
import CurrencyFlagImage from "react-currency-flags/dist/components";

const Flags = ({ currency }) => {
    return <CurrencyFlagImage currency={currency} width={30} />;
};

export default Flags;
