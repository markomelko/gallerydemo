import React from "react";

import CodeSVG from "../icons/CodeSVG";

import { STATIC_TEXTS } from "../../utils/staticTexts";

const Footer = () => {
  return (
    <div className="footer">
      <a href={STATIC_TEXTS.git} target="_blank">
        <CodeSVG />
      </a>
    </div>
  );
};

export default Footer;
