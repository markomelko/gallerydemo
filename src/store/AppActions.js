/**
 * Action creators
 *
 * 1
 * 2
 * 3
 * 4
 *
 */

import { getImages } from "../helpers/getImages";

export const AppInit = () => {
  return dispatch => {
    // get images from session storage or api endpoint
    getImages().then(images => {
      console.log("All images:", images);
      dispatch({
        type: "INIT"
      });
    });
  };
};
