import React from "react";
import LogoSvg from "./Logo.svg";

const Logo = () => {
    return (
        <div style={{ width: "200px" }}>
            <img src={LogoSvg} style={{ width: "inherit" }} alt="Logo" />
        </div>
    );
};

export default Logo;
