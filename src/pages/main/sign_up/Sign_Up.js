import React, { Component } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignUpStyle from "./SignUpStyle.module.css";
import { connect } from "react-redux";
import { register } from "../../../redux/actions/auth";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        userName: "",
        userEmail: "",
        userPassword: "",
      },
      isSuccess: false,
      isError: false,
    };
  }

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleRegister = (event) => {
    event.preventDefault();
    const data = {
      userEmail: this.state.form.userEmail,
      userName: this.state.form.userName,
      userPassword: this.state.form.userPassword,
    };

    if (
      this.state.form.userEmail === "" &&
      this.state.form.userName === "" &&
      this.state.form.userPassword === ""
    ) {
      this.setState({
        isError: "Fill all the form below to register!",
      });
    } else if (this.state.form.userName === "") {
      this.setState({
        isError: "Fill the username form!",
      });
    } else if (this.state.form.userEmail === "") {
      this.setState({
        isError: "Fill the email form!",
      });
    } else if (this.state.form.userPassword === "") {
      this.setState({
        isError: "Fill the password form!",
      });
    } else {
      this.props
        .register(data)
        .then((res) => {
          // console.log(res);
          this.setState({
            isSuccess: res.action.payload.data.msg,
            isError: false,
          });
          window.setTimeout(() => {
            this.props.history.push("/auth/sign-in");
          }, 3000);
        })
        .catch((err) => {
          console.log(err.response);
          this.setState({
            isError: err.response.data.msg,
            isSuccess: false,
          });
        });
    }
  };

  render() {
    const { userName, userEmail, userPassword, isSuccess, isError } =
      this.state;
    return (
      <div>
        <Row>
          <Col md={7} className={SignUpStyle.left_background}>
            <img
              src="/img/image 1.jpg"
              className={SignUpStyle.image_background}
              alt="avenger background"
            />
            <img
              src="/img/tickitz 1.png"
              className={SignUpStyle.tickitz_white_big_brand}
              alt="tickitz big brand"
            />
            <h1 className={SignUpStyle.image_logo_text}>
              Lets Build Your Account
            </h1>
            <h5 className={`${SignUpStyle.image_logo_text_1} text-muted`}>
              To be a loyal moviegoer and access all of features, your details
              are required.
            </h5>
            <h5 className={`${SignUpStyle.image_logo_text_2} text-light`}>
              Fill Your Additional Details
            </h5>
            <h5 className={`${SignUpStyle.image_logo_text_3} text-muted`}>
              Activate Your Account
            </h5>
            <h5 className={`${SignUpStyle.image_logo_text_4} text-muted`}>
              Done
            </h5>
          </Col>
          <Col md={4} className={`${SignUpStyle.right_column} mt-5 ml-5 pt-5`}>
            <h2 className={`${SignUpStyle.signup_text} mt-5`}>
              Fill your additional details
            </h2>
            <Form>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={(event) => this.changeText(event)}
                  placeholder="Write your email"
                  className={SignUpStyle.form_size}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="userEmail"
                  value={userEmail}
                  onChange={(event) => this.changeText(event)}
                  placeholder="Write your email"
                  className={SignUpStyle.form_size}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="userPassword"
                  value={userPassword}
                  onChange={(event) => this.changeText(event)}
                  placeholder="Write your password"
                  className={SignUpStyle.form_size}
                />
              </Form.Group>
              {isSuccess && (
                <div className="alert alert-success">{isSuccess}</div>
              )}
              {isError && <div className="alert alert-danger">{isError}</div>}
              <Button
                className={`${SignUpStyle.sign_up_button} mt-3`}
                onClick={this.handleRegister}
              >
                Join for free now
              </Button>
            </Form>
            <p
              className={`${SignUpStyle.other_login_size} text-muted text-center mt-4`}
            >
              Did you already have an account?
              <Link
                to="/auth/sign-in"
                className={`${SignUpStyle.reset_now} ml-2`}
              >
                Log In
              </Link>
            </p>
            <Row className={`${SignUpStyle.other_login_size} mt-4`}>
              <hr />
              <p>Or</p>
              <hr />
            </Row>
            <Row
              className={`${SignUpStyle.other_login_size} justify-content-center`}
            >
              <Button
                className={`${SignUpStyle.social_media_button} ml-2 mr-4 bg-light text-muted`}
              >
                Google
              </Button>
              <Button
                className={`${SignUpStyle.social_media_button} bg-light text-muted`}
              >
                Facebook
              </Button>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
