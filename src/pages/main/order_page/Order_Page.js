import React, { Component } from "react";
import TickitzNavbar from "../../../components/TickitzNavbar";
import TickitzFooter from "../../../components/TickitzFooter";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import OrderPageStyle from "../order_page/OrderPageStyle.module.css";
import TickitzSeat1 from "../../../components/TickitzSeat/TickitzSeat";
import axiosApiIntances from "../../../utils/axios";

class OrderPage extends Component {
  constructor() {
    super();
    this.state = {
      movieName: "",
      userId: 0,
      cinemaName: "",
      scheduleDate: "",
      scheduleClock: "",
      cinemaPrice: 0,
      selectedSeat: [],
      reservedSeat: [],
      setSeatAlphabet: ["A", "B", "C", "D", "E", "F", "G"],
      setLeftSeat: ["1", "2", "3", "4", "5", "6", "7"],
      setRightSeat: ["8", "9", "10", "11", "12", "13", "14"],
    };
  }

  componentDidMount() {
    const bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));
    const { movieId, cinemaId, scheduleId } = bookingInfo;
    this.getMovieDataById(movieId);
    this.getDataCinemaById(cinemaId);
    this.getDataScheduleById(scheduleId);
    this.getDataBookingSeat(cinemaId, scheduleId);
  }

  getMovieDataById = (id) => {
    axiosApiIntances
      .get(`movie/${id}`)
      .then((res) => {
        console.log(res);
        this.setState({
          movieName: res.data.data[0].movie_name,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  getUserDataById = (id) => {
    axiosApiIntances.get(`users/${id}`).then((res) => {
      console.log(res);
    });
  };

  getDataCinemaById = (id) => {
    axiosApiIntances
      .get(`cinema/${id}`)
      .then((res) => {
        console.log(res);
        this.setState({
          cinemaName: res.data.data[0].cinema_name,
          cinemaPrice: res.data.data[0].cinema_price,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  getDataScheduleById = (id) => {
    axiosApiIntances
      .get(`schedule/${id}`)
      .then((res) => {
        console.log(res);
        this.setState({
          scheduleDate: res.data.data[0].schedule_date,
          scheduleClock: res.data.data[0].schedule_clock,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  getDataBookingSeat = (cinemaId, scheduleId) => {
    axiosApiIntances
      .get(`booking/get-booking?cinemaId=${cinemaId}&scheduleId=${scheduleId}`)
      .then((res) => {
        console.log(res);
        let reservedSeat = [];
        res.data.data.map((item) => {
          reservedSeat.push(item.booking_seat_location);
          return true;
        });
        console.log("Seat is sold out", reservedSeat);
        this.setState({
          reservedSeat: reservedSeat,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  bookingSeat = (seat) => {
    let selectedSeatData = this.state.selectedSeat;
    const index = selectedSeatData.indexOf(seat);
    if (this.state.reservedSeat.indexOf(seat)) {
      if (index < 0) {
        this.setState({
          selectedSeat: [...this.state.selectedSeat, seat],
        });
        console.log("Seat Added", seat);
      } else {
        selectedSeatData.splice(index, 1);
        this.setState({
          selectedSeat: selectedSeatData,
        });
      }
    } else {
      console.log("Seat is reserved.");
    }
  };

  handleCheckOut = () => {
    console.log("You checkout your booking.");
    const {
      selectedSeat,
      movieName,
      cinemaName,
      scheduleDate,
      scheduleClock,
      cinemaPrice,
    } = this.state;
    if (selectedSeat.length > 0) {
      const bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));
      const newBookingInfo = JSON.stringify({
        ...bookingInfo,
        selectedSeat: selectedSeat,
        movieName: movieName,
        cinemaName: cinemaName,
        scheduleDate: scheduleDate,
        scheduleClock: scheduleClock,
        cinemaPrice: cinemaPrice,
      });
      localStorage.setItem("bookingInfo", newBookingInfo);
      this.props.history.push("/main/payment-page");
    }
  };

  render() {
    const {
      selectedSeat,
      reservedSeat,
      setSeatAlphabet,
      movieName,
      cinemaName,
      scheduleDate,
      scheduleClock,
      cinemaPrice,
    } = this.state;
    console.log(this.state);
    return (
      <div>
        <Container>
          <TickitzNavbar />
          <Row>
            <Col sm={7} className="mt-5 ml-4">
              <h5 className={OrderPageStyle.movie_selected_position}>
                Movie selected
              </h5>
              <Row
                className={`${OrderPageStyle.movie_selected_position} bg-light`}
              >
                <Col>
                  <p>{movieName}</p>
                </Col>
                <Col className="text-right">
                  <Link to="#">Change movie</Link>
                </Col>
              </Row>
              <Row>
                <Col sm={11} className="ml-0 mt-3 bg-light">
                  <h5>Choose Your Seat</h5>
                  <Card className={OrderPageStyle.card_size}>
                    <Card.Body>
                      {setSeatAlphabet.map((item, index) => {
                        return (
                          <TickitzSeat1
                            key={index}
                            seatAlphabet={item}
                            reservedSeat={reservedSeat}
                            selectedSeat={selectedSeat}
                            bookingSeat={this.bookingSeat.bind(this)}
                          />
                        );
                      })}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col sm={4} className="mt-5 ml-3">
              <h5>Order Info</h5>
              <Col className="bg-light">
                <h4 className="text-center">{cinemaName}</h4>
                <Row>
                  <Col>
                    <p>Movie selected</p>
                    <p>{scheduleDate}</p>
                    <p>One ticket price</p>
                    <p>Seat choosed</p>
                  </Col>
                  <Col className="text-right">
                    <p>{movieName}</p>
                    <p>{scheduleClock}</p>
                    <p>{cinemaPrice}</p>
                    <p>
                      {selectedSeat.map((item, index) => {
                        return <span key={index}>{`${item},`}</span>;
                      })}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <hr />
                </Row>
                <Row>
                  <Col>
                    <h5>Total Payment</h5>
                  </Col>
                  <Col className="text-right">
                    <h4>{selectedSeat.length * cinemaPrice}</h4>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col
              xs={4}
              className={`${OrderPageStyle.change_movie_button_position} ml-4`}
            >
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
                className={`${OrderPageStyle.checkout_button} ml-4 mr-5`}
                onClick={() => this.handleCheckOut()}
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
