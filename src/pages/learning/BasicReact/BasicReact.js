import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./BasicReact.css";
import styles from "./BasicReact.module.css";
import NavBar from "../../../components/NavBar";

class BasicReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Muhammad Akbar Saladin Siregar",
      search: "",
      data: [
        {
          movie_name: "Spiderman",
          movie_duration: "2 hours",
        },
        {
          movie_name: "Hollow Man",
          movie_duration: "4 hours",
        },
      ],
      isShow: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("Component DidMount running.");
  }

  componentDidUpdate() {
    console.log("Component DidUpdate running.");
  }

  handleClick() {
    console.log("Declaration is running");
    console.log("This is :", this);
  }

  handleClick2 = () => {
    console.log("Arrow Function is running");
    console.log("This is :", this);
    this.setState({ name: "David" });
  };

  handleClick3 = (id, event) => {
    console.log("Send Argument !");
    console.log("Id :", id);
    console.log("event:", event);
  };

  changeText = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleParams = (id, event) => {
    console.log("Go to Movie Detail Page");
    // console.log(this.props);
    this.props.history.push(`/learning/basic-movie-detail?movieId=${id}`);
  };

  render() {
    console.log(this.state);
    const { name, search } = this.state;
    return (
      <>
        <Container className={styles.containerCenter}>
          <h1>Basic React</h1>
          <NavBar />
          <h1>Hello, {name}</h1>
          <h1>Hello World!</h1>
          <h3>Events</h3>
          <button onClick={this.handleClick}>Click Me</button>
          <button onClick={this.handleClick2}>Click Me 2</button>
          <button onClick={(event) => this.handleClick3(1, event)}>
            Click Me 3
          </button>
          <h6>Search key: {search}</h6>
          <input
            placeholder="Search..."
            name="search"
            onChange={(event) => this.changeText(event)}
          />
          <hr />
          <h3>Link and URL params</h3>
          <a href="/learning/basic-movie-detail">Go to the movie now!</a>
          <br />
          <Link to="/learning/basic-movie-detail">
            A movie with good stuff is here !
          </Link>
          <br />
          <Button
            variant="primary"
            onClick={(event) => this.handleParams(1, event)}
          >
            Primary
          </Button>
          <h2 className={styles.header}>Styling in React module.css</h2>
          {/* <h2 className="header">Styling with React.css</h2> */}
          {!this.state.isShow ? (
            <h2>"Show is True"</h2>
          ) : (
            <h2>"Show is False"</h2>
          )}
          Looping/Mapping
          {this.state.data.map((item, index) => {
            return <i key={index}>{this.state.data}</i>;
          })}
        </Container>
      </>
    );
  }
}

export default BasicReact;
