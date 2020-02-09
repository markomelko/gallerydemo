const initState = {
  ready: false,
  images: "",
  totalPages: "",
  totalImages: "",
  currentImage: "",
  currentPage: ""
};

const AppReducer = (state = initState, action) => {
  switch (action.type) {
    case "INIT":
      return {
        state,
        ready: true,
        images: action.payload
      };
    default:
      return state;
  }
};

export default AppReducer;
