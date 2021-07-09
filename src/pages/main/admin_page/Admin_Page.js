import React, { Component } from "react";
import TickitzNavbar from "../../../components/TickitzNavbar";
import TickitzFooter from "../../../components/TickitzFooter";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import TickitzImageCard4 from "../../../components/TickitzImageCard4";
import AdminPageStyle from "./AdminPageStyle.module.css";
import TickitzImageCard3 from "../../../components/TickitzImageCard3";
import { connect } from "react-redux";
import {
  getAllMovie,
  getOneMovie,
  createMovie,
  updateMovie,
  updateImageMovie,
  deleteMovie,
} from "../../../redux/actions/movie";
import ReactPaginate from "react-paginate";
import axiosApiIntances from "../../../utils/axios";

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
      isSuccess: false,
      isError: false,
      searchResult: "",
      sort: "",
      page: 1,
      limit: 5,
      pagination: {},
    };
  }

  componentDidMount() {
    this.getSearchData();
  }

  getSearchData = () => {
    const { searchResult, sort, page, limit } = this.state;
    let urlParam = `?page=${page}&limit=${limit}`;
    if (searchResult) {
      urlParam += `&search=${searchResult}`;
    }
    if (sort) {
      urlParam += `&sort=${sort}`;
    }
    this.props.history.push(`/main/admin-page${urlParam}`);
    axiosApiIntances
      .get(
        `movie/search-movie/search?searchResult=${searchResult}&sort=${sort}&page=${page}&limit=${limit}`
      )
      .then((res) => {
        this.setState({
          data: res.data.data,
          pagination: res.data.pagination,
        });
      })
      .catch((err) => {
        this.setState({
          hasError: err.response.data.msg,
        });
      });
  };

  handleSearch = (event) => {
    if (event.key === "Enter") {
      this.setState({ page: 1, searchResult: event.target.value }, () => {
        this.getSearchData();
      });
    }
  };

  handleSort = (sort) => {
    this.setState(
      {
        sort: sort,
      },
      () => {
        this.getSearchData();
      }
    );
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
    const formData = new FormData();
    formData.append("imageFile", event.target.files[0]);
    const { movieId } = this.state;
    this.props.updateImageMovie(movieId, formData).then((res) => {
      this.getDataMovieAll();
      this.setState({
        ...this.state.form,
        movieImage: res.action.payload.data.data.movie_image,
      });
    });
  };

  resetData = (event) => {
    event.preventDefault();
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
      isUpdate: false,
    });
  };

  submitData = (event) => {
    event.preventDefault();
    const data = {
      movieName: this.state.form.movieName,
      movieGenre: this.state.form.movieGenre,
      movieReleaseDate: this.state.form.movieReleaseDate,
      movieDirectedBy: this.state.form.movieDirectedBy,
      movieDuration: `${this.state.form.movieDurationHour}:${this.state.form.movieDurationMinutes}:00`,
      movieDurationMinutes: this.state.form.movieDurationMinutes,
      movieCasts: this.state.form.movieCasts,
      movieSynopsis: this.state.form.movieSynopsis,
    };
    this.props.createMovie(data).then((res) => {
      this.props.getAllMovie();
    });
  };

  setUpdate = (data) => {
    console.log(data);
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
    const data = {
      movieName: this.state.form.movieName,
      movieGenre: this.state.form.movieGenre,
      movieReleaseDate: this.state.form.movieReleaseDate,
      movieDirectedBy: this.state.form.movieDirectedBy,
      movieDuration: `${this.state.form.movieDurationHour}:${this.state.form.movieDurationMinutes}:00`,
      movieDurationMinutes: this.state.form.movieDurationMinutes,
      movieCasts: this.state.form.movieCasts,
      movieSynopsis: this.state.form.movieSynopsis,
    };
    const { movieId } = this.state;
    this.props.updateMovie(movieId, data).then((res) => {
      this.props.getAllMovie();
      this.setState({ isUpdate: false });
      this.resetData(event);
    });
  };

  deleteData = (id) => {
    this.props.deleteMovie(id).then((res) => {
      this.getDataMovieAll();
    });
  };

  handlePagination = (event) => {
    const selectedPage = event.selected + 1;
    this.setState({ page: selectedPage }, () => {
      this.getSearchData();
    });
  };

  render() {
    const { isUpdate } = this.state;
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
    const { totalPage } = this.state.pagination;
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
                  <Form>
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
                          onClick={(event) => this.resetData(event)}
                        >
                          Reset
                        </Button>
                        <Button
                          variant="primary"
                          className={AdminPageStyle.submit_form_button}
                          onClick={
                            isUpdate
                              ? (event) => this.updateData(event)
                              : (event) => this.submitData(event)
                          }
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
            <Col className={`${AdminPageStyle.data_movie_row} mt-5`}>
              <Form.Row className="justify-content-end">
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Sort"
                  className="d-grid gap-2 mr-2"
                >
                  <Dropdown.Item
                    onClick={() => this.handleSort("movie_release_date ASC")}
                  >
                    Release Date
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.handleSort("movie_name ASC")}
                  >
                    Movie Name
                  </Dropdown.Item>
                </DropdownButton>
                <Form.Group>
                  <Form.Control
                    name="searchResult"
                    type="text"
                    onKeyDown={(event) => this.handleSearch(event)}
                    placeholder="Search movie name..."
                  />
                </Form.Group>
              </Form.Row>
            </Col>
          </Row>
          <Row className="ml-3">
            {this.state.data.map((item, index) => {
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
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={totalPage} //total page
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePagination}
            containerClassName={AdminPageStyle.pagination}
            subContainerClassName={`${AdminPageStyle.pages} ${AdminPageStyle.pagination}`}
            activeClassName={AdminPageStyle.active}
          />
          <TickitzFooter />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  movie: state.movie,
});

const mapDispatchToProps = {
  getAllMovie,
  getOneMovie,
  createMovie,
  updateMovie,
  updateImageMovie,
  deleteMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
