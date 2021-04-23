import React, { Component } from "react";
import TickitzNavbar from "../../components/TickitzNavbar";
import TickitzFooter from "../../components/TickitzFooter";
import { Container, Row, Col, Form } from "react-bootstrap";
import TickitzImageCard from "../../components/TickitzImageCard";
import TickitzForm from "../../components/TickitzForm";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        movieName: "",
        movieGenre: "",
        movieReleasedDate: "",
        movieDirectedBy: "",
        movieDuration: "",
        movieCasts: "",
        movieSynopsis: "",
      },
      data: [],
    };
  }

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  resetData = (event) => {
    event.preventDefault();
    this.setState({
      form: {
        movieName: "",
        movieGenre: "",
        movieReleasedDate: "",
        movieDirectedBy: "",
        movieDuration: "",
        movieCasts: "",
        movieSynopsis: "",
      },
    });
  };

  submitData = (event) => {
    event.preventDefault();
    console.log("Save Data!");
    console.log(this.state.form);
  };
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
            <Col className="mt-5">
              <Form>
                <Form.Row className="justify-content-end">
                  <Form.Group className="mr-3">
                    <Form.Control as="select" placeholder="sort">
                      <option>Release Date</option>
                      <option>Movie Name</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      name="search"
                      type="text"
                      placeholder="Search movie name..."
                    />
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
