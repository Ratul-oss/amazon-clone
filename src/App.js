import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav/Nav";
import Cart from "./pages/Cart";
import db from "./firebase";
// this context will pass the data to the cart.js.
// then the cart.js file will pass the same data to cartItem.js
import { CartContext } from "./Context";
import Login from "./pages/Login";
import { UserContext } from "./Context";
import { auth } from "./firebase";

const App = () => {
  const [cartItem, setCartItem] = useState([]);
  // the token stored in the localstorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

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

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.clear("user");
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);
  return (
    <>
      <Router>
        <Switch>
          {!user ? (
            <UserContext.Provider value={setUser}>
              <Login />
            </UserContext.Provider>
          ) : (
            <CartContext.Provider value={cartItem}>
              <Nav user={user} singoutFunc={signOut} />
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <UserContext.Provider value={setUser}>
                <Route path="/login">
                  <Login />
                </Route>
              </UserContext.Provider>
            </CartContext.Provider>
          )}
        </Switch>
      </Router>
    </>
  );
};

export default App;
