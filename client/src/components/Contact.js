import React, { Component } from "react";
import { Nav, NavItem, NavLink, Container, Col, Row } from "reactstrap";

class Contact extends Component {
  render() {
    const title = {
      paddingTop: "80px"
    };
    const desc = {};

    return (
      <div>
        <img
          src={"https://avatars1.githubusercontent.com/u/34145926?s=460&v=4"}
          height={"200px"}
          width={"200px"}
        />
        <h2 style={title}>John Kim</h2>
        <p style={desc}>
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
