import React, { Component } from "react";
import TickitzNavbar from "../../../components/TickitzNavbar";
import TickitzFooter from "../../../components/TickitzFooter";
import TickitzPaymentButton from "../../../components/TickitzPaymentButton";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PaymentPageStyle from "./PaymentPageStyle.module.css";
import axiosApiIntances from "../../../utils/axios";

class PaymentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      movieId: 0,
      movieName: "",
      cinemaId: 0,
      cinemaName: "",
      cinemaPrice: 0,
      selectedSeat: [],
      scheduleClock: "",
      scheduleDate: "2021-03-03",
      scheduleId: 0,
      paymentMethod: "",
      listPaymentMethod1: ["gpay", "visa", "gopay", "paypal"],
      listPaymentMethod2: ["DANA", "Bank BCA", "Bank BRI", "OVO"],
    };
  }

  componentDidMount() {
    const bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));
    this.setState({
      ...this.state,
      ...bookingInfo,
    });
  }

  submitBookingData = () => {
    const {
      userId,
      movieId,
      cinemaId,
      scheduleId,
      selectedSeat,
      cinemaPrice,
      paymentMethod,
    } = this.state;
    const data = {
      userId: userId,
      movieId: movieId,
      cinemaId: cinemaId,
      scheduleId: scheduleId,
      bookingTicket: selectedSeat.length,
      bookingTotalPrice: selectedSeat.length * cinemaPrice,
      bookingPaymentMethod: paymentMethod,
      bookingStatus: "Y",
      bookingSeat: selectedSeat,
    };
    axiosApiIntances
      .post("booking", data)
      .then((res) => {
        console.log(res);
        localStorage.removeItem("bookingInfo");
        window.setTimeout(() => {
          this.props.history.push("/main/home");
        }, 3000);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  handlePayment = (method) => {
    this.setState({
      paymentMethod: method,
    });
  };

  render() {
    const {
      movieName,
      cinemaName,
      cinemaPrice,
      selectedSeat,
      scheduleClock,
      scheduleDate,
      listPaymentMethod1,
      listPaymentMethod2,
    } = this.state;
    return (
      <div>
        <Container>
          <TickitzNavbar />
          <Row className="mt-5">
            <Col md={7} className="ml-4">
              <h3 className="mb-3">Payment Info</h3>
              <Row
                className={`${PaymentPageStyle.payment_method_position} bg-light`}
              >
                <Col className="col-4">
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
                <Col sm={8} className="text-right">
                  <p className="my-3">
                    {scheduleDate} at {scheduleClock}
                  </p>
                  <hr />
                  <p className="my-3">{movieName}</p>
                  <hr />
                  <p className="my-3">{cinemaName}</p>
                  <hr />
                  <p className="my-3">{selectedSeat.length} pieces</p>
                  <hr />
                  <p className="my-3">${selectedSeat.length * cinemaPrice}</p>
                </Col>
              </Row>
              <Row>
                <Col lg={12} className="mt-4">
                  <h3 className="mb-4">Choose a Payment Method</h3>
                  <Row className="bg-light">
                    {listPaymentMethod1.map((item, index) => {
                      return (
                        <Col xs={3} key={index}>
                          <TickitzPaymentButton
                            data={item}
                            handlePayment={this.handlePayment.bind(this)}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                  <Row className="mt-4 bg-light">
                    {listPaymentMethod2.map((item, index) => {
                      return (
                        <Col xs={3} key={index}>
                          <TickitzPaymentButton
                            data={item}
                            handlePayment={this.handlePayment.bind(this)}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={4} className={`${PaymentPageStyle.right_column} ml-5`}>
              <h3 className="ml-5">Personal Info</h3>
              <Row className="ml-5 bg-light mt-3">
                <Form className="ml-4 mt-3">
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="write your full name"
                      className={
                        PaymentPageStyle.personal_information_form_control
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="write your email"
                      className={
                        PaymentPageStyle.personal_information_form_control
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="write your phone number"
                      className={
                        PaymentPageStyle.personal_information_form_control
                      }
                    />
                  </Form.Group>
                </Form>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-start mt-3">
            <Col className={PaymentPageStyle.previous_button_position}>
              <Button className={`${PaymentPageStyle.previous_button} ml-4`}>
                Previous step
              </Button>
            </Col>
            <Col className="mr-5">
              <Button
                className={`${PaymentPageStyle.checkout_button} mr-5`}
                onClick={() => this.submitBookingData()}
              >
                Pay your order
              </Button>
            </Col>
          </Row>
          <TickitzFooter />
        </Container>
      </div>
    );
  }
}

export default PaymentPage;
