import React from "react";

import CodeSVG from "../icons/CodeSVG";

import { DEFAULTS } from "../../utils/defaults";

const Footer = ({ spacex, gallery, handleGalleryChange }) => {
  let linkText;

  if (gallery === "default") {
    linkText = "Show SpaceX badge images";
  } else {
    linkText = "Show default images";
  }

  return (
    <div className="footer">
      <a href={DEFAULTS.git} target="_blank">
        <CodeSVG />
      </a>
      <h2 className="footer__change-gallery">
        {spacex ? (
          <a href="#" onClick={handleGalleryChange}>
            {linkText}
          </a>
        ) : (
          ""
        )}
      </h2>
      <h2 className="footer__current-gallery"># {gallery}</h2>
    </div>
  );
};

export default Footer;
