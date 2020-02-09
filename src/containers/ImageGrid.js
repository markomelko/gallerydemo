import React from "react";

import { withRouter } from "react-router";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

// connect to state
import { connect } from "react-redux";

import ForwardArrowSVG from "../components/icons/ForwardArrowSVG";
import BackwardArrowSVG from "../components/icons/BackwardArrowSVG";

import TeaserImage from "../components/TeaserImage";
import Loader from "../components/utils/Loader";

class ImageViewer extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  // check is this really needed!
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { appReady, imagesArr, totalPages, currentPage } = this.props;
    const { page } = this.props.match.params;

    let teaserElements = "";
    let wantedImages = [];

    // CHECK OVER SITUATIONS 0 ja yli 5000..

    // get wanted page images
    if (page <= totalPages) {
      imagesArr.forEach(image => {
        if (image.page == page) {
          wantedImages.push(image);
        }
      });
    }

    // create teaser image components
    teaserElements = wantedImages.map(image => {
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

    return (
      <section className="image-grid">
        {appReady ? (
          <React.Fragment>
            <div className="image-grid__images">{teaserElements}</div>

            <div className="image-grid__controls">
              <Link to={`/grid/${parseInt(page) - 1}`}>
                <BackwardArrowSVG />
              </Link>

              <h2>{page + "/" + totalPages}</h2>
              <Link to={`/grid/${parseInt(page) + 1}`}>
                <ForwardArrowSVG />
              </Link>
            </div>
          </React.Fragment>
        ) : (
          <Loader />
        )}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    appReady: state.ready,
    imagesArr: state.images,
    totalPages: state.totalPages,
    currentPage: state.currentPage
  };
};

export default withRouter(connect(mapStateToProps, null)(ImageViewer));
