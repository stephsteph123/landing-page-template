import React from "react";
import "./Product.scss";

export default function Product() {
  return (
    <div className="container">
      <div className="product-card">
        <div className="card-head">
          <img
            src="/images/placeholder-logo.png"
            alt="logo"
            className="card-logo"
          />
          <img
            src="/images/placeholder-logo.png"
            alt="Shoe"
            className="product-img"
          />
          <div className="product-detail">
            <h2>Hartbeespoort</h2>
            Support and Nike Zoom Air come together for a more supportive feel
            with high-speed responsiveness
          </div>
          <span className="back-text"> FAS </span>
        </div>
        <div className="card-body">
          <div className="product-desc">
            <span className="product-title">
              Hartbee
              <span className="badge"> New </span>
            </span>
            <span className="product-caption"> Basket Ball Collection </span>
            <span className="product-rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star grey"></i>
            </span>
          </div>
          <div className="product-properties">
            <span className="product-size">
              <h4>Size</h4>
              <ul className="ul-size">
                <li>
                  <a href="#">7</a>
                </li>
                <li>
                  <a href="#">8</a>
                </li>
                <li>
                  <a href="#">9</a>
                </li>
                <li>
                  <a href="#" className="active">
                    10
                  </a>
                </li>
                <li>
                  <a href="#">11</a>
                </li>
              </ul>
            </span>
            <span class="product-color">
              <h4>Colour</h4>
              <ul class="ul-color">
                <li>
                  <a href="#" class="orange active"></a>
                </li>
                <li>
                  <a href="#" class="green"></a>
                </li>
                <li>
                  <a href="#" class="yellow"></a>
                </li>
              </ul>
            </span>
            <span class="product-price">
              {" "}
              USD <b>23,453</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
