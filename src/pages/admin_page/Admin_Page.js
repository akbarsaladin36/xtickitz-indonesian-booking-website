import React, { Component } from "react";
import TickitzNavbar from "../../components/TickitzNavbar";
import TickitzFooter from "../../components/TickitzFooter";
import { Container } from "react-bootstrap";

class AdminPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <TickitzNavbar />
          <p>Ini adalah halaman admin_page</p>
          <TickitzFooter />
        </Container>
      </div>
    );
  }
}

export default AdminPage;
