import React, { Component } from "react";
import { Nav, NavItem, NavLink, Container, Col, Row } from "reactstrap";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>John Kim</h2>
        <p>
          I’m a private educator seeking exciting new challenges in the software
          industry. My experience in education - working personally with over 50
          different students - has helped me analyze and hone my learning
          technique. I’m tech-savvy, always curious and a quick learner. The
          projects that I’ve built over the past two months demonstrate my
          current understanding of software.
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
