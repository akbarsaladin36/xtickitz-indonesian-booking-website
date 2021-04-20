import React, { Component } from "react";
import TickitzNavbar from "../../components/TickitzNavbar";
import TickitzFooter from "../../components/TickitzFooter";
import TickitzHomeStyle from "./home.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import TickitzImage from "../../components/TickitzImageCard";

class Home extends Component {
  render() {
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
            <Col md={2} className="mr-4">
              <TickitzImage />
            </Col>
            <Col md={2} className="mr-4">
              <TickitzImage />
            </Col>
            <Col md={2} className="mr-4">
              <TickitzImage />
            </Col>
            <Col md={2} className="mr-4">
              <TickitzImage />
            </Col>
            <Col md={2} className="mr-4">
              <TickitzImage />
            </Col>
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
          <Row>
            <Col className="ml-3">
              <Button
                variant="Primary"
                className={TickitzHomeStyle.button_month_1}
              >
                September
              </Button>
            </Col>
            <Col>
              <Button
                variant="Primary"
                className={TickitzHomeStyle.button_month_1}
              >
                September
              </Button>
            </Col>
            <Col>
              <Button
                variant="Primary"
                className={TickitzHomeStyle.button_month_1}
              >
                September
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>Ini untuk gambar detailnya</Col>
          </Row>
          <Row className="text-center">
            <Col>Untuk jumbotron</Col>
          </Row>
          <TickitzFooter />
        </Container>
      </div>
    );
  }
}

export default Home;
