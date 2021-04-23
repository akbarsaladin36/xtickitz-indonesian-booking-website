import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import TickitzCardStyle from "../components/ImageCard.module.css";
import { withRouter } from "react-router-dom";

class TickitzImageCard1 extends Component {
  handleMovieDetail = (id) => {
    this.props.history.push(`/movie-detail-page/${id}`);
  };

  render() {
    // console.log(this.props);
    const { movie_id, movie_name, movie_genre } = this.props.data;
    return (
      <div>
        <Card className={TickitzCardStyle.now_showing_cards_image}>
          <Card.Body className="text-center">
            <img src="/img/upcoming-movies-image-1.jpg" alt="now showing" />
            <p className="mt-3">{movie_name}</p>
            <p>{movie_genre}</p>
            <Button
              variant="primary"
              className={TickitzCardStyle.image_detail_button}
              onClick={() => this.handleMovieDetail(movie_id)}
            >
              Detail
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withRouter(TickitzImageCard1);
