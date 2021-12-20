import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer text-white">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3 my-3 contact">
            <div className="title mb-4">
              <h4>PRODUCT SUPPORT</h4>
            </div>
            <div className="contact-details">
              <p>WE ARE HERE TO HELP!</p>
              <p>
                Email <span className="brand-color"> exemple@example.com</span>
              </p>
              <p>
                Phone <span className="brand-color"> +8801700000000</span>
              </p>
              <p>
                Website{" "}
                <span className="brand-color"> http://www.exemple.com</span>
              </p>
            </div>
          </div>
          <div className="col-md-3 my-3 our-services">
            <div className="title mb-4">
              <h4>Services Plans</h4>
            </div>
            <div className="our-services-details">
              <p>Comprehensive care services providing peace of mind.</p>
              <Link to="/" className="d-block p-0 mb-4 item-link nav-link">
                <FontAwesomeIcon className="brand-color" icon={faCheckCircle} />{" "}
                <span> DJI Care Refresh</span>
              </Link>
              <Link to="/" className="d-block p-0 mb-4 item-link nav-link">
                <FontAwesomeIcon className="brand-color" icon={faCheckCircle} />{" "}
                <span> DJI Care Refresh +</span>
              </Link>
              <Link to="/" className="d-block p-0 mb-4 item-link nav-link">
                <FontAwesomeIcon className="brand-color" icon={faCheckCircle} />{" "}
                <span> DJI Care Pro</span>
              </Link>
            </div>
          </div>
          <div className="col-md-3 my-3 our-support">
            <div className="title mb-4">
              <h4>MORE SERVICES</h4>
            </div>
            <div className="our-support-details">
              <p>Master your product with these guides.</p>
              <Link to="/" className="d-block p-0 mb-4 item-link nav-link">
                <FontAwesomeIcon className="brand-color" icon={faCheckCircle} />{" "}
                <span> Fly Safe</span>
              </Link>
              <Link to="/" className="d-block p-0 mb-4 item-link nav-link">
                <FontAwesomeIcon className="brand-color" icon={faCheckCircle} />{" "}
                <span> DJI Flying Tips</span>
              </Link>
              <Link to="/" className="d-block p-0 mb-4 item-link nav-link">
                <FontAwesomeIcon className="brand-color" icon={faCheckCircle} />{" "}
                <span> After-Sales Service Policies</span>
              </Link>
            </div>
          </div>
          <div className="col-md-3 my-3 contact">
            <div className="title mb-4">
              <h4>STAY CONTACT</h4>
            </div>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="d-flex justify-content-end">
                <button className="btn contact-btn me-1">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="pt-3 d-flex justify-content-between">
            <div className="copyright-text">
              <small>
                Copyright {new Date().getFullYear()} by drone-marketplace | All
                Rights Reserved
              </small>
            </div>
            <div className="social-media">
              <ul className="list-inline">
                <li className="list-inline-item icon-item">
                  <a href="//facebook.com">
                    <FontAwesomeIcon
                      className="social-icon"
                      icon={faFacebookF}
                    />
                  </a>
                </li>
                <li className="list-inline-item icon-item">
                  <a href="//google.com">
                    <FontAwesomeIcon
                      className="social-icon"
                      icon={faGooglePlusG}
                    />
                  </a>
                </li>
                <li className="list-inline-item icon-item">
                  <a href="//instagram.com">
                    <FontAwesomeIcon
                      className="social-icon"
                      icon={faInstagram}
                    />
                  </a>
                </li>
                <li className="list-inline-item icon-item">
                  <a href="//twitter.com">
                    <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
