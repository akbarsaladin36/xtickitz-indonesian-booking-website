import React, { Component } from "react";
import styles from "./Home.module.css";
import NavBar from "../../../components/NavBar";
import { Container, Form, Button, Row, Col, Spinner } from "react-bootstrap";
import Cards from "../../../components/Cards";
import axiosApiIntaces from "../../../utils/axios";
import ReactPaginate from "react-paginate";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        movieName: "",
        movieCategory: "",
        movieReleaseDate: "",
      },
      data: [],
      pagination: {},
      sort: "movie_name ASC, movie_release_date ASC",
      page: 1,
      limit: 3,
      isLoading: false,
      isUpdate: false,
      id: "",
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    console.log("Get Data");
    const { sort, page, limit } = this.state;
    this.setState({ isLoading: true });
    axiosApiIntaces
      .get(`home?sort=${sort}&page=${page}&limit=${limit}`)
      .then((res) => {
        // console.log(res);
        this.setState({ data: res.data.data, pagination: res.data.pagination });
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 1000);
      });
  }

  resetData = (event) => {
    event.preventDefault();
    this.setState({
      form: {
        movieName: "",
        movieCategory: "",
        movieReleaseDate: "",
      },
    });
  };

  submitData = (event) => {
    event.preventDefault();
    console.log("save data.");
    console.log(this.state.form);
  };

  setUpdate = (data) => {
    console.log("Set Updated!");
    console.log(data);
    this.setState({
      isUpdate: true,
      id: data.movie_id,
      form: {
        movieName: data.movie_name,
        movieCategory: data.movie_genre,
        movieReleaseDate: data.movie_release_date.slice(0, 10),
      },
    });
  };

  updateData = (event) => {
    event.preventDefault();
    console.log("Data Updated!");
    console.log(this.state.id);
    console.log(this.state.form);
    this.setState({ isUpdate: false });
    this.resetData(event);
  };

  deleteData = (id) => {
    console.log("Data Deleted!");
    console.log(id);
  };

  handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    this.setState({ page: selectedPage }, () => {
      this.getData();
    });
  };

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    console.log(this.state);
    const { totalPage } = this.state.pagination;
    const { isLoading, isUpdate } = this.state;
    const { movieName, movieCategory, movieReleaseDate } = this.state.form;
    return (
      <>
        <Container className={styles.containerCenter}>
          <h1>Home Page !</h1>
          <NavBar />
          <div className="containerForm">
            <Form
              onSubmit={isUpdate ? this.updateData : this.submitData}
              onReset={this.resetData}
            >
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Movie Name</Form.Label>
                <Form.Control
                  type="text"
                  name="movieName"
                  placeholder="Spiderman"
                  value={movieName}
                  onChange={(event) => this.changeText(event)}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Movie Category</Form.Label>
                <Form.Control
                  type="text"
                  name="movieCategory"
                  placeholder="Action"
                  value={movieCategory}
                  onChange={(event) => this.changeText(event)}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Movie Release Date</Form.Label>
                <Form.Control
                  type="date"
                  name="movieReleaseDate"
                  placeholder="Date"
                  value={movieReleaseDate}
                  onChange={(event) => this.changeText(event)}
                />
              </Form.Group>
              <Button variant="primary" type="reset">
                Reset
              </Button>
              <Button variant="primary" type="submit">
                {isUpdate ? "Update" : "Submit"}
              </Button>
            </Form>
          </div>
          <hr />
          <Row>
            {isLoading ? (
              <Col md={12}>
                <Spinner animation="border" variant="primary" />
              </Col>
            ) : (
              this.state.data.map((item, index) => {
                return (
                  <Col md={4} key={index}>
                    <Cards
                      data={item}
                      handleUpdate={this.setUpdate.bind(this)}
                      handleDelete={this.deleteData.bind(this)}
                    />
                  </Col>
                );
              })
            )}
          </Row>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={totalPage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={styles.pagination}
            subContainerClassName={`${styles.pages} ${styles.pagination}`}
            activeClassName={"active"}
          />
        </Container>
      </>
    );
  }
}

export default Home;
