import React from "react";

import CodeSVG from "../icons/CodeSVG";

import { DEFAULTS } from "../../utils/defaults";

const Footer = () => {
  return (
    <div className="footer">
      <a href={DEFAULTS.git} target="_blank">
        <CodeSVG />
      </a>
    </div>
  );
};

export default Footer;
