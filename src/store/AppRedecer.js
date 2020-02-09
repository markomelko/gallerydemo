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
      const lastImage = action.payload.slice(-1)[0];
      const imageCount = action.payload.length;
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
