import React from "react";
import SingleCartItem from "./SingleCartItem";

// this cartItem data is coming from the cart.js and cart.js is getting data from app.js and,,,,
//  the app.js is providing the data using the context.js
const CartItem = ({ cartItem }) => {
  return (
    <>
      <div className="cartItems">
        {cartItem.map((data, index) => {
          return (
            <SingleCartItem
              key={index}
              img={data.cartItem.img}
              desc={data.cartItem.desc}
              price={data.cartItem.price}
              id={data.id}
              qty={data.cartItem.qty}
              item={cartItem}
            />
          );
        })}
      </div>
    </>
  );
};

export default CartItem;
