import React, { Component } from "react";
import AppNavBar from "./components/AppNavbar";
import Todo from "./components/Todo";
import ItemModal from "./components/ItemModal";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Hockey from "./components/Hockey";

import { Container } from "reactstrap";
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
            <AppNavBar />
            <Container>
              <br/>
              <Route path="/contact" component={Contact} />
              <Route path="/hockey" component={Hockey} />
              <Route path="/blog" component={Blog} />
              <Route path="/todo" component={ItemModal} />
              <Route path="/todo" component={Todo} />
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
