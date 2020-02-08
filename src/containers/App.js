import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// containers
import LandingPage from "./LandingPage";
import ImageViewer from "./ImageViewer";
import ImageGrid from "./ImageGrid";

// layouts
import Layout from "../components/layout/Layout";
import ContentContainer from "../components/layout/ContentContainer";

// components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Page404 from "../components/utils/404page";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header />
          <ContentContainer>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/grid/:page/image/:image" component={ImageViewer} />
              <Route path="/grid/:page" component={ImageGrid} />
              <Route component={Page404} />
            </Switch>
          </ContentContainer>
          <Footer />
        </Layout>
      </Router>
    );
  }
}

export default App;
