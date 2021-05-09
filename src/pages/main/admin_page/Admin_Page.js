import React, { Component } from "react";
import TickitzNavbar from "../../../components/TickitzNavbar";
import TickitzFooter from "../../../components/TickitzFooter";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import TickitzImageCard4 from "../../../components/TickitzImageCard4";
import AdminPageStyle from "./AdminPageStyle.module.css";
import TickitzImageCard3 from "../../../components/TickitzImageCard3";
// import axiosApiIntances from "../../../utils/axios";
import { connect } from "react-redux";
import {
  getAllMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../../../redux/actions/movie";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        movieName: "",
        movieGenre: "",
        movieReleaseDate: "",
        movieDirectedBy: "",
        movieDuration: "",
        movieDurationHour: "",
        movieDurationMinutes: "",
        movieCasts: "",
        movieSynopsis: "",
        movieImage: "",
      },
      data: [],
      isUpdate: false,
      movieId: "",
    };
  }

  componentDidMount() {
    this.getDataMovieAll();
  }

  getDataMovieAll = () => {
    console.log("Get Movie All!");
    // console.log(this.props.movie);
    console.log(this.props);
    this.props.getAllMovie();
    // axiosApiIntances
    //   .get("home")
    //   .then((res) => {
    //     console.log(res);
    //     this.setState({ data: res.data.data });
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   });
  };

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleImage = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        movieImage: event.target.files[0],
      },
    });
  };

  resetData = (event) => {
    event.preventDefault();
    console.log("Sudah direset.");
    this.setState({
      form: {
        movieName: "",
        movieGenre: "",
        movieReleaseDate: "",
        movieDirectedBy: "",
        movieDuration: "",
        movieDurationHour: "",
        movieDurationMinutes: "",
        movieCasts: "",
        movieSynopsis: "",
        movieImage: null,
      },
    });
  };

  submitData = (event) => {
    event.preventDefault();
    console.log("Save Data!");
    // console.log(this.state.form);
    const formData = new FormData();
    formData.append("movieName", this.state.form.movieName);
    formData.append("movieGenre", this.state.form.movieGenre);
    formData.append("movieReleaseDate", this.state.form.movieReleaseDate);
    formData.append("movieDirectedBy", this.state.form.movieDirectedBy);
    formData.append(
      "movieDuration",
      `${this.state.form.movieDurationHour}:${this.state.form.movieDurationMinutes}:00`
    );
    formData.append("movieDurationHour", this.state.form.movieDurationHour);
    formData.append(
      "movieDurationMinutes",
      this.state.form.movieDurationMinutes
    );
    formData.append("movieCasts", this.state.form.movieCasts);
    formData.append("movieSynopsis", this.state.form.movieSynopsis);
    formData.append("movieImage", this.state.form.movieImage);

    this.props.createMovie(formData).then((res) => {
      this.props.getAllMovie();
    });

    // const setData = {
    //   ...this.state.form,
    //   movieDuration: `${this.state.form.movieDurationHour}:${this.state.form.movieDurationMinutes}:00`,
    // };

    // console.log(setData);

    // axiosApiIntances
    //   .post("home", setData)
    //   .then((res) => {
    //     this.resetData(event);
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   });
  };

  setUpdate = (data) => {
    // console.log("Set updated!");
    // console.log(data);
    this.setState({
      form: {
        movieName: data.movie_name,
        movieGenre: data.movie_genre,
        movieReleaseDate: data.movie_release_date.slice(0, 10),
        movieDirectedBy: data.movie_directed_by,
        movieDuration: data.movie_duration,
        movieDurationHour: data.movie_duration.slice(0, 2),
        movieDurationMinutes: data.movie_duration.slice(3, 5),
        movieCasts: data.movie_casts,
        movieSynopsis: data.movie_synopsis,
        movieImage: data.movie_image,
      },
      isUpdate: true,
      movieId: data.movie_id,
    });
  };

  updateData = (event) => {
    event.preventDefault();
    // console.log(this.props)
    const formData = new FormData();
    formData.append("movieName", this.state.form.movieName);
    formData.append("movieGenre", this.state.form.movieGenre);
    formData.append("movieReleaseDate", this.state.form.movieReleaseDate);
    formData.append("movieDirectedBy", this.state.form.movieDirectedBy);
    formData.append(
      "movieDuration",
      `${this.state.form.movieDurationHour}:${this.state.form.movieDurationMinutes}:00`
    );
    formData.append("movieDurationHour", this.state.form.movieDurationHour);
    formData.append(
      "movieDurationMinutes",
      this.state.form.movieDurationMinutes
    );
    formData.append("movieCasts", this.state.form.movieCasts);
    formData.append("movieSynopsis", this.state.form.movieSynopsis);
    formData.append("movieImage", this.state.form.movieImage);
    const { movieId } = this.state;
    this.props.updateMovie(movieId, formData).then((res) => {
      this.props.getAllMovie();
      this.setState({ isUpdate: false });
      this.resetData(event);
    });
    // const updateData = {
    //   ...this.state.form,
    //   movieDuration: `${this.state.form.movieDurationHour}:${this.state.form.movieDurationMinutes}:00`,
    // };

    // console.log(updateData);

    // axiosApiIntances
    //   .patch(`tickitz/movie-detail/${id}`, updateData)
    //   .then((res) => {
    //     this.getDataMovieAll();
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   });
    // // console.log(this.state.movieId);
    // // console.log(this.state.form);
    // this.setState({ isUpdate: false });
    // this.resetData(event);
  };

  deleteData = (id) => {
    console.log("Delete Data!");
    console.log(id);
    // const { movieId } = this.state;
    this.props.deleteMovie(id).then((res) => {
      this.getDataMovieAll();
    });
    // axiosApiIntances
    //   .delete(`/tickitz/movie-detail/${id}`)
    //   .then((res) => {
    //     this.getDataMovieAll();
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   });
  };

  render() {
    console.log(this.props);
    const { isUpdate, movieId } = this.state;
    const {
      movieName,
      movieGenre,
      movieReleaseDate,
      movieDirectedBy,
      movieDurationHour,
      movieDurationMinutes,
      movieCasts,
      movieSynopsis,
      movieImage,
    } = this.state.form;
    // const { movie_image } = this.props.movie.dataMovie;
    return (
      <div>
        <Container>
          <TickitzNavbar />
          <Row>
            <Col className="mt-5 ml-4">
              <h3 className="ml-2">Form Movie</h3>
              <Row>
                <Col xs={2}>
                  <TickitzImageCard4 movieImage={movieImage} />
                </Col>
                <Col className="ml-5">
                  <Form
                    onSubmit={
                      isUpdate
                        ? (event) => this.updateData(event, movieId)
                        : (event) => this.submitData(event)
                    }
                    onReset={(event) => this.resetData(event)}
                  >
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>Movie Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="movieName"
                            placeholder="Write a movie name"
                            onChange={(event) => this.changeText(event)}
                            value={movieName}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Label>Category</Form.Label>
                          <Form.Control
                            type="text"
                            name="movieGenre"
                            placeholder="Describe a category of movie"
                            onChange={(event) => this.changeText(event)}
                            value={movieGenre}
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>Director</Form.Label>
                          <Form.Control
                            type="text"
                            name="movieDirectedBy"
                            placeholder="Write a director name"
                            onChange={(event) => this.changeText(event)}
                            value={movieDirectedBy}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Label>Casts</Form.Label>
                          <Form.Control
                            type="text"
                            name="movieCasts"
                            placeholder="Describe a category of movie"
                            onChange={(event) => this.changeText(event)}
                            value={movieCasts}
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>Release Date</Form.Label>
                          <Form.Control
                            type="date"
                            name="movieReleaseDate"
                            placeholder="Write a movie name"
                            onChange={(event) => this.changeText(event)}
                            value={movieReleaseDate}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Row>
                          <Col>
                            <Form.Group>
                              <Form.Label>Duration Hour</Form.Label>
                              <Form.Control
                                type="text"
                                name="movieDurationHour"
                                placeholder="Hour"
                                onChange={(event) => this.changeText(event)}
                                value={movieDurationHour}
                              />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group>
                              <Form.Label>Duration Minutes</Form.Label>
                              <Form.Control
                                type="text"
                                name="movieDurationMinutes"
                                placeholder="Minute"
                                onChange={(event) => this.changeText(event)}
                                value={movieDurationMinutes}
                              />
                            </Form.Group>
                          </Col>
                        </Form.Row>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>Movie Synopsis</Form.Label>
                          <Form.Control
                            as="textarea"
                            name="movieSynopsis"
                            placeholder="Your synopsis"
                            onChange={(event) => this.changeText(event)}
                            value={movieSynopsis}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Movie Image</Form.Label>
                          <Form.File
                            onChange={(event) => this.handleImage(event)}
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col className="d-flex justify-content-end">
                        <Button
                          variant="primary"
                          className={`${AdminPageStyle.reset_form_button} mr-3`}
                          type="reset"
                        >
                          Reset
                        </Button>
                        <Button
                          variant="primary"
                          className={AdminPageStyle.submit_form_button}
                          type="submit"
                        >
                          {isUpdate ? "Update" : "Submit"}
                        </Button>
                      </Col>
                    </Form.Row>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5 ml-5">
              <h3>Data Movie</h3>
            </Col>
            <Col className="mt-5">
              <Form>
                <Form.Row className="justify-content-end">
                  <Form.Group className="mr-3">
                    <Form.Control as="select" name="sort" placeholder="sort">
                      <option>Release Date</option>
                      <option>Movie Name</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      name="searchQuery"
                      type="search"
                      placeholder="Search movie name..."
                    />
                  </Form.Group>
                </Form.Row>
              </Form>
            </Col>
          </Row>
          <Row className="ml-3">
            {this.props.movie.dataMovie.map((item, index) => {
              return (
                <Col md={2} className="ml-4" key={index}>
                  <TickitzImageCard3
                    data={item}
                    handleUpdate={this.setUpdate.bind(this)}
                    handleDelete={this.deleteData.bind(this)}
                  />
                </Col>
              );
            })}
          </Row>
          <TickitzFooter />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movie,
});

const mapDispatchToProps = {
  getAllMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
