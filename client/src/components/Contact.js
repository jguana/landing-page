import React, { Component } from "react";
import { Nav, NavItem, NavLink, Container, Col, Row, Media } from "reactstrap";

class Contact extends Component {
  render() {
    const title = {
      paddingTop: "80px"
    };
    const desc = {};
    const avatarStyle = {};

    return (
      <div>
        <img
          styles={avatarStyle}
          src={"https://avatars1.githubusercontent.com/u/34145926?s=460&v=4"}
        />
        <h2 style={title}>John Kim</h2>
        <p style={desc}>
          Vancouver based private tutor seeking exciting new challenges in the
          software industry.
        </p>
        <Nav vertical>
          <NavItem>
            <NavLink href="/contact/">contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/chat/">chat</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/blog/">blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/todo/">todo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/jguana">github</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Contact;
