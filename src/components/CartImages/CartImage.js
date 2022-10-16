import React from "react";
import "./cartImage.css";

function CartImage({ image }) {
  return (
    <div className="cart-image">
      <img src={image} alt="" />
    </div>
  );
}
export default CartImage;
