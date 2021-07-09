import React, { Component } from "react";
import TickitzNavbarStyle from "./NavbarStyle.module.css";
import { connect } from "react-redux";
import { logout } from "../redux/actions/auth";
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
  componentDidMount() {
    console.log(this.props);
  }

  handleLogout = (params) => {
    if (params) {
      localStorage.clear();
      window.location.href = "/auth/sign-in";
    }
  };

  render() {
    const { isLogin } = this.props.auth;
    return (
      <div>
        <Container>
          <Navbar bg="light" expand="lg">
            {isLogin === true ? (
              <Navbar.Brand href="/main/home">
                <img src="/img/home-logo.jpg" alt="tickitz logo" />
              </Navbar.Brand>
            ) : (
              <Navbar.Brand href="/">
                <img src="/img/home-logo.jpg" alt="tickitz logo" />
              </Navbar.Brand>
            )}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {isLogin === true &&
              this.props.auth.data.user_account_status === "user" ? (
                <Nav className="mr-auto">
                  <Nav.Link href="/main/home" className="mx-3">
                    Home
                  </Nav.Link>
                  <Nav.Link href="/main/payment-page" className="mx-3">
                    Payment
                  </Nav.Link>
                  <Nav.Link
                    href={`/main/profile-page/${this.props.auth.data.user_account_id}`}
                    className="mx-3"
                  >
                    Profile
                  </Nav.Link>
                </Nav>
              ) : (
                <Nav className="mr-auto">
                  <Nav.Link href="#" className="mx-3">
                    Dashboard
                  </Nav.Link>
                  <Nav.Link href="/main/admin-page" className="mx-3">
                    Manage Movie
                  </Nav.Link>
                  <Nav.Link href="#" className="mx-3">
                    Manage Schedule
                  </Nav.Link>
                </Nav>
              )}

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
                {(isLogin === true &&
                  this.props.auth.data.user_account_status === "user") ||
                this.props.auth.data.user_account_status === "admin" ? (
                  <Button
                    className={TickitzNavbarStyle.sign_in_button}
                    onClick={() => this.handleLogout(logout)}
                  >
                    Logout
                  </Button>
                ) : (
                  <Button className={TickitzNavbarStyle.sign_in_button}>
                    Sign In
                  </Button>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(TickitzNavbar);
