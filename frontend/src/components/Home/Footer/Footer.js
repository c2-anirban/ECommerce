import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="full">
                <div className="logo_footer">
                  <a href="#">
                    <img width="210" src="images/logo.png" alt="#" />
                  </a>
                </div>
                <div className="information_f">
                  <p>
                    <strong>ADDRESS:</strong> 28 White tower, Street Name New
                    York City, USA
                  </p>
                  <p>
                    <strong>TELEPHONE:</strong> +91 987 654 3210
                  </p>
                  <p>
                    <strong>EMAIL:</strong> yourmain@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="widget_menu">
                        <h3>Menu</h3>
                        <ul>
                          <li>
                            <a href="/" style={{ textDecoration: "none" }}>
                              Home
                            </a>
                          </li>
                          <li>
                            <a href="/about" style={{ textDecoration: "none" }}>
                              About
                            </a>
                          </li>
                          <li>
                            <a
                              href="/products"
                              style={{ textDecoration: "none" }}
                            >
                              Services
                            </a>
                          </li>
                          <li>
                            <a
                              href="/testimonial"
                              style={{ textDecoration: "none" }}
                            >
                              Testimonial
                            </a>
                          </li>
                          <li>
                            <a href="/blog" style={{ textDecoration: "none" }}>
                              Blog
                            </a>
                          </li>
                          <li>
                            <a
                              href="/contact"
                              style={{ textDecoration: "none" }}
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="widget_menu">
                        <h3>Account</h3>
                        <ul>
                          <li>
                            <a
                              href="/contact"
                              style={{ textDecoration: "none" }}
                            >
                              Account
                            </a>
                          </li>
                          <li>
                            <a href="/" style={{ textDecoration: "none" }}>
                              Checkout
                            </a>
                          </li>
                          <li>
                            <a
                              href="/contact"
                              style={{ textDecoration: "none" }}
                            >
                              {" "}
                              Login
                            </a>
                          </li>
                          <li>
                            <a href="/" style={{ textDecoration: "none" }}>
                              Register
                            </a>
                          </li>
                          <li>
                            <a
                              href="/products"
                              style={{ textDecoration: "none" }}
                            >
                              Shopping
                            </a>
                          </li>
                          <li>
                            <a href="/" style={{ textDecoration: "none" }}>
                              Widget
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="widget_menu">
                    <h3>Newsletter</h3>
                    <div className="information_f">
                      <p>
                        Subscribe by our newsletter and get update protidin.
                      </p>
                    </div>
                    <div className="form_sub">
                      <form action="/contact">
                        <fieldset>
                          <div className="field">
                            <input
                              type="email"
                              placeholder="Enter Your Mail"
                              name="email"
                            />
                            <input type="submit" value="Subscribe" />
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
