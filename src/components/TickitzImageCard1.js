import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import TickitzCardStyle from "../components/ImageCard.module.css";

class TickitzImageCard1 extends Component {
  render() {
    return (
      <div>
        <Card className={TickitzCardStyle.now_showing_cards_image}>
          <Card.Body>
            <img src="/img/upcoming-movies-image-1" alt="now showing" />
            <p>Action</p>
            <Button variant="primary">Detail</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default TickitzImageCard1;
