import React, { Component } from "react";
import TickitzNavbarStyle from "./NavbarStyle.module.css";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  // Form,
  // FormControl,
  Button,
} from "react-bootstrap";

class TickitzNavbar extends Component {
  render() {
    return (
      <div>
        <Container>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
              <img src="/img/home-logo.jpg" alt="tickitz logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/main/home" className="mx-3">
                  Home
                </Nav.Link>
                <Nav.Link href="/main/payment-page" className="mx-3">
                  Payment
                </Nav.Link>
                <Nav.Link href="#link" className="mx-3">
                  Profile
                </Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <NavDropdown
                  title="Location"
                  id="basic-nav-dropdown"
                  className="mx-3"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
                <Button className={TickitzNavbarStyle.sign_in_button}>
                  Sign In
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default TickitzNavbar;
