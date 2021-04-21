import React, { Component } from "react";
import { Card } from "react-bootstrap";
import TickitzBigCardStyle from "../components/BigImageCard.module.css";

class TickitzBigImage extends Component {
  render() {
    return (
      <div>
        <Card className={TickitzBigCardStyle.image_size_cards}>
          <Card.Body>
            <img
              src="/img/showing-movie-1.jpg"
              className={TickitzBigCardStyle.big_image_cards}
              alt="now showing"
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default TickitzBigImage;
