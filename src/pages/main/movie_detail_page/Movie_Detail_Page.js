import React, { Component } from "react";
import TickitzNavbar from "../../../components/TickitzNavbar";
import TickitzFooter from "../../../components/TickitzFooter";
import { Container, Row, Col, Form } from "react-bootstrap";
import TickitzBigImage from "../../../components/TickitzBigImageCard";
import TickitzImage2 from "../../../components/TickitzImageCard2";
// import axiosApiIntances from "../../../utils/axios";
import { connect } from "react-redux";
import { getOneMovie } from "../../../redux/actions/movie";

class MovieDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    // console.log(id);
    this.getMovieDataById(id);
  }

  getMovieDataById = (id) => {
    // console.log(`Get data by id${id}`);
    this.props.getOneMovie(id);
    // axiosApiIntances
    //   .get(`tickitz/movie-detail/${id}`)
    //   .then((res) => {
    //     console.log(res.data.data[0]);
    //     this.setState({ data: res.data.data[0] });
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   });
  };

  render() {
    // console.log(this.state.data);
    // console.log(this.props);
    const {
      movie_name,
      movie_genre,
      movie_release_date,
      movie_directed_by,
      movie_duration,
      movie_casts,
      movie_synopsis,
      movie_image,
    } = this.props.movie.dataMovie;
    return (
      <div>
        <Container>
          <TickitzNavbar />
          <Row className="mt-5">
            <Col md={4} className="ml-4">
              <TickitzBigImage movieImage={movie_image} />
            </Col>
            <Col className="ml-4">
              <h4>{movie_name}</h4>
              <p className="text-muted">{movie_genre}</p>
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
          <Row className="justify-content-center mt-5">
            <Col>
              <TickitzImage2 />
              <TickitzImage2 />
            </Col>
            <Col>
              <TickitzImage2 />
              <TickitzImage2 />
            </Col>
            <Col>
              <TickitzImage2 />
              <TickitzImage2 />
            </Col>
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
