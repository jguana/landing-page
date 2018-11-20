import React, { Component } from "react";
import AppNavBar from "./components/AppNavbar";
import Todo from "./components/Todo";
import ItemModal from "./components/ItemModal";
import Blog from "./components/Blog";
import Sidebar from "./components/Sidebar";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";

import Media from "react-media";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Media query="(max-width: 575px)">
              {matches =>
                matches ? (
                  <div className="mobile">
                    <AppNavBar />
                    <p>The document is less than 600px wide.</p>
                    <Route exact path="/" component={Home} />
                    <Route path="/navigate" component={Sidebar} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/todo" component={ItemModal} />
                    <Route path="/todo" component={Todo} />
                  </div>
                ) : (
                  <div className="desktop">
                    <div class="sidebar">
                      <Route path="/" component={Sidebar} />
                    </div>
                    <div class="content">
                      <Route exact path="/" component={Home} />
                      <Route path="/portfolio" component={Portfolio} />
                      <Route path="/blog" component={Blog} />
                      <Route path="/todo" component={ItemModal} />
                      <Route path="/todo" component={Todo} />
                    </div>
                  </div>
                )
              }
            </Media>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
