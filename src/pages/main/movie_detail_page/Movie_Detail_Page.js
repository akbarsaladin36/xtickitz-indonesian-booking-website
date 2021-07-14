import React, { Component } from "react";
import TickitzNavbar from "../../../components/TickitzNavbar";
import TickitzFooter from "../../../components/TickitzFooter";
import { Container, Row, Col, Form } from "react-bootstrap";
import TickitzBigImage from "../../../components/TickitzBigImageCard";
import TickitzImage2 from "../../../components/TickitzImageCard2";
import { connect } from "react-redux";
import { getOneMovie } from "../../../redux/actions/movie";
import axiosApiIntances from "../../../utils/axios";
import TickitzMovieDetailStyle from "./MovieDetailStyle.module.css";

class MovieDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      movieId: this.props.match.params.id,
      cinema: {
        schedule_date: "",
        premiere_location: "",
        pagination: {},
        page: 1,
        limit: 3,
      },
      data_cinema: [],
    };
  }

  componentDidMount() {
    const { movieId } = this.state;
    this.getMovieDataById(movieId);
    this.getCinemaDataByMovieId();
  }

  getMovieDataById = (id) => {
    this.props.getOneMovie(id);
  };

  getCinemaDataByMovieId = () => {
    const { movieId } = this.state;
    let { schedule_date, premiere_location, page, limit } = this.state.cinema;
    schedule_date = "%" + schedule_date + "%";
    premiere_location = "%" + premiere_location + "%";
    axiosApiIntances
      .get(
        `cinema/cinema-movie/get?movieId=${movieId}&location=${premiere_location}&date=${schedule_date}&page=${page}&limit=${limit}`
      )
      .then((res) => {
        this.setState({
          data_cinema: res.data.data,
        });
      });
  };

  render() {
    const {
      movie_id,
      movie_name,
      movie_genre,
      movie_release_date,
      movie_directed_by,
      movie_duration,
      movie_casts,
      movie_synopsis,
      movie_image,
    } = this.props.movie.dataMovieDetail;
    const { data_cinema } = this.state;
    return (
      <div>
        <Container>
          <TickitzNavbar />
          <Row className="mt-5">
            <Col md={4} className="ml-4">
              <TickitzBigImage movieImage={movie_image} />
            </Col>
            <Col className="ml-4">
              <h4 className={TickitzMovieDetailStyle.movie_name_position_1}>
                {movie_name}
              </h4>
              <p
                className={`${TickitzMovieDetailStyle.movie_name_position_2} text-muted`}
              >
                {movie_genre}
              </p>
              <Row>
                <Col>
                  <p className="text-muted">Release Date</p>
                  <p>{movie_release_date}</p>
                </Col>
                <Col>
                  <p className="text-muted">Directed By</p>
                  <p>{movie_directed_by}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="text-muted">Duration</p>
                  <p>{movie_duration}</p>
                </Col>
                <Col>
                  <p className="text-muted">Casts</p>
                  <p>{movie_casts}</p>
                </Col>
              </Row>
              <h4>Synopsis</h4>
              <p className="text-justify">{movie_synopsis}</p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center mt-5">
              <h2>Showtimes and Tickets</h2>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control type="date" />
                </Col>
                <Col>
                  <Form.Control as="select">
                    <option>Purwokerto</option>
                    <option>Jakarta</option>
                    <option>Medan</option>
                  </Form.Control>
                </Col>
              </Form.Row>
            </Form>
          </Row>
          <Row
            className={`${TickitzMovieDetailStyle.showtime_tickets_position_1} justify-content-center mt-5`}
          >
            {data_cinema.map((item, index) => {
              return (
                <Col key={index}>
                  <TickitzImage2 data={[movie_id, item]} />
                </Col>
              );
            })}
          </Row>
          <p className="text-center">view more</p>
          <TickitzFooter />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movie,
});

const mapDispatchToProps = { getOneMovie };

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage);
