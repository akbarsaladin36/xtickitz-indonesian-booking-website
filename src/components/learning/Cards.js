import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Cards extends Component {
  render() {
    console.log(this.props);
    const {
      movie_id,
      movie_name,
      movie_category,
      movie_release_date,
    } = this.props.data;

    const handleMovieDetail = (id) => {
      // {1}
      // this.props.history.push(`/learning/basic-movie-detail?movieId=${id}`);
      // {2}
      // this.props.history.push(`/learning/basic-movie-detail`, { data: id });
      // {3}
      this.props.history.push(`/learning/basic-movie-detail/${id}`);
    };

    const { handleUpdate, handleDelete, data } = this.props;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg
"
          />
          <Card.Body>
            <Card.Title>{movie_name}</Card.Title>
            <Card.Text>{movie_category}</Card.Text>
            <p>{movie_release_date}</p>
            <Button
              variant="secondary"
              onClick={() => handleMovieDetail(movie_id)}
            >
              Detail
            </Button>
            <Button variant="primary" onClick={() => handleUpdate(data)}>
              Update
            </Button>
            <Button variant="danger" onClick={() => handleDelete(movie_id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withRouter(Cards);
