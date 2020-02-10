import React from "react";

import { Link } from "react-router-dom";

import ButtonDefault from "../../components/ButtonDefault";

import { STATIC_TEXTS } from "../../utils/staticTexts";

const notFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: "2rem" }}>{STATIC_TEXTS.text404}</h1>
      <Link to="/">
        <ButtonDefault text="home" />
      </Link>
    </div>
  );
};

export default notFound;
