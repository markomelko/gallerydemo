import React from "react";

import { Link } from "react-router-dom";

const TeaserImage = ({ id, page, thumpnail, description }) => {
  return (
    <Link to={`/grid/${page}/image/${id}`} className="image-teaser">
      <div className="image-teaser__image-box">
        <img className="image-teaser__image" src={thumpnail} />
      </div>
      <div className="image-teaser__details">
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default TeaserImage;
