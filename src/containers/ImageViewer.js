import React from "react";

import { withRouter } from "react-router";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ForwardArrowSVG from "../components/icons/ForwardArrowSVG";
import BackwardArrowSVG from "../components/icons/BackwardArrowSVG";

import Loader from "../components/utils/Loader";

import { DEFAULTS } from "../utils/defaults";
import { withTranslation } from "react-i18next";

class ImageViewer extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  render() {
    const { t, appReady, imagesArr, totalImages } = this.props;
    // get wanted image props from query string
    const { page, image } = this.props.match.params;
    // parse value to integer to make conditions work
    const imageID = parseInt(image);
    // default values for image view
    let imageItem = {
      image: DEFAULTS.imageViewerDefaultImage,
      title: t("imageViewerDefaultTitle")
    };

    let imageIndex = 0;

    let prevImage = {
      page: 0,
      id: 0
    };

    let nextImage = {
      page: 0,
      id: 0
    };

    // get currently wanted image - can also use index value, so this is not needed..
    if (appReady) {
      // find wanted image data
      imageItem = imagesArr.find(item => item.id === imageID);
      // find image index
      imageIndex = imagesArr.findIndex(item => item.id === imageID);

      // previous image for routing
      if (imageIndex > 1) {
        prevImage.page = imagesArr[imageIndex - 1].page;
        prevImage.id = imagesArr[imageIndex - 1].id;
      } else {
        prevImage.page = imagesArr[0].page;
        prevImage.id = imagesArr[0].id;
      }

      // next image for routing
      let totalCount = parseInt(totalImages - 1);
      if (imageIndex < totalCount) {
        nextImage.page = imagesArr[imageIndex + 1].page;
        nextImage.id = imagesArr[imageIndex + 1].id;
      } else {
        nextImage.page = imagesArr[totalCount].page;
        nextImage.id = imagesArr[totalCount].id;
      }
    }

    return (
      <section className="image-viewer">
        {appReady ? (
          <React.Fragment>
            <div className="image-viewer__top">
              <div className="image-viewer__top-left"></div>
              <h2 className="image-viewer__image-count">
                {image + "/" + totalImages}
              </h2>
              <div className="image-viewer__close-viewer">
                <Link className="noLinkStyle" to={`/grid/${page}`}>
                  {t("imageViewerClose")}
                </Link>
              </div>
            </div>
            <div className="image-viewer__image-area">
              <div className="image-button-backward">
                <Link to={`/grid/${prevImage.page}/image/${prevImage.id}`}>
                  <BackwardArrowSVG />
                </Link>
              </div>
              <div className="image-viewer-image">
                <img
                  className="image-viewer-image__image"
                  src={imageItem.image}
                />
              </div>
              <div className="image-button-forward">
                <Link to={`/grid/${nextImage.page}/image/${nextImage.id}`}>
                  <ForwardArrowSVG />
                </Link>
              </div>
            </div>
            <div className="image-viewer__bottom">
              <h2 className="image-viewer-text">{imageItem.title}</h2>
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
    totalImages: state.totalImages
  };
};

export default withRouter(
  connect(mapStateToProps, null)(withTranslation()(ImageViewer))
);
