import React from "react";
import "../css/EmptyCart.css";
import { Link } from "react-router-dom";
const EmptyCart = () => {
  return (
    <>
      <div className="EmptyBlockContainer">
        <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="EmptyCart" />
        <div className="cartDescriptionBlock">
           <h2>Your Amazon Cart is empty</h2>
           <Link to='/'><p>Shop today's deals</p></Link>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
