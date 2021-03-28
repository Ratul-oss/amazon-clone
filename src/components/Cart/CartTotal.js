import React from "react";

const CartTotal = ({ cartItem }) => {
  // for calculating the total price
  const calculatePrice = () => {
    let total = 0;
    cartItem.forEach((item) => {
      total += item.cartItem.price * item.cartItem.qty;
    });
    return total;
  };

  // for counting item quantity
  const calculateItems = () => {
    let count = 0;
    cartItem.forEach((item) => {
      count += item.cartItem.qty;
    });
    return count;
  };
  return (
    <>
      <div className="cartTotal">
        <div className="totalPrice">
          <h2>
            Total Items: <span>{calculateItems()}</span>
          </h2>
          <h2>
            Total Cost: <span>$ {calculatePrice()}</span>
          </h2>
        </div>
        <div className="proceToCheckOutButton">
          <button>Procced To Checkout</button>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
