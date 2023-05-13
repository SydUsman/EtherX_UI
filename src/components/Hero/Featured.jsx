import "./Featured.scss";
import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { useTypewriter} from "react-simple-typewriter";


const Featured = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [input, setInput] = useState("");

  const [text] = useTypewriter({
    words: [
      "Powered by BlockChain",
      "Pakistan's first freelance Marketplace",
      "Supervised by Dr. Farhan",
      "Co-Supervised by Ma'am Tahreem Saeed",
      "Final Year Project",
    ],
    loop: {},
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };

  const handleKeyDown=(e)=>{
    if(e.key === 'Enter'){
      navigate(`/gigs?search=${input}`)      
    }
  }
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Discover Buy & Sell</h1>
          <h2>
            <span className="awesome">awesome</span> services
          </h2>
          <div className="search">
            <div className="searchInput">
              <img src="./images/search.png" className="searchImage" alt="" />
              <input size={45} type="text" placeholder="Search services here" onKeyDown={handleKeyDown} onChange={(e) => setInput(e.target.value)}/>
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          {/* <div className="popular">
            <span>Popular :</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Service</button>
          </div> */}
          <div className="typewriter"># {text}</div>
        </div>
        <div className="right">
          <img src="./images/girl.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
