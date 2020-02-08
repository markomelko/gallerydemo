/**
 * Action creators
 *
 * 1
 * 2
 * 3
 * 4
 *
 */

// import axios from "axios";

export const AppInit = () => {
  return dispatch => {
    // get images from session storage or api endpoint
    setTimeout(() => {
      dispatch({
        type: "INIT"
      });
    }, 10000);
  };
};
