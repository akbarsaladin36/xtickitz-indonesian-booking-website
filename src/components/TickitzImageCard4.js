import React, { Component } from "react";
import { Card } from "react-bootstrap";
import TickitzCardStyle from "../components/ImageCard.module.css";

class TickitzImage4 extends Component {
  render() {
    // console.log(this.props);
    const { movie_image } = this.props;
    return (
      <div>
        <Card className={TickitzCardStyle.now_showing_cards_image}>
          <Card.Body>
            <img
              src={`http://localhost:5000/api/${movie_image}`}
              alt="now showing"
              className={TickitzCardStyle.image_size}
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default TickitzImage4;
