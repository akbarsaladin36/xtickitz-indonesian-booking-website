import React, { Component } from "react";
import TickitzFooter from "../../../components/TickitzFooter";
import { Container, Row, Col } from "react-bootstrap";
import TickitzLandingPageNavbar from "../../../components/TickitzLandingPageNavbar";
import LandingPageStyle from "./LandingPageStyle.module.css";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <TickitzLandingPageNavbar />
        <Container>
          <Row className="mt-3">
            <Col>
              <img
                src="/img/home-screenshot.jpg"
                alt="about tickitz"
                className={LandingPageStyle.tickitz_brand_1_size}
              />
            </Col>
            <Col>
              <h2>Tickitz Booking Tickets App</h2>
              <p className={`${LandingPageStyle.tickitz_brand_1_text} mt-3`}>
                Tickitz is the project website app that based on several booking
                ticket for movie in the world. This project is created to make
                people buy movie online ticket easier.
              </p>
            </Col>
          </Row>

          <TickitzFooter />
        </Container>
      </div>
    );
  }
}

export default LandingPage;
