import "./Featured.scss";
import React from "react";
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Discover Buy & Sell</h1>
          <h2>
            {" "}
            <span className="awesome">awesome</span> services
          </h2>
          <div className="search">
            <div className="searchInput">
              <img src="./images/search.png" className="searchImage" alt="" />
              <input size={45} type="text" placeholder="Try building mobile app" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular :</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Service</button>
          </div>
        </div>
        <div className="right">
          <img src="./images/girl.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
