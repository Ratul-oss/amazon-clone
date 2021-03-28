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
          <div className="ContentWrapper">
            {/*  */}

            {/* passing the data to cartitem.js */}
            <CartItem cartItem={cartItem} />
            <CartTotal />

            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
