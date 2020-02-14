import React from "react";

import { useTranslation } from "react-i18next";

const ButtonDefault = ({ text }) => {
  let buttonText = useTranslation().t("buttonText");

  if (text !== undefined) {
    buttonText = text;
  }

  return <div className="btn btn-default">{buttonText}</div>;
};

export default ButtonDefault;
