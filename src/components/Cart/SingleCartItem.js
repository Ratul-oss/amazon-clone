import React from "react";

const SingleCartItem = ({ img, desc, price, qty }) => {
  let options = [];
  for (let i = 1; i < Math.max(qty + 1, 20); i++) {
    options.push(
      <option key={i} value={i}>
        Qty: {i}
      </option>
    );
  }
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
            <select value={qty}>{options}</select>
            <div className="delete_button">
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCartItem;
