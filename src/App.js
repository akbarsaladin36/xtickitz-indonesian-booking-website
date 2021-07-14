import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import Home from "./pages/main/home_page/Home";
import MovieDetailPage from "../src/pages/main/movie_detail_page/Movie_Detail_Page";
import OrderPage from "../src/pages/main/order_page/Order_Page";
import PaymentPage from "../src/pages/main/payment_page/Payment_Page";
import AdminPage from "../src/pages/main/admin_page/Admin_Page";
import SignUp from "./pages/main/sign_up/Sign_Up";
import SignIn from "./pages/main/sign_in/Sign_In";
import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";
import ProfilePage from "./pages/main/profile_page/Profile_Page";
import LandingPage from "./pages/main/landing_page/Landing_Page";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <Switch>
                <PrivateRoute path="/main/home" exact component={Home} />
                <PrivateRoute
                  path="/main/movie-detail-page/:id"
                  exact
                  component={MovieDetailPage}
                />
                <PrivateRoute
                  path="/main/order-page"
                  exact
                  component={OrderPage}
                />
                <PrivateRoute
                  path="/main/payment-page"
                  exact
                  component={PaymentPage}
                />
                <PrivateRoute
                  path="/main/admin-page"
                  exact
                  component={AdminPage}
                />
                <PrivateRoute
                  path="/main/profile-page/:id"
                  exact
                  component={ProfilePage}
                />
                <PublicRoute
                  Route
                  restricted={true}
                  path="/auth/sign-in"
                  exact
                  component={SignIn}
                />
                <PublicRoute
                  Route
                  restricted={true}
                  path="/auth/sign-up"
                  exact
                  component={SignUp}
                />
                <PublicRoute
                  restricted={false}
                  path="/"
                  exact
                  component={LandingPage}
                />
              </Switch>
            </Router>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
