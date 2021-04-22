import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
function Product() {
  return (
    <div className="product">
      <img
        src={"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"}
        alt="BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats"
      />
      <div className="product__info">
        <p className="info__name">
          BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats
        </p>
        <p className="info__description">
          "Note:The Jackets is US standard size, Please choose size as your
          usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm
          Fleece.
        </p>
        <p>$499.99</p>
        <Link to={`/product/${1111}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
}

export default Product;
