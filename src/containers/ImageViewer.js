import React from "react";

import { withRouter } from "react-router";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import ForwardArrowSVG from "../components/icons/ForwardArrowSVG";
import BackwardArrowSVG from "../components/icons/BackwardArrowSVG";

/**
 * commands
 * - prev items, next items
 * - return to home
 * - open single image
 */

class ImageGrid extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor() {
    super();
  }

  componentDidMount() {
    console.log("componentDidMount - this.props.auth.uid", this.props.match);
  }

  render() {
    console.log("render - this.props.auth.uid", this.props.match);
    return (
      <section className="image-viewer">
        <div className="image-viewer__top">
          <div className="image-viewer__top-left"></div>
          <h2 className="image-viewer__image-count">3 / 72</h2>
          <div className="image-viewer__close-viewer">
            <Link className="noLinkStyle" to="/">
              Close
            </Link>
          </div>
        </div>
        <div className="image-viewer__image-area">
          <div className="image-button-backward">
            <BackwardArrowSVG />
          </div>
          <div className="image-viewer-image">
            <img
              className="image-viewer-image__image"
              src="https://via.placeholder.com/600/92c952"
            />
          </div>
          <div className="image-button-forward">
            <ForwardArrowSVG />
          </div>
        </div>
        <div className="image-viewer__bottom">
          <h2 className="image-viewer-text">
            accusamus beatae ad facilis cum similique accusamus beatae ad
            facilis cum similique qui sunt
          </h2>
        </div>
      </section>
    );
  }
}

export default withRouter(ImageGrid);
