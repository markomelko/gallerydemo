import React, { Component } from "react";

import { Link } from "react-router-dom";

// State
import { connect } from "react-redux";

// components
import TeaserImage from "../components/TeaserImage";
import ButtonDefault from "../components/ButtonDefault";
import Footer from "../components/layout/Footer";
import Loader from "../components/utils/Loader";

import { STATIC_TEXTS } from "../confs/staticTexts";

class Landing extends Component {
  render() {
    const { appReady } = this.props;
    console.log("Landing", appReady);

    return (
      <React.Fragment>
        {appReady ? (
          <React.Fragment>
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
            <Footer />
          </React.Fragment>
        ) : (
          <Loader />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    appReady: state.ready
  };
};

export default connect(mapStateToProps, null)(Landing);
