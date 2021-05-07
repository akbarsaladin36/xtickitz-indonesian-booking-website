import React, { Component } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignInStyle from "./SignInStyle.module.css";
import { connect } from "react-redux";
import { login } from "../../../redux/actions/auth";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        userEmail: "",
        userPassword: "",
      },
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

  handleLogin = (event) => {
    event.preventDefault();
    // console.log(this.state.form);
    this.props.login(this.state.form).then((result) => {
      // console.log(this.props.auth.data.token);
      localStorage.setItem("token", this.props.auth.data.token);
      this.props.history.push("/main/home");
    });
  };
  render() {
    const { userEmail, userPassword } = this.state;
    return (
      <div>
        <Row>
          <Col md={7} className={SignInStyle.left_background}>
            <img
              src="/img/image 1.jpg"
              className={SignInStyle.image_background}
              alt="avenger background"
            />
            <img
              src="/img/tickitz 1.png"
              className={SignInStyle.tickitz_white_big_brand}
              alt="tickitz big brand"
            />
            <h1 className={SignInStyle.image_logo_text}>Wait, Watch, Wow!</h1>
          </Col>
          <Col md={4} className="mt-5 ml-5 pt-5">
            <h2 className={`${SignInStyle.signin_text} mt-5`}>Sign In</h2>
            <p className="text-muted">
              Sign in with your data that you entered during your registration
            </p>
            <Form onSubmit={this.handleLogin} className="mt-3">
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Write your email"
                  name="userEmail"
                  value={userEmail}
                  onChange={(event) => this.changeText(event)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Write your password"
                  name="userPassword"
                  value={userPassword}
                  onChange={(event) => this.changeText(event)}
                />
              </Form.Group>
              <Button
                type="submit"
                className={`${SignInStyle.sign_in_button} mt-3`}
              >
                Sign In
              </Button>
            </Form>
            <p className="text-muted text-center mt-4">
              Forget password?
              <Link to="#" className={`${SignInStyle.reset_now} ml-2`}>
                Reset Now
              </Link>
            </p>
            <Row className="mt-4">
              <hr />
              <p>Or</p>
              <hr />
            </Row>
            <Row className="justify-content-center">
              <Button
                className={`${SignInStyle.social_media_button} ml-2 mr-4 bg-light text-muted`}
              >
                Google
              </Button>
              <Button
                className={`${SignInStyle.social_media_button} bg-light text-muted`}
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

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);