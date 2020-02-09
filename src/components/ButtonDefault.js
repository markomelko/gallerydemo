import React from "react";

import { STATIC_TEXTS } from "../utils/staticTexts";

const ButtonDefault = ({ text }) => {
  let buttonText = STATIC_TEXTS.buttonText;

  if (text !== undefined) {
    buttonText = text;
  }

  return <div className="btn btn-default">{buttonText}</div>;
};

export default ButtonDefault;
