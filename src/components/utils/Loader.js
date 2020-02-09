import React from "react";

import { STATIC_TEXTS } from "../../utils/staticTexts";

const Loader = () => {
  return (
    <div className="gallery-loading">
      <div className="gallery-loading__loader-area">
        <h2>{STATIC_TEXTS.loaderTitle}</h2>
        <h2 className="loading-images-text">{STATIC_TEXTS.loaderText}</h2>
      </div>
    </div>
  );
};

export default Loader;
