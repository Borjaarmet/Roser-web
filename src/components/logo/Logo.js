import React from "react";
import imageLogo from "../../images/LOGO ROSER DEFI.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <img
        className="imageLogo"
        src={imageLogo}
        alt="logo"
        width="100"
        height="60"
      />
    </div>
  );
};

export default Logo;
