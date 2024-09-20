import React, { useContext } from "react";
import "../css/CartComponent.css";
import EmptyCart from "./EmptyCart";
import { CartContext } from "../context/CartContextContainer";
const CartComponent = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <div className="cartContainer">
        <div className="cartblock">
          {cart.cartCount === 0 && <EmptyCart />}
          <div className="savedBlock">
            <h2>Saved for later</h2>
          </div>
        </div>
        <div className="CartSuggestion">
          <center>
            <h3>Recommendations for all products:</h3>
          </center>
          <div className="suggestionLayoutBlock">
            {cart.map((product, index) => (
              <div className="suggestionLayout" key={index}>
                <div className="productShowBlock">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/I/71GLMJ7TQiL._AC_UL100_SR100,100_.jpg"
                    alt="Iphone"
                  />
                </div>
                <div className="aboutProductBlock">
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                  <button className="addtoCart-btn">Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;
