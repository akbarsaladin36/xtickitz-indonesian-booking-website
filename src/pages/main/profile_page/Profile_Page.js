import React, { Component } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import TickitzNavbar from "../../../components/TickitzNavbar";
import TickitzFooter from "../../../components/TickitzFooter";
import ProfilePageStyle from "./ProfilePage.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getProfile,
  updateProfile,
  updateProfilePassword,
} from "../../../redux/actions/user";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        userFirstName: "",
        userLastName: "",
        userEmail: "",
        userPhoneNumber: "",
        userNewPassword: "",
        userConfirmPassword: "",
      },
      userId: "",
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getDataUserById(id);
  }

  getDataUserById = (id) => {
    this.props.getProfile(id);
  };

  updateProfileData = (event, id) => {
    event.preventDefault();
    // console.log(this.props)
    const formData = new FormData();
    formData.append("userFirstName", this.state.form.userFirstName);
    formData.append("userLastName", this.state.form.userLastName);
    formData.append("userEmail", this.state.form.userEmail);
    formData.append("userPhoneNumber", this.state.form.userPhoneNumber);
    this.props.updateProfile(id, formData).then((res) => {
      this.props.getProfile(id);
    });
  };

  render() {
    // console.log(this.props.user.dataUser);
    const {
      user_account_first_name,
      user_account_last_name,
    } = this.props.user.dataUser;
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
                <p>
                  {user_account_first_name} {user_account_last_name}
                </p>
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
              <Form onSubmit={this.updateProfileData} className="ml-3 mt-5">
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="First name"
                        name="userFirstName"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Last name"
                        name="userLastPassword"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Form.Group>
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="E-mail"
                        name="userEmail"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Phone Number"
                        name="userPhoneNumber"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  type="submit"
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
                        name="newPassword"
                        placeholder="New Password"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  type="submit"
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

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = { getProfile, updateProfile, updateProfilePassword };

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
