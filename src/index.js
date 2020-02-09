import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/App";

// Redux - Application state management
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Redux - reducer
import appReducer from "./store/AppRedecer";

// Init app
import { AppInit } from "./store/AppActions";

// Redux - store
const store = createStore(
  appReducer,
  compose(
    applyMiddleware(thunk) //, //remove devtools when build to production - wont work on mobile browsers
    /*window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 })*/
  )
);

store.dispatch(AppInit());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
