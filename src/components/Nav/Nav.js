import React, { useContext, useState } from "react";
import logo from "../../img/logo.png";
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context";

// this nav will remain everywhere
const Nav = () => {
  const cartItem = useContext(CartContext);

  const getCount = () => {
    let count = 0;
    // loop through all the cart item
    cartItem.forEach((singleItem) => {
      // add the quantity of the cart item to total../Count
      count += singleItem.cartItem.qty;
    });
    return count;
  };
  return (
    <>
      <nav>
        <div className="nav_logo">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="nav_search">
          <input type="search" name="searchBar" placeholder="Search Products" />
        </div>
        <ul className="nav_links">
          <li>
            <Link style={{ textDecoration: "none", color: "white" }} to="/cart">
              <AddShoppingCartRoundedIcon style={{ fontSize: "2rem" }} />
              {/* cart count */}
              <div className="cart_placeholder"> {getCount()} </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
