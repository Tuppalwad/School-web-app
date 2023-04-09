import React from "react";
import "..//style/Fooder.css";
import Bg from "./logo1.jpeg";
import { Link } from "react-router-dom";
function Fooder() {
  return (
    <>
      <div className="container-fluid">
        <div className="row footer-data">
          <div className="col-md-12">
            <div className="footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="footer-col footer-col-img ">
                      <img className="logoimg" src={Bg} />
                      <div className="footer-col-inner">
                        <h4>About us</h4>
                        <p>जी.प.प्रा.क.शाळा बरबाडा</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="footer-col middle">
                      <h4>Important Links</h4>
                      <ul className="list-unstyled li-space-lg">
                        <li className="media">
                          <i className="fas fa-square"></i>
                          <div className="media-body">
                            facebook
                            <a
                              className="turquoise"
                              href="https://www.facebook.com/templatemo"
                            >
                              startupguide.com
                            </a>
                          </div>
                        </li>
                        <li className="media">
                          <i className="fas fa-square"></i>
                          <div className="media-body">
                            Read our{" "}
                            <a
                              className="turquoise"
                              href="https://blog.templatemo.com"
                            >
                              Terms & Conditions
                            </a>
                            ,{" "}
                            <a
                              className="turquoise"
                              href="https://blog.templatemo.com"
                            >
                              Privacy Policy
                            </a>
                          </div>
                        </li>
                        <li className="media">
                          <i className="fas fa-square"></i>
                          <div className="media-body">
                            <Link className="turquoise" to="/">
                              Home
                            </Link>
                            ,{" "}
                            <Link className="turquoise" to="/about">
                              About
                            </Link>
                            ,{" "}
                            <Link className="turquoise" to="/gallary">
                              Gallary
                            </Link>
                            ,{" "}
                            <Link className="turquoise" to="/contact">
                              Contact
                            </Link>
                            ,{" "}
                            <Link className="turquoise" to="/index">
                              Sign Up
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="footer-col last">
                      <h4>Contact</h4>
                      <ul className="list-unstyled li-space-lg">
                        <li className="media">
                          <i className="fas fa-map-marker-alt"></i>
                          <div className="media-body">
                            India, Nanded city, Maharashtra, 431602
                          </div>
                        </li>
                        <li className="media">
                          <i className="fas fa-phone"></i>
                          <div className="media-body">
                            <a className="turquoise" href="tel:003024630820">
                              +91 1234567890
                            </a>
                          </div>
                        </li>
                        <li className="media">
                          <i className="fas fa-envelope"></i>
                          <div className="media-body">
                            <a
                              className="turquoise"
                              href="mailto:
[...]         "
                            >
                              {" "}
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fooder;
