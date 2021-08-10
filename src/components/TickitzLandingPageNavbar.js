import React, { Component } from "react";
// import TickitzNavbarStyle from "./NavbarStyle.module.css";
import { Container, Navbar, Nav } from "react-bootstrap";

class TickitzLandingPageNavbar extends Component {
  render() {
    return (
      <div>
        <Container>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
              <img src="/img/home-logo.jpg" alt="tickitz logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/auth/sign-in" className="mx-3">
                  Sign In
                </Nav.Link>
                <Nav.Link href="/auth/sign-up" className="mx-3">
                  Sign Up
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default TickitzLandingPageNavbar;
