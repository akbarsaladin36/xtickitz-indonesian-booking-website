import React, { Component } from "react";
import TickitzSeatStyle from "../../components/TickitzSeat/SeatStyle.module.css";
import { Row, Col } from "react-bootstrap";

class TickitzSeat1 extends Component {
  constructor() {
    super();
    this.state = {
      seatLeft: [1, 2, 3, 4, 5, 6, 7],
      seatRight: [8, 9, 10, 11, 12, 13, 14],
    };
  }

  componentDidMount() {
    this.setAlphabetSeat();
  }

  setAlphabetSeat() {
    const { seatAlphabet } = this.props;
    const seatLeft = this.state.seatLeft.map(
      (item) => `${seatAlphabet}${item}`
    );
    const seatRight = this.state.seatRight.map(
      (item) => `${seatAlphabet}${item}`
    );
    this.setState({
      seatLeft: seatLeft,
      seatRight: seatRight,
    });
  }

  render() {
    const { seatAlphabet, selectedSeat, reservedSeat, bookingSeat } =
      this.props;
    return (
      <div>
        <Row className={TickitzSeatStyle.rowSeat}>
          <Col className={TickitzSeatStyle.colSeat}>{seatAlphabet}</Col>
          {this.state.seatLeft.map((item, index) => {
            return (
              <Col className={TickitzSeatStyle.colSeat} key={index}>
                <div
                  onClick={() => bookingSeat(item)}
                  className={`${TickitzSeatStyle.seat} ${
                    reservedSeat.indexOf(item) > -1
                      ? TickitzSeatStyle.seatSold
                      : selectedSeat.indexOf(item) > -1
                      ? TickitzSeatStyle.seatSelected
                      : TickitzSeatStyle.seatAvailable
                  }`}
                ></div>
              </Col>
            );
          })}
          {/* PEMBATAS */}
          <Col className={TickitzSeatStyle.colSeat}></Col>
          {/* PEMBATAS */}
          {this.state.seatRight.map((item, index) => {
            return (
              <Col className={TickitzSeatStyle.colSeat} key={index}>
                <div
                  onClick={() => bookingSeat(item)}
                  className={`${TickitzSeatStyle.seat} ${
                    reservedSeat.indexOf(item) > -1
                      ? TickitzSeatStyle.seatSold
                      : selectedSeat.indexOf(item) > -1
                      ? TickitzSeatStyle.seatSelected
                      : TickitzSeatStyle.seatAvailable
                  }`}
                ></div>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default TickitzSeat1;
