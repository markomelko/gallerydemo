const initState = {
  ready: false,
  spaceXselected: false,
  spaceXavaillable: false,
  images: "", // currently selected images
  gallery: "default",
  demoimages: "",
  spaceximages: "",
  totalPages: "",
  totalImages: "",
  currentImage: ""
};

let lastImage;
let imageCount;

const AppReducer = (state = initState, action) => {
  switch (action.type) {
    case "INIT":
      // get last image object
      lastImage = action.payload.slice(-1)[0];
      // get image count, do not trust id value
      imageCount = action.payload.length;
      // update initial state
      return {
        ...state,
        ready: true,
        images: action.payload,
        demoimages: action.payload,
        totalPages: lastImage.page,
        totalImages: imageCount
      };

    case "SPACEX-READY":
      return {
        ...state,
        spaceXavaillable: true,
        spaceximages: action.payload
      };

    case "USE-SPACEX":
      // get last image object
      lastImage = state.spaceximages.slice(-1)[0];
      // get image count, do not trust id value
      imageCount = state.spaceximages.length;
      // update initial state
      return {
        ...state,
        ready: true,
        images: state.spaceximages,
        totalPages: lastImage.page,
        totalImages: imageCount,
        gallery: "spacex"
      };
    case "USE-DEFAULT":
      // get last image object
      lastImage = state.demoimages.slice(-1)[0];
      // get image count, do not trust id value
      imageCount = state.demoimages.length;
      // update initial state
      return {
        ...state,
        ready: true,
        images: state.demoimages,
        totalPages: lastImage.page,
        totalImages: imageCount,
        gallery: "default"
      };

    default:
      return state;
  }
};

export default AppReducer;
