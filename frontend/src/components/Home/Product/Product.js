import React from "react";
import { addToCart } from "../../../features/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { useGetAllProductsQuery } from "../../../features/productsApi";

const Product = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  const history = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history.push("/cart");
  };
  // const productDetailsMain = (product) => {
  //   dispatch(productDetailsMain(product));
  //   history.push("/productdetails");
  // };

  return (
    <div>
      {isLoading ? (
        <p>isLoading</p>
      ) : error ? (
        <p> An error Occyred... </p>
      ) : (
        <>
          <section className="product_section layout_padding">
            <div className="container">
              <div className="heading_container heading_center">
                <h2>
                  Our <span>products</span>
                </h2>
              </div>
              <div className="row">
                {data?.map((product) => (
                  <div key={product.id} className="col-sm-6 col-md-4 col-lg-4">
                    <div className="box">
                      <div className="option_container">
                        <div className="options">
                          <a
                            onClick={() => handleAddToCart(product)}
                            className="option1"
                          >
                            Add To Cart
                          </a>
                          <a
                            href="/productdetails"
                            // onClick={() => productDetailsMain(product)}
                            className="option2"
                          >
                            View Details
                          </a>
                        </div>
                      </div>
                      <div className="img-box">
                        <img src={product.image} alt={product.id} />
                      </div>
                      <div className="detail-box">
                        <h5>{product.name}</h5>
                        <h6>${product.price}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="btn-box">
                <a href="/products">View All products</a>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Product;
