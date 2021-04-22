import React, { Component } from "react";
import TickitzNavbar from "../../components/TickitzNavbar";
import TickitzFooter from "../../components/TickitzFooter";
import { Container, Row, Col, Form } from "react-bootstrap";
import TickitzImageCard from "../../components/TickitzImageCard";
import TickitzForm from "../../components/TickitzForm";

class AdminPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <TickitzNavbar />
          <Row>
            <Col className="mt-5 ml-4">
              <h3 className="ml-2">Form Movie</h3>
              <Row>
                <Col xs={2}>
                  <TickitzImageCard />
                </Col>
                <Col className="ml-5">
                  <TickitzForm />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5 ml-5">
              <h3>Data Movie</h3>
            </Col>
            <Col>
              <Form>
                <Form.Row>
                  <Form.Group>
                    <Form.Control as="select" placeholder="sort">
                      <option>Release Date</option>
                      <option>Movie Name</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
              </Form>
            </Col>
          </Row>
          <TickitzFooter />
        </Container>
      </div>
    );
  }
}

export default AdminPage;
