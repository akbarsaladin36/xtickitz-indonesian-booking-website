import React, { Component } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import TickitzCard2Style from "../components/ImageCard2.module.css";

class TickitzImage2 extends Component {
  render() {
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
                <p>ebv.id</p>
                <p>address</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>08.00</p>
                <p>09.00</p>
              </Col>
              <Col>
                <p>08.00</p>
                <p>09.00</p>
              </Col>
              <Col>
                <p>08.00</p>
                <p>09.00</p>
              </Col>
              <Col>
                <p>08.00</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Price</p>
              </Col>
              <Col className="text-right">
                <p>$30.00/seat</p>
              </Col>
            </Row>
            <Button
              variant="primary"
              className={`${TickitzCard2Style.book_now_button} text-center`}
            >
              Book Now
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default TickitzImage2;
