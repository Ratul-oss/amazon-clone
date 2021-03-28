import React from "react";
import AmazonMusic from "../../img/amazon_music_logo.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="Container">
          <div className="HeaderDesc">
            <h1>Stream Musics for Free</h1>
            <p>No Subscriptions required</p>
            <div className="amazon_music_logo">
              <img src={AmazonMusic} alt="Amazon Music Transparent Logo" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
