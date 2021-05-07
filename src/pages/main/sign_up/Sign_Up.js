import React, { Component } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignUpStyle from "./SignUpStyle.module.css";

class SignUp extends Component {
  render() {
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
          <Col md={4} className="mt-5 ml-5 pt-5">
            <h2 className={`${SignUpStyle.signup_text} mt-5`}>
              Fill your additional details
            </h2>
            <Form>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Write your email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Write your password"
                />
              </Form.Group>
              <Button className={`${SignUpStyle.sign_up_button} mt-3`}>
                Join for free now
              </Button>
            </Form>
            <p className="text-muted text-center mt-4">
              Did you already have an account?
              <Link to="#" className={`${SignUpStyle.reset_now} ml-2`}>
                Log In
              </Link>
            </p>
            <Row className="mt-4">
              <hr />
              <p>Or</p>
              <hr />
            </Row>
            <Row className="justify-content-center">
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

export default SignUp;
