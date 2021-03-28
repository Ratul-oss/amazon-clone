import React, { useContext } from "react";
import { db } from "../../firebase";

const SingleProduct = ({ id, desc, ratingStar, price, productImg }) => {
  const addToCart = () => {
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          qty: doc.data().qty + 1,
        });
      } else {
        db.collection("cartItems").doc(id).set({
          desc: desc,
          img: productImg,
          price: price,
          qty: 1,
        });
      }
    });
  };
  return (
    <>
      <div className="singleProduct">
        <div className="product_desc">
          <h2>{desc}</h2>
          <div className="rating">
            <img src={ratingStar} alt="rating stars" />
          </div>
          <p className="product_price">$ {price}</p>
        </div>
        <div className="productImg">
          <img src={productImg} alt="Product Image" />
        </div>
        <div className="addToCartButton">
          <button onClick={addToCart}>Add To Cart</button>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default SingleProduct;
