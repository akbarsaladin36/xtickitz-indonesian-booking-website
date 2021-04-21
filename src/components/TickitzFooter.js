import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";

// import TickitzFooterStyle from "./FooterStyle.module.css";

class TickitzFooter extends Component {
  render() {
    return (
      <div>
        <Container className="bg-light">
          <footer>
            <Row className="ml-0 mt-3">
              <Col className="mt-3">
                <img src="/img/home-logo.jpg" alt="tickitz footer logo" />
                <p className="mt-3 text-muted">
                  Stop waiting in line, Buy tickets
                </p>
                <p className="text-muted">conveniently, watch movie quietly.</p>
              </Col>
              <Col className="ml-4 mt-3">
                <h6>Explore</h6>
                <ul className="list-unstyled text-decoration-none mt-3">
                  <li className="mb-2">
                    <Link to="#" className="text-muted text-black">
                      Cinemas
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#" className="text-muted text-black">
                      Movie List
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#" className="text-muted text-black">
                      My Ticket
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#" className=" text-muted text-black">
                      Notification
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col className="mt-3">
                <h6>Our Sponsor</h6>
                <img
                  src="/img/footer-sponsor-image-1.png"
                  alt="footer-sponsor-1"
                  className="my-3"
                />
                <img
                  src="/img/footer-sponsor-image-2.png"
                  alt="footer-sponsor-2"
                  className="my-3"
                />
                <img
                  src="/img/footer-sponsor-image-3.png"
                  alt="footer-sponsor-3"
                  className="my-3"
                />
              </Col>
              <Col className="mt-3">
                <h6>Follow Us</h6>
                <ul className="list-unstyled text-decoration-none mt-3">
                  <li className="mb-2">
                    <Link to="#" className="text-muted text-black">
                      <FiFacebook className="mr-3" />
                      Tickitz Cinema id
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#" className="text-muted text-black">
                      <FiInstagram className="mr-3" />
                      tickitz.id
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#" className="text-muted text-black">
                      <FiTwitter className="mr-3" />
                      tickitz.id
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#" className=" text-muted text-black">
                      <FiYoutube className="mr-3" />
                      Tickitz Cinema id
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </footer>
        </Container>
      </div>
    );
  }
}

export default TickitzFooter;
