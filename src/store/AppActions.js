/**
 * Some comments here:
 *
 *
 *
 */

import { getImages } from "../utils/getImages";

export const AppInit = () => {
  return dispatch => {
    getImages().then(images => {
      dispatch({
        type: "INIT",
        payload: images
      });
    });
  };
};
