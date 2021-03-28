import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Product from "../components/Product/Product";

const Home = () => {
  useEffect(() => {
    document.title = "Amazon Clone - Computer Accesories";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Product />
    </>
  );
};

export default Home;
