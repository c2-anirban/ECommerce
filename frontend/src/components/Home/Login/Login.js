import { useState } from "react";
import styled from "styled-components";
import { login } from "../../../features/userSlice";
// import { mobile } from "../../../responsive";
import { useDispatch, useSelector } from "react-redux";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Container = styled.div`
  width: 100vw;
  height: 64vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://images.pexels.com/photos/6984709/pexels-photo-6984709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: 21%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  padding: 12px 45px;
  background-color: #f7444e;
  border: 1px solid #f7444e;
  color: #ffffff;
  border-radius: 0;
  transition: all 0.3s;
  margin-top: 10px;
  font-weight: 700;
  border-radius: 50px;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loggedIn, error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        username: username,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };
  return (
    <>
      <Container className="mb-4">
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Input
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              // onClick={handleClick}
              // disabled={isFetching}
            >
              LOGIN
            </Button>
            {/* {error && <Error>Something went wrong...</Error>} */}
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link to="/">CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>

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
    </>
  );
};

export default Login;
