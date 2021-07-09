import React, { Component } from "react";
import { Card } from "react-bootstrap";
import TickitzCardStyle from "../components/ImageCard.module.css";
require("dotenv").config();

class TickitzImage extends Component {
  render() {
    // console.log(this.props);
    const { movie_image } = this.props.data;
    return (
      <div>
        <Card className={TickitzCardStyle.now_showing_cards_image}>
          <Card.Body>
            <img
              src={`${process.env.REACT_APP_IMAGE_URL}${movie_image}`}
              alt="now showing"
              className={TickitzCardStyle.image_size}
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default TickitzImage;
