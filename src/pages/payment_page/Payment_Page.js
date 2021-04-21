import React, { Component } from "react";
import TickitzNavbar from "../../components/TickitzNavbar";
import TickitzFooter from "../../components/TickitzFooter";
import TickitzPaymentButton from "../../components/TickitzPaymentButton";
import { Container, Row, Col, Form } from "react-bootstrap";

class PaymentPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <TickitzNavbar />
          <Row className="mt-5">
            <Col md={5} className="ml-4">
              <h3 className="mb-3">Payment Info</h3>
              <Row className="bg-light">
                <Col lg={5}>
                  <p className="my-3">Date and Time</p>
                  <hr />
                  <p className="my-3">Movie title</p>
                  <hr />
                  <p className="my-3">Cinema name</p>
                  <hr />
                  <p className="my-3">Number of tickets</p>
                  <hr />
                  <p className="my-3">Total payment</p>
                </Col>
                <Col className="text-right">
                  <p className="my-3">Tuesday, 07 July 2020 at 02:00pm</p>
                  <hr />
                  <p className="my-3">Spider-Man: Homecoming</p>
                  <hr />
                  <p className="my-3">CineOne21 Cinema</p>
                  <hr />
                  <p className="my-3">3 pieces</p>
                  <hr />
                  <p className="my-3">$30,00</p>
                </Col>
              </Row>
            </Col>
            <Col md={4} className="ml-5">
              <h3 className="ml-5">Personal Info</h3>
              <Row className="ml-5 bg-light mt-3">
                <Form className="ml-4 mt-3">
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="write your full name"
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="write your email" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="write your phone number"
                    />
                  </Form.Group>
                </Form>
              </Row>
            </Col>
          </Row>
          <Row className="mt-5 mb-5">
            <Col lg={6} className="ml-1">
              <h3 className="ml-3 mb-4">Choose a Payment Method</h3>
              <Row className="ml-2 bg-light">
                <Col xs={3}>
                  <TickitzPaymentButton />
                </Col>
                <Col xs={3}>
                  <TickitzPaymentButton />
                </Col>
                <Col xs={3}>
                  <TickitzPaymentButton />
                </Col>
                <Col xs={3}>
                  <TickitzPaymentButton />
                </Col>
              </Row>
              <Row className="ml-2 mt-4 bg-light">
                <Col xs={3}>
                  <TickitzPaymentButton />
                </Col>
                <Col xs={3}>
                  <TickitzPaymentButton />
                </Col>
                <Col xs={3}>
                  <TickitzPaymentButton />
                </Col>
                <Col xs={3}>
                  <TickitzPaymentButton />
                </Col>
              </Row>
            </Col>
          </Row>
          <TickitzFooter />
        </Container>
      </div>
    );
  }
}

export default PaymentPage;
