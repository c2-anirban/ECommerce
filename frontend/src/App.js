import "./App.css";
import "./Style.css";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Home/Header/Header";
import Slider from "./components/Home/Slider/Slider";
import Arrival from "./components/Home/Arrival/Arrival";
import Product from "./components/Home/Product/Product";
import Subscribe from "./components/Home/Subscribe/Subscribe";
import About from "./components/Home/About/About";
import Testimonial from "./components/Home/Testimonial/Testimonial";
import Footer from "./components/Home/Footer/Footer";
import FooterTag from "./components/Home/Footer/FooterTag";
import Home from "./components/Home/Home";
import Products from "./components/Details/Products";
import Contact from "./components/Details/Contact";
import Blog from "./components/Details/Blog";
import AboutUS from "./components/Details/AboutUs";
import Cart from "./components/Home/Cart/Cart";
import ProductDetails from "./components/Details/ProductDetails";
import PaymentSuccessful from "./components/Home/Billing/PaymentSuccessful";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/arrival" element={<Arrival />} />
          <Route path="/product" element={<Product />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/footerTag" element={<FooterTag />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUS />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/successful" element={<PaymentSuccessful />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
