import React, { Component } from "react";
import styles from "./Seat.module.css";
import { Row, Col } from "react-bootstrap";

class Seat extends Component {
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
    const {
      seatAlphabet,
      selectedSeat,
      reservedSeat,
      bookingSeat,
    } = this.props;
    // console.log(this.props);
    return (
      <>
        <Row className={styles.rowSeat}>
          <Col className={styles.colSeat}>{seatAlphabet}</Col>
          {this.state.seatLeft.map((item, index) => {
            return (
              <Col className={styles.colSeat} key={index}>
                <div
                  onClick={() => bookingSeat(item)}
                  className={`${styles.seat} ${
                    reservedSeat.indexOf(item) > -1
                      ? styles.seatSold
                      : selectedSeat.indexOf(item) > -1
                      ? styles.seatSelected
                      : styles.seatAvailable
                  }`}
                ></div>
              </Col>
            );
          })}
          {/* PEMBATAS */}
          <Col className={styles.colSeat}></Col>
          {/* PEMBATAS */}
          {this.state.seatRight.map((item, index) => {
            return (
              <Col className={styles.colSeat} key={index}>
                <div
                  onClick={() => bookingSeat(item)}
                  className={`${styles.seat} ${
                    reservedSeat.indexOf(item) > -1
                      ? styles.seatSold
                      : selectedSeat.indexOf(item) > -1
                      ? styles.seatSelected
                      : styles.seatAvailable
                  }`}
                ></div>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default Seat;
