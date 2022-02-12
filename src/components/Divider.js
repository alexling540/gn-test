import React from "react";

import "./divider.css";

import Logo from "../images/logo-only.svg";

const Divider = () => {
  return (
    <div className="divider">
      <img src={Logo} width={60} height={30} />
    </div>
  );
};

export default Divider;
