const initState = {
  ready: false
};

const AppReducer = (state = initState, action) => {
  switch (action.type) {
    case "INIT":
      return {
        state,
        ready: true
      };
    default:
      return state;
  }
};

export default AppReducer;
