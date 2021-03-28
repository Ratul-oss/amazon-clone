import React, { useContext, useEffect } from "react";
import { provider, auth } from "../firebase";
import Logo from "../img/logo_black.png";
import { UserContext } from "../Context";

const Login = () => {
  const setUser = useContext(UserContext);

  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const userData = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    document.title = "Amazon Clone - Sing in";
  }, []);
  return (
    <>
      <section className="login_page">
        <div className="Container">
          <div className="content_wrapper">
            {/*  */}

            <div className="amazon_logo">
              <img src={Logo} alt="Amazon Logo DevR" />
            </div>
            <div className="desc">
              <h2>Log into Amazon Clone - DevR</h2>
              <button onClick={signin} className="login_button">
                Sign In With Google
              </button>
            </div>

            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
