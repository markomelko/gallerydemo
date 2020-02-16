import { getImages, getSpaceXData } from "../utils/getImages";

export const AppInit = () => {
  return dispatch => {
    getImages()
      .then(async images => {
        // set default images and show app
        dispatch({
          type: "INIT",
          payload: images
        });
        // wait for spacex data and set availlable when ready
        const spaceXimages = await getSpaceXData();
        dispatch({ type: "SPACEX-READY", payload: spaceXimages });
      })
      .catch(err => {
        // use some mock images e.g. from assets
        // todo later...
      });
  };
};

export const ChangeImageSource = source => {
  return dispatch => {
    if (source === "default") {
      dispatch({ type: "USE-DEFAULT" });
    } else {
      dispatch({ type: "USE-SPACEX" });
    }
  };
};
