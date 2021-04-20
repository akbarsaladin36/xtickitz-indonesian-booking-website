import React, { Component } from "react";
import TickitzNavbar from "../../components/TickitzNavbar";
import TickitzFooter from "../../components/TickitzFooter";
import { Container } from "react-bootstrap";

class MovieDetailPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <TickitzNavbar />
          <p>Ini adalah halaman movie detail</p>
          <TickitzFooter />
        </Container>
      </div>
    );
  }
}

export default MovieDetailPage;
