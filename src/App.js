import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home_page/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/home" exact component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
