import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/main/home_page/Home";
import MovieDetailPage from "../src/pages/main/movie_detail_page/Movie_Detail_Page";
import OrderPage from "../src/pages/main/order_page/Order_Page";
import PaymentPage from "../src/pages/main/payment_page/Payment_Page";
import AdminPage from "../src/pages/main/admin_page/Admin_Page";
import SignUp from "./pages/main/sign_up/Sign_Up";
import SignIn from "./pages/main/sign_in/Sign_In";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/main/home" exact component={Home} />
              <Route
                path="/main/movie-detail-page/:id"
                exact
                component={MovieDetailPage}
              />
              <Route path="/main/order-page" exact component={OrderPage} />
              <Route path="/main/payment-page" exact component={PaymentPage} />
              <Route path="/main/admin-page" exact component={AdminPage} />
              <Route path="/main/sign-in" exact component={SignIn} />
              <Route path="/main/sign-up" exact component={SignUp} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
