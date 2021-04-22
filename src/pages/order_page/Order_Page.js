import React, { Component } from "react";
import TickitzNavbar from "../../components/TickitzNavbar";
import TickitzFooter from "../../components/TickitzFooter";
import { Container, Row, Col, Button } from "react-bootstrap";
import OrderPageStyle from "../order_page/OrderPageStyle.module.css";
import TickitzSeat1 from "../../components/TickitzSeat/TickitzSeat";

class OrderPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <TickitzNavbar />
          <Row>
            <Col sm={6} className="mt-5 ml-4">
              <h5>Movie selected</h5>
              <Row className=" bg-light">
                <Col>
                  <p>Spiderman: Homecoming</p>
                </Col>
                <Col className="text-right">
                  <p>ini buttonnya</p>
                </Col>
              </Row>
            </Col>
            <Col sm={5} className="mt-5 ml-3">
              <h5>Order Info</h5>
              <Col className="bg-light">
                <Row>
                  <Col>
                    <p>Movie selected</p>
                    <p>Date</p>
                    <p>One ticket price</p>
                    <p>Seat choosed</p>
                  </Col>
                  <Col>
                    <p>Ini untuk info orderannya</p>
                    <p>Ini untuk info orderannya</p>
                    <p>Ini untuk info orderannya</p>
                    <p>Ini untuk info orderannya</p>
                  </Col>
                </Row>
                <Row>
                  <hr />
                </Row>
                <Row>
                  <Col>
                    <h4>Total Payment</h4>
                  </Col>
                  <Col className="text-right">
                    <h4>$30</h4>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
          <Row className="mt-1 ml-1">
            <Col>
              <h5>Choose Your Seat</h5>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col lg={5} className="mt-2 ml-5 bg-light">
              <TickitzSeat1 />
            </Col>
          </Row>
          <Row>
            <Col xs={4} className="ml-4">
              <Button
                variant="primary"
                className={OrderPageStyle.change_movie_button}
              >
                Change your movie
              </Button>
            </Col>
            <Col xs={4}>
              <Button
                variant="primary"
                className={`${OrderPageStyle.checkout_button} mr-5`}
              >
                Checkout Now
              </Button>
            </Col>
          </Row>
          <TickitzFooter />
        </Container>
      </div>
    );
  }
}

export default OrderPage;
