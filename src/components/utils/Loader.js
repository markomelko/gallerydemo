import React from "react";

import { useTranslation } from "react-i18next";

const Loader = () => {
  const { t } = useTranslation();
  return (
    <div className="gallery-loading">
      <div className="gallery-loading__loader-area">
        <h2>{t("loaderTitle")}</h2>
        <h2 className="loading-images-text">{t("loaderText")}</h2>
      </div>
    </div>
  );
};

export default Loader;
