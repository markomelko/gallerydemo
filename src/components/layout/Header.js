import React from "react";

import { Link } from "react-router-dom";

import HomeSVG from "../icons/HomeSVG";

import { STATIC_TEXTS } from "../../helpers/staticTexts";

const Header = () => {
  return (
    <header className="header">
      <div className="header__actions">
        <Link to="/">
          <HomeSVG />
        </Link>
      </div>
      <h2 className="header__slogan">{STATIC_TEXTS.headerText}</h2>
    </header>
  );
};

export default Header;
