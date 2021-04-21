import React, { Component } from "react";
import TickitzNavbar from "../../components/TickitzNavbar";
import TickitzFooter from "../../components/TickitzFooter";
import { Container, Row, Col, Form } from "react-bootstrap";
import TickitzBigImage from "../../components/TickitzBigImageCard";
import TickitzImage2 from "../../components/TickitzImageCard2";

class MovieDetailPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <TickitzNavbar />
          <Row className="mt-5">
            <Col md={4} className="ml-4">
              <TickitzBigImage />
            </Col>
            <Col className="ml-4">
              <h4>Movie Name</h4>
              <p className="text-muted">Movie Genre</p>
              <Row>
                <Col>
                  <p className="text-muted">Release Date</p>
                  <p>1</p>
                </Col>
                <Col>
                  <p className="text-muted">Directed By</p>
                  <p>1</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="text-muted">Duration</p>
                  <p>1</p>
                </Col>
                <Col>
                  <p className="text-muted">Casts</p>
                  <p>1</p>
                </Col>
              </Row>
              <h4>Synopsis</h4>
              <p className="text-justify">
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem
                ipsumlorem ipsumlorem ipsum lorem ipsum
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center mt-5">
              <h2>Showtimes and Tickets</h2>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control type="date" />
                </Col>
                <Col>
                  <Form.Control as="select">
                    <option>Purwokerto</option>
                    <option>Jakarta</option>
                    <option>Medan</option>
                  </Form.Control>
                </Col>
              </Form.Row>
            </Form>
          </Row>
          <Row className="justify-content-center mt-5">
            <Col>
              <TickitzImage2 />
              <TickitzImage2 />
            </Col>
            <Col>
              <TickitzImage2 />
              <TickitzImage2 />
            </Col>
            <Col>
              <TickitzImage2 />
              <TickitzImage2 />
            </Col>
          </Row>
          <p className="text-center">view more</p>
          <TickitzFooter />
        </Container>
      </div>
    );
  }
}

export default MovieDetailPage;
