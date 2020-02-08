import React from "react";

/*
 * next image
 * prev image
 * close -> grid
 *
 */

import ForwardArrowSVG from "../components/icons/ForwardArrowSVG";
import BackwardArrowSVG from "../components/icons/BackwardArrowSVG";

import TeaserImage from "../components/TeaserImage";

class ImageViewer extends React.Component {
  /* componentDidMount() {
    window.scrollTo(0, 0);
  } */

  render() {
    return (
      <section className="image-grid">
        <div className="image-grid__images">
          <TeaserImage />
          <TeaserImage />
          <TeaserImage />
          <TeaserImage />
          <TeaserImage />
          <TeaserImage />
        </div>

        <div className="image-grid__controls">
          <BackwardArrowSVG />
          <h2>2 / 7</h2>
          <ForwardArrowSVG />
        </div>
      </section>
    );
  }
}

export default ImageViewer;
