import React from "react";

import { Link } from "react-router-dom";

import ButtonDefault from "../../components/ButtonDefault";

import { STATIC_TEXTS } from "../../utils/staticTexts";

const notFound = () => {
  return (
    <div className="not-found">
      <h1>{STATIC_TEXTS.text404}</h1>
      <Link className="not-found__home" to="/">
        <ButtonDefault text="home" />
      </Link>
    </div>
  );
};

export default notFound;
