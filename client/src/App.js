import React, { Component } from "react";
import AppNavBar from "./components/AppNavbar";
import Todo from "./components/Todo";
import ItemModal from "./components/ItemModal";
import Blog from "./components/Blog";
import Navigate from "./components/Navigate";
import Chat from "./components/Chat";
import Home from "./components/Home";

import Media from "react-media";
import { Container, Col, Row } from "reactstrap";
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
                    <Container>
                      <p>The document is less than 600px wide.</p>
                      <Route exact path="/" component={Home} />
                      <Route path="/navigate" component={Navigate} />
                      <Route path="/chat" component={Chat} />
                      <Route path="/blog" component={Blog} />
                      <Route path="/todo" component={ItemModal} />
                      <Route path="/todo" component={Todo} />
                    </Container>
                  </div>
                ) : (
                  <div className="desktop">
                    <Container>
                      <Row>
                        <Col md={4}>
                          <Route path="/" component={Navigate} />
                        </Col>
                        <Col md={8}>
                          <Route exact path="/" component={Home} />
                          <Route path="/chat" component={Chat} />
                          <Route path="/blog" component={Blog} />
                          <Route path="/todo" component={ItemModal} />
                          <Route path="/todo" component={Todo} />
                        </Col>
                      </Row>
                    </Container>
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
