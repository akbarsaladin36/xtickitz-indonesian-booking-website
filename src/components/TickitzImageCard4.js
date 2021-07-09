import React, { Component } from "react";
import { Card } from "react-bootstrap";
import TickitzCardStyle from "../components/ImageCard.module.css";

class TickitzImage4 extends Component {
  render() {
    const { movieImage } = this.props;
    return (
      <div>
        <Card className={TickitzCardStyle.now_showing_cards_image}>
          <Card.Body>
            {movieImage ? (
              <img
                src={`http://localhost:3002/backend1/api/${movieImage}`}
                alt="now showing"
                className={TickitzCardStyle.image_size}
              />
            ) : (
              <img
                src="/img/no-poster-available-picture.jpg"
                alt="now showing"
                className={TickitzCardStyle.image_size}
              />
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default TickitzImage4;
