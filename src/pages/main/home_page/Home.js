import React, { Component } from "react";
import TickitzNavbar from "../../../components/TickitzNavbar";
import TickitzFooter from "../../../components/TickitzFooter";
import TickitzHomeStyle from "./home.module.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import TickitzImage from "../../../components/TickitzImageCard";
import TickitzImageCard1 from "../../../components/TickitzImageCard1";
import axiosApiIntances from "../../../utils/axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getDataMovieAll();
  }

  getDataMovieAll = () => {
    console.log("Get Movie All!");
    axiosApiIntances
      .get("home")
      .then((res) => {
        console.log(res);
        this.setState({ data: res.data.data });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Container>
          <TickitzNavbar />
          <Row className="mt-5">
            <Col lg={5} className="ml-5 mt-5 pt-lg-5">
              <h6 className="text-muted">Nearest Camera, Newest Movie,</h6>
              <h1 className={TickitzHomeStyle.header_big_text_1}>
                Find Out Now!
              </h1>
            </Col>
            <Col lg={5} className="ml-5 pb-lg-5 pl-lg-5 justify-content-center">
              <img
                src="/img/header-image-1.jpg"
                alt="header movie 1"
                className="mr-3 mt-5"
              />
              <img
                src="/img/header-image-2.jpg"
                alt="header movie 2"
                className="mr-3"
              />
              <img
                src="/img/header-image-3.jpg"
                alt="header movie 3"
                className="mr-3 mb-5"
              />
            </Col>
          </Row>
          <Row>
            <Col className={TickitzHomeStyle.now_showing_text_1}>
              <h6 className="ml-4">Now Showing</h6>
            </Col>
            <Col className="text-right">
              <Link to="#" className={TickitzHomeStyle.now_showing_text_2}>
                view all
              </Link>
            </Col>
          </Row>
          <Row className="mt-4 ml-5 overflow-hidden">
            {this.state.data.map((item, index) => {
              return (
                <Col md={2} className="mr-4" key={index}>
                  <TickitzImage />
                </Col>
              );
            })}
          </Row>
          <Row className="mt-5 ml-2 overflow-hidden">
            <Col>
              <h6 className={TickitzHomeStyle.upcoming_movie_text_1}>
                Upcoming Movies
              </h6>
            </Col>
            <Col className="text-right">
              <Link to="#" className={TickitzHomeStyle.now_showing_text_2}>
                view all
              </Link>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1}`}
              >
                September
              </Button>
            </Col>
            <Col xs={1} className="ml-2">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-3`}
              >
                October
              </Button>
            </Col>
            <Col xs={1} className="ml-3">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-4`}
              >
                November
              </Button>
            </Col>
            <Col xs={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-4`}
              >
                December
              </Button>
            </Col>
            <Col sm={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-4`}
              >
                January
              </Button>
            </Col>
            <Col sm={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-4`}
              >
                February
              </Button>
            </Col>
            <Col sm={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-4`}
              >
                March
              </Button>
            </Col>
            <Col sm={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-4`}
              >
                April
              </Button>
            </Col>
            <Col sm={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-4`}
              >
                May
              </Button>
            </Col>
          </Row>
          <Row className="mt-5 ml-2">
            {this.state.data.map((item, index) => {
              return (
                <Col md={2} key={index} className="mr-4">
                  <TickitzImageCard1 data={item} />
                </Col>
              );
            })}
          </Row>
          <Row className="text-center mt-5 mb-5">
            <Col>
              <h5>Be the vanguard of the</h5>
              <h1 className={TickitzHomeStyle.jumbotron_big_text_1}>
                Moviegoers
              </h1>
              <Form inline className="justify-content-center mt-5">
                <Form.Label htmlFor="inlineFormInputName2" srOnly>
                  Name
                </Form.Label>
                <Form.Control
                  type="email"
                  className="mb-2 mr-sm-2"
                  id="inlineFormInputName2"
                  placeholder="Write your email"
                />
                <Button
                  variant="Primary"
                  className={`${TickitzHomeStyle.join_button_1} mb-sm-2`}
                >
                  Join Now
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

export default Home;
