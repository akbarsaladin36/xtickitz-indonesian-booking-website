import React, { Component } from "react";
import TickitzNavbar from "../../components/TickitzNavbar";
import TickitzFooter from "../../components/TickitzFooter";
import { Container } from "react-bootstrap";

class PaymentPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <TickitzNavbar />
          <p>Ini adalah halaman payment page</p>
          <TickitzFooter />
        </Container>
      </div>
    );
  }
}

export default PaymentPage;
