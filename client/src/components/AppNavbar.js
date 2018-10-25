import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">j</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
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
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
