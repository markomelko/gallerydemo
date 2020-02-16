import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

// update state
import { ChangeImageSource } from "../store/AppActions";

// components
import TeaserImage from "../components/TeaserImage";
import ButtonDefault from "../components/ButtonDefault";
import Footer from "../components/layout/Footer";
import Loader from "../components/utils/Loader";

import { DEFAULTS } from "../utils/defaults";
import { withTranslation } from "react-i18next";

class Landing extends Component {
  constructor() {
    super();
    this.handleGalleryChange.bind(this);
  }

  handleGalleryChange = () => {
    if (this.props.gallery === "default") {
      this.props.ChangeImageSource("spacex");
    } else {
      this.props.ChangeImageSource("default");
    }
  };

  render() {
    const { t, appReady, imagesArr, spacex, gallery } = this.props;

    let teaserImages = "";

    if (appReady && imagesArr.length > 2) {
      const tempArr = imagesArr.slice(0, 3);

      teaserImages = tempArr.map(image => {
        return (
          <TeaserImage
            key={image.id}
            id={image.id}
            page={image.page}
            thumpnail={image.thump}
            description={image.title}
          />
        );
      });
    }

    return (
      <React.Fragment>
        {appReady ? (
          <React.Fragment>
            <div className="landing-page">
              <div className="landing-page__teaser">{teaserImages}</div>
              <div className="landing-page__details">
                <h1 className="landing-page__details-title">
                  {t("pageTitle")}
                </h1>
                <p className="landing-page__details-description">
                  {t("pageDescription")}
                </p>
                <div className="landing-page__details-goto">
                  <Link to={`/grid/${DEFAULTS.startGalleryFrom}`}>
                    <ButtonDefault />
                  </Link>
                </div>
              </div>
            </div>
            <Footer
              spacex={spacex}
              gallery={gallery}
              handleGalleryChange={this.handleGalleryChange}
            />
          </React.Fragment>
        ) : (
          <Loader />
        )}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ChangeImageSource: source => dispatch(ChangeImageSource(source))
  };
};

const mapStateToProps = state => {
  return {
    appReady: state.ready,
    imagesArr: state.images,
    spacex: state.spaceXavaillable,
    gallery: state.gallery
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Landing));
