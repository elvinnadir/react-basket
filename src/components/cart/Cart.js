import React from "react";
import "./cart.css";
import CartTitle from "../CartTitle/CartTitle";
import CartInfo from "../CartInfo/CartInfo";
import CartImage from "../CartImages/CartImage";
function Cart({ title, info, image, onClick }) {
  return (
    <div className="cart" onClick={onClick}>
      <div className="cart-body">
        <CartTitle title={title} />
        <CartImage image={image} />
        <CartInfo info={info} />
      </div>
    </div>
  );
}
export default Cart;
