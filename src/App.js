import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav/Nav";
import Cart from "./pages/Cart";
import { db } from "./firebase";
// this context will pass the data to the cart.js.
// then the cart.js file will pass the same data to cartItem.js
import { CartContext } from "./Context";

const App = () => {
  const [cartItem, setCartItem] = useState([]);

  // getting the data back from database
  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      let tempItems = [];
      tempItems = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          cartItem: doc.data(),
        };
      });
      setCartItem(tempItems);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);
  return (
    <>
      <Router>
        <Switch>
          {/* passing the data to cart.js/ to the whole application */}
          <CartContext.Provider value={cartItem}>
            <Nav />
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </CartContext.Provider>
        </Switch>
      </Router>
    </>
  );
};

export default App;
