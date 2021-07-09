import React, { Component } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import TickitzNavbar from "../../../components/TickitzNavbar";
import TickitzFooter from "../../../components/TickitzFooter";
import ProfilePageStyle from "./ProfilePage.module.css";
import { Link } from "react-router-dom";
// import { withRouter } from "react-router";
import { connect } from "react-redux";
import {
  getProfile,
  updateProfile,
  updateProfilePassword,
  updateImageProfile,
  deleteImageProfile,
} from "../../../redux/actions/user";
import { logout } from "../../../redux/actions/auth";
require("dotenv").config();

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        userFirstName: this.props.user.dataUser.user_account_first_name,
        userLastName: this.props.user.dataUser.user_account_last_name,
        userEmail: this.props.user.dataUser.user_account_email,
        userPhoneNumber: this.props.user.dataUser.user_account_phone_number,
        userNewPassword: "",
        userConfirmPassword: "",
        userImage: this.props.user.dataUser.user_account_image,
      },
      isSuccess: false,
      isError: false,
    };
  }

  componentDidMount() {
    // const { id } = this.props.match.params.id;
    console.log(this.props);
    this.getDataUserById(this.props.match.params.id);
  }

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  getDataUserById = (id) => {
    // console.log(this.props);
    this.props.getProfile(id);
  };

  updateProfileData = (event) => {
    event.preventDefault();
    const id = this.props.auth.data.user_account_id;
    const data = {
      userFirstName: this.state.form.userFirstName,
      userLastName: this.state.form.userLastName,
      userEmail: this.state.form.userEmail,
      userPhoneNumber: this.state.form.userPhoneNumber,
    };
    if (
      this.state.form.userFirstName === "" &&
      this.state.form.userLastName === "" &&
      this.state.form.userEmail === "" &&
      this.state.form.userPhone === ""
    ) {
      this.setState({
        isSuccess: false,
        isError: "Fill all the form below to update your data!",
      });
    } else if (this.state.form.userFirstName === "") {
      this.setState({
        isSuccess: false,
        isError: "Fill the first name form now! ",
      });
    } else if (this.state.form.userLastName === "") {
      this.setState({
        isSuccess: false,
        isError: "Fill the last name form now!",
      });
    } else if (this.state.form.userEmail === "") {
      this.setState({
        isSuccess: false,
        isError: "Fill the email form now!",
      });
    } else if (this.state.form.userPhoneNumber === "") {
      this.setState({
        isSuccess: false,
        isError: "Fill the phone number form now!",
      });
    } else {
      this.props
        .updateProfile(id, data)
        .then((res) => {
          this.setState({
            isSuccess: res.action.payload.data.msg,
            isError: false,
          });
          window.setTimeout(() => {
            this.props.getProfile(id);
          }, 3000);
        })
        .catch((err) => {
          console.log(err.response);
          this.setState({
            isSuccess: false,
            isError: err.response.data.msg,
          });
        });
    }
  };

  resetData = () => {
    this.setState({
      ...this.state.form,
      userNewPassword: "",
      userConfirmPassword: "",
    });
  };

  updateProfilePassword = (event) => {
    event.preventDefault();
    const id = this.props.auth.data.user_account_id;
    const data = {
      userNewPassword: this.state.form.userNewPassword,
      userConfirmPassword: this.state.form.userConfirmPassword,
    };
    if (
      this.state.form.userNewPassword === "" &&
      this.state.form.userConfirmPassword === ""
    ) {
      this.setState({
        isSuccess: false,
        isError: "Fill all the form below now!",
      });
    } else if (this.state.form.userNewPassword === "") {
      this.setState({
        isSuccess: false,
        isError: "Fill the new password form now!",
      });
    } else if (this.state.form.userConfirmPassword === "") {
      this.setState({
        isSuccess: false,
        isError: "Fill the confirmation password form now!",
      });
    } else {
      this.props
        .updateProfilePassword(id, data)
        .then((res) => {
          this.setState({
            isSuccess: res.action.payload.data.msg,
            isError: false,
          });
          window.setTimeout(() => {
            this.props.getProfile(id);
          }, 3000);
          this.resetData();
        })
        .catch((err) => {
          this.setState({
            isSuccess: false,
            isError: err.response.data.msg,
          });
        });
    }
  };

  updateProfileImage = (event) => {
    const id = this.props.auth.data.user_account_id;
    const formData = new FormData();
    formData.append("imageFile", event.target.files[0]);
    this.props
      .updateImageProfile(id, formData)
      .then((res) => {
        this.setState({
          ...this.state.form,
          userImage: res.action.payload.data.data.user_account_image,
        });
        this.props.history.push(`/main/profile-page/${id}`);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    // console.log(this.props);
    const { user_account_first_name, user_account_last_name } =
      this.props.user.dataUser;
    const {
      userFirstName,
      userLastName,
      userEmail,
      userPhoneNumber,
      userNewPassword,
      userConfirmPassword,
      userImage,
    } = this.state.form;
    const { isSuccess, isError } = this.state;
    return (
      <div>
        <Container>
          <TickitzNavbar />
          <Row>
            <Col lg={3} className="ml-5 mt-5">
              <p>Info</p>
              <div className="d-flex justify-content-center">
                {this.props.user.dataUser.user_account_image !== "" ? (
                  <img
                    src={`${process.env.REACT_APP_IMAGE_URL}${userImage}`}
                    alt=""
                    className={`${ProfilePageStyle.profile_image} rounded-circle`}
                  />
                ) : (
                  <img src="/img/profile-picture-information.png" alt="" />
                )}
              </div>
              <div className="text-center">
                <p>
                  {user_account_first_name} {user_account_last_name}
                </p>
                <p>Moviegoers</p>
                <Form.Group className={ProfilePageStyle.formUserImage}>
                  <Form.Label
                    htmlFor="files"
                    className={ProfilePageStyle.boxUpdateImage}
                  >
                    Choose from gallery
                  </Form.Label>
                  <Form.Control
                    type="file"
                    id="files"
                    onChange={(event) => this.updateProfileImage(event)}
                    className={ProfilePageStyle.updateImage}
                  />
                  <Button className={ProfilePageStyle.btnChoose}>
                    Choose from gallery
                  </Button>
                </Form.Group>
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
              {isSuccess && (
                <div className="alert alert-success">{isSuccess}</div>
              )}
              {isError && <div className="alert alert-danger">{isError}</div>}
              <Form className="ml-3 mt-5">
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="First name"
                        name="userFirstName"
                        value={userFirstName}
                        onChange={(event) => this.changeText(event)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Last name"
                        name="userLastName"
                        value={userLastName}
                        onChange={(event) => this.changeText(event)}
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
                        value={userEmail}
                        onChange={(event) => this.changeText(event)}
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
                        value={userPhoneNumber}
                        onChange={(event) => this.changeText(event)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  className={`${ProfilePageStyle.profile_update_button} mt-3`}
                  onClick={(event) => this.updateProfileData(event)}
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
                        name="userNewPassword"
                        placeholder="New Password"
                        value={userNewPassword}
                        onChange={(event) => this.changeText(event)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="userConfirmPassword"
                        placeholder="Confirm Password"
                        value={userConfirmPassword}
                        onChange={(event) => this.changeText(event)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  onClick={(event) => this.updateProfilePassword(event)}
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
  auth: state.auth,
  user: state.user,
});

const mapDispatchToProps = {
  getProfile,
  updateProfile,
  updateProfilePassword,
  updateImageProfile,
  deleteImageProfile,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
