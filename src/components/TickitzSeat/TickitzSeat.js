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
    const {
      seatAlphabet,
      selectedSeat,
      reservedSeat,
      bookingSeat,
    } = this.props;
    // console.log(this.props);
    return (
      <div>
        <Row className={TickitzSeatStyle.rowSeat}>
          <Row>
            <Col className={TickitzSeatStyle.colSeat}>A</Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col></Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
          </Row>
        </Row>
        <Row className={TickitzSeatStyle.rowSeat}>
          <Row>
            <Col className={TickitzSeatStyle.colSeat}>B</Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col></Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
          </Row>
        </Row>
        <Row className={TickitzSeatStyle.rowSeat}>
          <Row>
            <Col className={TickitzSeatStyle.colSeat}>C</Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col></Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
          </Row>
        </Row>
        <Row className={TickitzSeatStyle.rowSeat}>
          <Row>
            <Col className={TickitzSeatStyle.colSeat}>D</Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col></Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
          </Row>
        </Row>
        <Row className={TickitzSeatStyle.rowSeat}>
          <Row>
            <Col className={TickitzSeatStyle.colSeat}>E</Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col></Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
          </Row>
        </Row>
        <Row className={TickitzSeatStyle.rowSeat}>
          <Row>
            <Col className={TickitzSeatStyle.colSeat}>F</Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col></Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
          </Row>
        </Row>
        <Row className={TickitzSeatStyle.rowSeat}>
          <Row>
            <Col className={TickitzSeatStyle.colSeat}>G</Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col></Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
            <Col className={TickitzSeatStyle.colSeat}>
              <div className={TickitzSeatStyle.seat}></div>
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
}

export default TickitzSeat1;
