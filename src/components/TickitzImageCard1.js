import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import TickitzCardStyle from "../components/ImageCard.module.css";

class TickitzImageCard1 extends Component {
  render() {
    return (
      <div>
        <Card className={TickitzCardStyle.now_showing_cards_image}>
          <Card.Body className="text-center">
            <img src="/img/upcoming-movies-image-1.jpg" alt="now showing" />
            <p class="mt-3">Movie Name</p>
            <p>Genre</p>
            <Button
              variant="primary"
              className={TickitzCardStyle.image_detail_button}
            >
              Detail
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default TickitzImageCard1;
