import React, { Component } from "react";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import { Route, NavLink, HashRouter } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

class Menu extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Container>
            <Row>
              <Col xs="2">
                <ul className="header">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/stuff">Stuff</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </Col>
              <Col xs="7">
                <div className="content" />
                <Route exact path="/" component={Home} />
                <Route path="/stuff" component={Stuff} />
                <Route path="/contact" component={Contact} />
              </Col>
            </Row>
          </Container>
        </div>
      </HashRouter>
    );
  }
}

export default Menu;
