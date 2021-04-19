import React, { Component } from "react";
import { Card } from "react-bootstrap";
import TickitzCardStyle from "../components/ImageCard.module.css";

class TickitzImage extends Component {
  render() {
    return (
      <div>
        <Card className={TickitzCardStyle.now_showing_cards_image}>
          <Card.Body>
            <img src="/img/showing-movie-1.jpg" alt="now showing" />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default TickitzImage;
