import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const details = useSelector((state) => state.Details);

  return (
    <div>
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Product Details</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <h3>Details</h3>
        {details.productDetailsItems.length === 0 ? (
          <div>
            <p>Select a Product</p>
          </div>
        ) : (
          <div className="cart-items">
            {details.productDetailsItems?.map((detailsItem) => (
              <div className="cart-item" key={detailsItem.id}>
                <div className="cart-product">
                  <img src={detailsItem.image} alt={detailsItem.id} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
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

export default ProductDetails;
