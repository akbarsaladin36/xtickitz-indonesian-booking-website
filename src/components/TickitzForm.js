import React, { Component } from "react";
import { Col, Form, Button } from "react-bootstrap";
import TickitzFormStyle from "./TickitzFormStyle.module.css";

class TickitzForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Movie Name</Form.Label>
                <Form.Control placeholder="Write a movie name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control placeholder="Describe a category of movie" />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Director</Form.Label>
                <Form.Control placeholder="Write a movie name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Casts</Form.Label>
                <Form.Control placeholder="Describe a category of movie" />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Release Date</Form.Label>
                <Form.Control placeholder="Write a movie name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Duration Hour</Form.Label>
                    <Form.Control placeholder="Hour" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Duration Minutes</Form.Label>
                    <Form.Control placeholder="Minute" />
                  </Form.Group>
                </Col>
              </Form.Row>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Movie Synopsis</Form.Label>
                <Form.Control as="textarea" placeholder="Your synopsis" />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col className="d-flex justify-content-end">
              <Button
                variant="primary"
                className={`${TickitzFormStyle.reset_form_button} mr-3`}
              >
                Reset
              </Button>
              <Button
                variant="primary"
                className={TickitzFormStyle.submit_form_button}
              >
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

export default TickitzForm;
