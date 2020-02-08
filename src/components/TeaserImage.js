import React from "react";

import { Link } from "react-router-dom";

const TeaserImage = ({ url, description }) => {
  return (
    <Link to="/grid/3/image/3" className="image-teaser">
      <div className="image-teaser__image-box">
        <img
          className="image-teaser__image"
          src="https://via.placeholder.com/150/92c952"
        />
      </div>
      <div className="image-teaser__details">
        <p>accusamus beatae ad facilis cum similique qui sunt</p>
      </div>
    </Link>
  );
};

export default TeaserImage;
