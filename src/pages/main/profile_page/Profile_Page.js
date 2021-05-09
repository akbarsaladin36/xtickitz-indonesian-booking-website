import React, { Component } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import TickitzNavbar from "../../../components/TickitzNavbar";
import TickitzFooter from "../../../components/TickitzFooter";
import ProfilePageStyle from "./ProfilePage.module.css";
import { Link } from "react-router-dom";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        userEmail: "",
      },
    };
  }
  render() {
    return (
      <div>
        <Container>
          <TickitzNavbar />
          <Row>
            <Col lg={3} className="ml-5 mt-5">
              <p>Info</p>
              <div className="d-flex justify-content-center">
                <img src="/img/profile-picture-information.png" alt="" />
              </div>
              <div className="text-center">
                <p>Jonas El Rodriguez</p>
                <p>Moviegoers</p>
              </div>
              <hr />
            </Col>
            <Col lg={7} className="ml-4 mt-5 bg-white">
              <Row className="ml-3 mt-3">
                <Link to="#">Account History</Link>
                <Link to="#" className="ml-3">
                  Order History
                </Link>
              </Row>
              <hr className="mb-5" />
              <p className="mt-3 ml-3">Detail Information</p>
              <hr className="mb-2 ml-3" />
              <Form className="ml-3 mt-5">
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="First name" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Last name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Form.Group>
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control type="email" placeholder="E-mail" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="text" placeholder="Phone Number" />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  className={`${ProfilePageStyle.profile_update_button} mt-3`}
                >
                  Update Now
                </Button>
              </Form>
              <p className="mt-5 ml-3">Account and Privacy</p>
              <hr className="mb-2 ml-3" />
              <Form className="ml-3 mt-3">
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>New Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="New Password"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  className={`${ProfilePageStyle.profile_update_button} mt-3`}
                >
                  Update Now
                </Button>
              </Form>
            </Col>
          </Row>
          <TickitzFooter />
        </Container>
      </div>
    );
  }
}

export default ProfilePage;
