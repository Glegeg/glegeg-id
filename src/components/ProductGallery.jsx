import React from "react";
import product from "../assets/product.png";
import { ReactComponent as Back } from "../assets/back.svg";
import { useHistory } from "react-router-dom";

function ProductGallery(props) {
  let history = useHistory();

  return (
    <div>
      <div
        className={`product-bg w-full h-56 mb-16 relative p-6 ${props.productClassName}`}
      >
        <Back
          style={{ fill: "white", cursor: "pointer" }}
          onClick={() => history.goBack()}
        />
        <img
          src={props.productImg}
          alt=""
          className="png-shadow absolute h-56 left-16 -bottom-12"
        />
      </div>
    </div>
  );
}

export default ProductGallery;
