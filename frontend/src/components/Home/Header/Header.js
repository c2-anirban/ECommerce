import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
// import { AiOutlineLogin } from "react-icons/ai";
import { RiLogoutCircleRFill, RiLoginCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <div>
      <div className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="/">
              <img width="250" src="images/logo.png" alt="/" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""> </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                    {/* <span className="sr-only">(current)</span> */}
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    {" "}
                    <span className="nav-label">
                      Pages <span className="caret"></span>
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Testimonial</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/products">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
                <Link to="/cart">
                  <li className="nav-item nav-item-icon cart">
                    <button
                      className="btn  my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    >
                      <FaShoppingCart />
                    </button>
                    <span
                      className="bag-quantity"
                      style={{ textDecoration: "none" }}
                    >
                      <span>{cartTotalQuantity}</span>
                    </span>
                  </li>
                </Link>
                <form className="form-inline search">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  >
                    <FaSearch />
                  </button>
                </form>
                <Link to="/login">
                  <li className="nav-item logIn">
                    <span>
                      <button
                        className="btn  my-2 my-sm-0 nav_search-btn"
                        type="submit"
                      >
                        <RiLoginCircleFill />
                      </button>
                    </span>
                  </li>
                </Link>
                <Link to="/logout">
                  <li className="nav-item logOut">
                    <span>
                      <button
                        className="btn  my-2 my-sm-0 nav_search-btn"
                        type="submit"
                      >
                        <RiLogoutCircleRFill />
                      </button>
                    </span>
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
