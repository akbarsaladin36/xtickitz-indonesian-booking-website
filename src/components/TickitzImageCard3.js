import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import TickitzCardStyle from "../components/ImageCard.module.css";

class TickitzImageCard3 extends Component {
  render() {
    // console.log(this.props);
    // console.log(this.props.data);
    const { movie_id, movie_name, movie_genre, movie_image } = this.props.data;
    const { handleUpdate, handleDelete, data } = this.props;
    return (
      <div>
        <Card className={TickitzCardStyle.now_showing_cards_image}>
          <Card.Body className="text-center">
            {movie_image ? (
              <img
                src={`http://localhost:3002/backend1/api/${movie_image}`}
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
            <p className="mt-3">{movie_name}</p>
            <p>{movie_genre}</p>
            <Button
              variant="primary"
              className={TickitzCardStyle.image_detail_button}
              onClick={() => handleUpdate(data)}
            >
              Update
            </Button>
            <Button
              variant="outline-danger"
              className={`${TickitzCardStyle.image_delete_button} mt-3`}
              onClick={() => handleDelete(movie_id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default TickitzImageCard3;
