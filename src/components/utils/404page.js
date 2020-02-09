import React from "react";

import { Link } from "react-router-dom";

import ButtonDefault from "../../components/ButtonDefault";

const notFound = () => {
  return (
    <div className="align-content-center">
      <h1>Sorry can not find content!</h1>
      <Link to="/">
        <ButtonDefault text="home" />
      </Link>
    </div>
  );
};

export default notFound;
