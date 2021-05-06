import React, { Component } from "react";
import TickitzNavbar from "../../../components/TickitzNavbar";
import TickitzFooter from "../../../components/TickitzFooter";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import OrderPageStyle from "../order_page/OrderPageStyle.module.css";
import TickitzSeat1 from "../../../components/TickitzSeat/TickitzSeat";

class OrderPage extends Component {
  constructor() {
    super();
    this.state = {
      selectedSeat: [],
      reservedSeat: [],
    };
  }

  bookingSeat = (seat) => {
    this.setState({
      selectedSeat: [...this.state.selectedSeat, seat],
    });
    console.log(seat);
  };

  booking = () => {
    console.log("booking");
    const booking = JSON.stringify(this.state.selectedSeat);
    localStorage.setItem("bookingSeat", booking);
  };

  render() {
    const { selectedSeat, reservedSeat } = this.state;
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
                  <Link to="#">Change movie</Link>
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
            <Col md={5} className="ml-5 bg-light">
              <Card>
                <Card.Body>
                  <TickitzSeat1
                    seatAlphabet="A"
                    reservedSeat={reservedSeat}
                    selectedSeat={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <TickitzSeat1
                    seatAlphabet="B"
                    reservedSeat={reservedSeat}
                    selectedSeat={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <TickitzSeat1
                    seatAlphabet="C"
                    reservedSeat={reservedSeat}
                    selectedSeat={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <TickitzSeat1
                    seatAlphabet="D"
                    reservedSeat={reservedSeat}
                    selectedSeat={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <TickitzSeat1
                    seatAlphabet="E"
                    reservedSeat={reservedSeat}
                    selectedSeat={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <TickitzSeat1
                    seatAlphabet="F"
                    reservedSeat={reservedSeat}
                    selectedSeat={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                  <TickitzSeat1
                    seatAlphabet="G"
                    reservedSeat={reservedSeat}
                    selectedSeat={selectedSeat}
                    bookingSeat={this.bookingSeat.bind(this)}
                  />
                </Card.Body>
              </Card>
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
                onClick={this.booking}
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
