import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/main/home_page/Home";
import MovieDetailPage from "../src/pages/main/movie_detail_page/Movie_Detail_Page";
import OrderPage from "../src/pages/main/order_page/Order_Page";
import PaymentPage from "../src/pages/main/payment_page/Payment_Page";
import AdminPage from "../src/pages/main/admin_page/Admin_Page";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route
              path="/movie-detail-page/:id"
              exact
              component={MovieDetailPage}
            />
            <Route path="/order-page" exact component={OrderPage} />
            <Route path="/payment-page" exact component={PaymentPage} />
            <Route path="/admin-page" exact component={AdminPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
