import React, { Component } from "react";

import { Link } from "react-router-dom";

// components
import TeaserImage from "../components/TeaserImage";
import ButtonDefault from "../components/ButtonDefault";

// static
import { STATIC_TEXTS } from "../confs/staticTexts";

class Landing extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="landing-page__teaser">
          <TeaserImage />
          <TeaserImage />
          <TeaserImage />
        </div>
        <div className="landing-page__details">
          <h1 className="landing-page__details-title">
            {STATIC_TEXTS.pageTitle}
          </h1>
          <p className="landing-page__details-description">
            {STATIC_TEXTS.pageDescription}
          </p>
          <div className="landing-page__details-goto">
            <Link to="/grid/1">
              <ButtonDefault />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
