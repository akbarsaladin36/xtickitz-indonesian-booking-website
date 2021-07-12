import React, { Component } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import TickitzCard2Style from "../components/ImageCard2.module.css";
import { withRouter } from "react-router-dom";

class TickitzImage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: localStorage.getItem("userId"),
      movieId: this.props.data[0],
      cinemaId: this.props.data[1].cinema_id,
      scheduleId: false,
      selectedScheduleClock: "",
    };
  }

  handleScheduleClock = (clock) => {
    const { selectedScheduleClock } = this.state;
    console.log(clock.schedule_clock);
    if (selectedScheduleClock === clock.schedule_clock) {
      this.setState({
        selectedScheduleClock: "",
        scheduleId: false,
      });
    } else {
      this.setState({
        selectedScheduleClock: clock.schedule_clock,
        scheduleId: clock.schedule_id,
      });
    }
  };

  handleBookingCinema = () => {
    const { scheduleId } = this.state;

    if (scheduleId) {
      console.log(this.state);
      const { userId, movieId, cinemaId, scheduleId } = this.state;
      const booking = JSON.stringify({
        userId: parseInt(userId),
        movieId: movieId,
        cinemaId: cinemaId,
        scheduleId: scheduleId,
      });
      console.log(booking);
      localStorage.setItem("bookingInfo", booking);
      this.props.history.push("/main/order-page");
    } else {
      alert("Please choose the time that you want.");
    }
  };

  render() {
    const {
      cinema_name,
      premiere_location_city,
      premiere_location_address,
      cinema_price,
      schedule,
    } = this.props.data[1];
    return (
      <div>
        <Card className="mb-4">
          <Card.Body>
            <Row className="mt-3">
              <Col>
                <img
                  src="/img/footer-sponsor-image-1.png"
                  alt="premiere cinema"
                />
              </Col>
              <Col>
                <p>{cinema_name}</p>
                <p>{premiere_location_address}</p>
                <p>{premiere_location_city}</p>
              </Col>
            </Row>
            <Row>
              {schedule.map((item, index) => {
                return (
                  <Col key={index}>
                    <p
                      className={TickitzCard2Style.text_cursor}
                      onClick={() => this.handleScheduleClock(item)}
                    >
                      {item.schedule_clock}
                    </p>
                  </Col>
                );
              })}
            </Row>
            <Row>
              <Col>
                <p>Price</p>
              </Col>
              <Col className="text-right">
                <p>${cinema_price}/seat</p>
              </Col>
            </Row>
            <Button
              variant="primary"
              className={`${TickitzCard2Style.book_now_button} text-center`}
              onClick={() => this.handleBookingCinema()}
            >
              Book Now
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withRouter(TickitzImage2);
