import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

class Navigate extends Component {
  render() {
    const title = {
      paddingTop: "20px"
    };
    const desc = {};

    return (
      <div>
        <h2 style={title}>John Kim</h2>
        <p style={desc}>
          Vancouver based private tutor seeking exciting new challenges in the
          software industry.
        </p>
        <Nav vertical>
          <NavItem>
            <NavLink href="/">home</NavLink>
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

export default Navigate;
