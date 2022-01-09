import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Contact us</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="full">
                <form action="index.html">
                  <fieldset>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      name="name"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      name="email"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Enter subject"
                      name="subject"
                      required
                    />
                    <textarea
                      placeholder="Enter your message"
                      required
                    ></textarea>
                    <input type="submit" value="Submit" />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="arrival_section">
        <div className="container">
          <div className="box">
            <div className="arrival_bg_box">
              <img src="images/arrival-bg.png" alt="" />
            </div>
            <div className="row">
              <div className="col-md-6 ml-auto">
                <div className="heading_container remove_line_bt">
                  <h2>#NewArrivals</h2>
                </div>
                <p style={{ marginTop: "20px", marginBottom: "30px" }}>
                  Vitae fugiat laboriosam officia perferendis provident aliquid
                  voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic?
                  Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem
                  similique ex unde!
                </p>
                <div className="btn-box">
                  <a href="/products" className="btn1">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-col">
              <div className="footer_contact">
                <h4>Reach at..</h4>
                <div className="contact_link_box">
                  <a href="/" style={{ textDecoration: "none" }}>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Location</span>
                  </a>
                  <a href="/" style={{ textDecoration: "none" }}>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Call +01 1234567890</span>
                  </a>
                  <a href="/" style={{ textDecoration: "none" }}>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>demo@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <div className="footer_detail">
                <a
                  href="index.html"
                  className="footer-logo"
                  style={{ textDecoration: "none" }}
                >
                  Famms
                </a>
                <p>
                  Necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with
                </p>
                <div className="footer_social">
                  <a href="/">
                    <FaFacebookF />
                  </a>
                  <a href="/">
                    <FaTwitter />
                  </a>
                  <a href="/">
                    <FaLinkedinIn />
                  </a>
                  <a href="/">
                    <FaInstagram />
                  </a>
                  <a href="/">
                    <FaPinterest />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <div className="map_container">
                <div className="map">
                  <div id="googleMap"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-info">
            <div className="col-lg-7 mx-auto px-0">
              <p>
                © 2022 All Rights Reserved By{"   "}
                <a
                  href="https://github.com/c2-anirban"
                  style={{ textDecoration: "none" }}
                >
                  c2_anirban
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
