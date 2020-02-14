import React from "react";

import { Link } from "react-router-dom";

import HomeSVG from "../icons/HomeSVG";
import { useTranslation } from "react-i18next";

const Header = () => {
  return (
    <header className="header">
      <div className="header__actions">
        <Link to="/">
          <HomeSVG />
        </Link>
      </div>
      <h2 className="header__slogan">{useTranslation().t("headerText")}</h2>
    </header>
  );
};

export default Header;
