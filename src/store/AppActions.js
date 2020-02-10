import { getImages } from "../utils/getImages";

export const AppInit = () => {
  return dispatch => {
    getImages()
      .then(images => {
        dispatch({
          type: "INIT",
          payload: images
        });
      })
      .catch(err => {
        // use some mock images e.g. from assets
        // todo later...
      });
  };
};
