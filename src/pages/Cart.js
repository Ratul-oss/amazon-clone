import React, { useEffect, useContext } from "react";
import CartItem from "../components/Cart/CartItem";
import CartTotal from "../components/Cart/CartTotal";
import { CartContext } from "../Context";

const Cart = () => {
  useEffect(() => {
    document.title = "Amazon Clone - Shopping Cart";
    window.scrollTo(0, 0);
  }, []);
  // getting the data
  const cartItem = useContext(CartContext);
  return (
    <>
      <section className="cart">
        <div className="Container">
          <h2>Your cart items will appear here.</h2>
          <div className="ContentWrapper">
            {/*  */}

            {/* passing the data to cartitem.js */}
            <CartItem cartItem={cartItem} />
            <CartTotal cartItem={cartItem} />

            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
