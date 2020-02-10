const initState = {
  ready: false,
  images: "",
  totalPages: "",
  totalImages: "",
  currentImage: ""
};

const AppReducer = (state = initState, action) => {
  switch (action.type) {
    case "INIT":
      // get last image object
      const lastImage = action.payload.slice(-1)[0];
      // get image count, do not trust id value
      const imageCount = action.payload.length;
      // update initial state
      return {
        ...state,
        ready: true,
        images: action.payload,
        totalPages: lastImage.page,
        totalImages: imageCount
      };
    default:
      return state;
  }
};

export default AppReducer;
