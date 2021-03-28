import React, { useEffect, useState } from "react";
import db from "../../firebase";
import SingleProduct from "./SingleProduct";

const Product = () => {
  const [product, setProduct] = useState([]);

  // * for getting the data back from firebase
  const getProducts = () => {
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = [];
      tempProducts = snapshot.docs.map((doc) => {
        return { id: doc.id, product: doc.data() };
      });
      setProduct(tempProducts);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section className="Products">
        <div className="Container">
          <div className="Products_wrapper">
            {/*  */}

            {/* single product */}
            {product.map((singleData, index) => {
              return (
                <div key={index}>
                  <SingleProduct
                    desc={singleData.product.desc}
                    ratingStar={singleData.product.ratingStar}
                    price={singleData.product.price}
                    productImg={singleData.product.productImg}
                    id={singleData.id}
                  />
                </div>
              );
            })}

            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
