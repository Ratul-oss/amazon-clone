import React from "react";
import { db } from "../../firebase";

const SingleCartItem = ({ img, desc, price, qty, id }) => {
  let options = [];
  for (let i = 1; i < Math.max(qty + 1, 20); i++) {
    options.push(
      <option key={i} value={i}>
        Qty: {i}
      </option>
    );
  }

  const changeQuantity = (newQuantity) => {
    db.collection("cartItems")
      .doc(id)
      .update({
        qty: parseInt(newQuantity),
      });
  };

  const deleteItem = (e) => {
    e.preventDefault();
    db.collection("cartItems").doc(id).delete();
  };
  return (
    <>
      <div className="singleCartItem">
        <div className="cart_image">
          <img src={img} alt="Cart Item Image" />
        </div>
        <div className="cart_desc_and_options">
          <div className="cart_product_desc">
            <h2> {desc} </h2>
            <p>$ {price}</p>
          </div>
          <div className="cart_options">
            <select
              onChange={(e) => changeQuantity(e.target.value)}
              value={qty}
            >
              {options}
            </select>
            <div className="delete_button">
              <button onClick={deleteItem}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCartItem;
