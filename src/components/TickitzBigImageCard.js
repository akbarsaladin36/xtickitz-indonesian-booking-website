import React, { Component } from "react";
import { Card } from "react-bootstrap";
import TickitzBigCardStyle from "../components/BigImageCard.module.css";

class TickitzBigImage extends Component {
  render() {
    // console.log(this.props);
    const { movieImage } = this.props;
    return (
      <div>
        <Card className={TickitzBigCardStyle.image_size_cards}>
          <Card.Body>
            <img
              src={`http://localhost:5000/api/${movieImage}`}
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
