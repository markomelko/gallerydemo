import React from "react";

import { Link } from "react-router-dom";
import ButtonDefault from "../../components/ButtonDefault";
import { useTranslation } from "react-i18next";

const notFound = () => {
  return (
    <div className="not-found">
      <h1>{useTranslation().t("text404")}</h1>
      <Link className="not-found__home" to="/">
        <ButtonDefault text="home" />
      </Link>
    </div>
  );
};

export default notFound;
