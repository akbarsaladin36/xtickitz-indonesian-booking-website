import React, { Component } from "react";
import TickitzNavbar from "../../../components/TickitzNavbar";
import TickitzFooter from "../../../components/TickitzFooter";
import TickitzHomeStyle from "./home.module.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import TickitzImage from "../../../components/TickitzImageCard";
import TickitzImageCard1 from "../../../components/TickitzImageCard1";
import { connect } from "react-redux";
import { getAllMovie } from "../../../redux/actions/movie";
import axiosApiIntances from "../../../utils/axios";

class Home extends Component {
  constructor(props) {
    super(props);
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.currentMonth = new Date();
    this.state = {
      data: [],
      dataNowShowing: [],
      activeMonth: month[this.currentMonth.getMonth()],
    };
  }

  componentDidMount() {
    this.getDataMovieAll();
    this.getUpcomingMovies(this.currentMonth.getMonth() + 1);
    this.getDataWithLimit();
  }

  getDataMovieAll = () => {
    console.log("Get Movie All!");
    this.props.getAllMovie();
  };

  getDataWithLimit = () => {
    axiosApiIntances
      .get(`movie/search-movie/search?limit=5`)
      .then((res) => {
        this.setState({ dataNowShowing: res.data.data });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  getUpcomingMovies = (month) => {
    axiosApiIntances
      .get(`movie/upcoming-movie/${month}`)
      .then((res) => {
        this.setState({ data: res.data.data });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  changeMonthButton = (event, month) => {
    this.setState({
      activeMonth: event.target.innerHTML,
    });
    this.getUpcomingMovies(month);
  };

  handleUpcomingMoviesMap = (month) => {
    const { data } = this.state;
    if (data.length > 0) {
      return data.map((item, index) => {
        return <TickitzImageCard1 data={item} key={index} />;
      });
    } else {
      return (
        <>
          <h3 className="ml-3">No upcoming movie in this {month}</h3>
        </>
      );
    }
  };

  render() {
    const { activeMonth } = this.state;
    return (
      <div>
        <Container>
          <TickitzNavbar />
          <Row className={`${TickitzHomeStyle.header_position} mt-5`}>
            <Col lg={5} className="ml-5 mt-5 pt-lg-5">
              <h6 className="text-muted">Nearest Camera, Newest Movie,</h6>
              <h1 className={TickitzHomeStyle.header_big_text_1}>
                Find Out Now!
              </h1>
            </Col>
            <Col
              lg={5}
              className={`${TickitzHomeStyle.header_image_position} ml-5 pb-lg-5 pl-lg-5 justify-content-center`}
            >
              <img
                src="/img/header-image-1.jpg"
                alt="header movie 1"
                className="mr-3 mt-5"
              />
              <img
                src="/img/header-image-2.jpg"
                alt="header movie 2"
                className="mr-3"
              />
              <img
                src="/img/header-image-3.jpg"
                alt="header movie 3"
                className="mr-3 mb-5"
              />
            </Col>
          </Row>
          <Row className={TickitzHomeStyle.now_showing_position}>
            <Col className={TickitzHomeStyle.now_showing_text_1}>
              <h6 className="ml-4">Now Showing</h6>
            </Col>
            <Col className="text-right">
              <Link to="#" className={TickitzHomeStyle.now_showing_text_2}>
                view all
              </Link>
            </Col>
          </Row>
          <Row
            className={`${TickitzHomeStyle.upcoming_movie_slider} mt-4 ml-5`}
          >
            {this.state.dataNowShowing.length <= 0
              ? null
              : this.state.dataNowShowing.map((item, index) => {
                  return (
                    <Col md={2} className="mr-4" key={index}>
                      <TickitzImage data={item} />
                    </Col>
                  );
                })}
          </Row>
          <Row className="mt-5 ml-2">
            <Col>
              <h6 className={TickitzHomeStyle.upcoming_movie_text_1}>
                Upcoming Movies
              </h6>
            </Col>
            <Col className="text-right">
              <Link to="#" className={TickitzHomeStyle.now_showing_text_2}>
                view all
              </Link>
            </Col>
          </Row>
          <Row className={`${TickitzHomeStyle.button_month_slider} mt-3`}>
            <Col sm={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1}`}
                onClick={(event) => this.changeMonthButton(event, 1)}
              >
                January
              </Button>
            </Col>
            <Col sm={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-4`}
                onClick={(event) => this.changeMonthButton(event, 2)}
              >
                February
              </Button>
            </Col>
            <Col sm={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-4`}
                onClick={(event) => this.changeMonthButton(event, 3)}
              >
                March
              </Button>
            </Col>
            <Col sm={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-4`}
                onClick={(event) => this.changeMonthButton(event, 4)}
              >
                April
              </Button>
            </Col>
            <Col sm={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-4`}
                onClick={(event) => this.changeMonthButton(event, 5)}
              >
                May
              </Button>
            </Col>
            <Col sm={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-4`}
                onClick={(event) => this.changeMonthButton(event, 6)}
              >
                June
              </Button>
            </Col>
            <Col sm={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-4`}
                onClick={(event) => this.changeMonthButton(event, 7)}
              >
                July
              </Button>
            </Col>
            <Col sm={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-4`}
                onClick={(event) => this.changeMonthButton(event, 8)}
              >
                August
              </Button>
            </Col>
            <Col sm={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-4`}
                onClick={(event) => this.changeMonthButton(event, 9)}
              >
                September
              </Button>
            </Col>
            <Col sm={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-4`}
                onClick={(event) => this.changeMonthButton(event, 10)}
              >
                October
              </Button>
            </Col>
            <Col sm={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-4`}
                onClick={(event) => this.changeMonthButton(event, 11)}
              >
                November
              </Button>
            </Col>
            <Col sm={1} className="ml-4">
              <Button
                variant="Primary"
                className={`${TickitzHomeStyle.button_month_1} ml-4`}
                onClick={(event) => this.changeMonthButton(event, 12)}
              >
                December
              </Button>
            </Col>
          </Row>
          <Row
            className={`${TickitzHomeStyle.movie_by_month_position} mt-5 ml-3`}
          >
            {this.handleUpcomingMoviesMap(activeMonth)}
          </Row>
          <Row className="text-center mt-5 mb-5">
            <Col>
              <h5>Be the vanguard of the</h5>
              <h1 className={TickitzHomeStyle.jumbotron_big_text_1}>
                Moviegoers
              </h1>
              <Form inline className="justify-content-center mt-5">
                <Form.Label htmlFor="inlineFormInputName2" srOnly>
                  Name
                </Form.Label>
                <Form.Control
                  type="email"
                  className={`${TickitzHomeStyle.join_form_control} mb-2 mr-sm-2`}
                  id="inlineFormInputName2"
                  placeholder="Write your email"
                />
                <Button
                  variant="Primary"
                  className={`${TickitzHomeStyle.join_button_1} mb-sm-2`}
                >
                  Join Now
                </Button>
              </Form>
            </Col>
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

const mapDispatchToProps = { getAllMovie };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
