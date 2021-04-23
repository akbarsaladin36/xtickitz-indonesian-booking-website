import React, { Component } from "react";
import { Col, Form, Button } from "react-bootstrap";
import TickitzFormStyle from "./TickitzFormStyle.module.css";

class TickitzForm extends Component {
  render() {
    console.log(this.props);
    const { changeText, resetData, submitData } = this.props;
    return (
      <div>
        <Form onSubmit={submitData} onReset={resetData}>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Movie Name</Form.Label>
                <Form.Control
                  name="movieName"
                  placeholder="Write a movie name"
                  onChange={changeText}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  name="movieGenre"
                  placeholder="Describe a category of movie"
                  onChange={changeText}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Director</Form.Label>
                <Form.Control
                  name="movieDirectedBy"
                  placeholder="Write a director name"
                  onChange={changeText}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Casts</Form.Label>
                <Form.Control
                  name="movieCasts"
                  placeholder="Describe a category of movie"
                  onChange={changeText}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Release Date</Form.Label>
                <Form.Control
                  name="movieReleaseDate"
                  placeholder="Write a movie name"
                  onChange={changeText}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Duration Hour</Form.Label>
                    <Form.Control
                      name="movieDurationHour"
                      placeholder="Hour"
                      onChange={changeText}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Duration Minutes</Form.Label>
                    <Form.Control
                      name="movieDurationMinutes"
                      placeholder="Minute"
                      onChange={changeText}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Movie Synopsis</Form.Label>
                <Form.Control
                  as="textarea"
                  name="movieSynopsis"
                  placeholder="Your synopsis"
                  onChange={changeText}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col className="d-flex justify-content-end">
              <Button
                variant="primary"
                className={`${TickitzFormStyle.reset_form_button} mr-3`}
                type="reset"
              >
                Reset
              </Button>
              <Button
                variant="primary"
                className={TickitzFormStyle.submit_form_button}
                type="submit"
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
