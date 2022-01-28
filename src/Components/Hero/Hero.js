import React, { useState, useEffect } from "react";
import Package from "../Package/Package";
import data from "../Package/packageData";

// import "./hero.css";
function Hero() {
  const [packages, setPackages] = useState(data);
  // useEffect(() => {}, [data]);
  return (
    <div className="hero">
      <div className="bg-hero">
        <img
          src={require("../../assets/michael-benz-IgWNxx7paz4-unsplash.jpg")}
          alt=""
        />
      </div>
      <div className="info">
        <h1 className="title">Discover the Ocean</h1>
        <p className="desc">
          From the depths of ocean to<span>heights of the sky</span>
        </p>
      </div>
      <div className="packages-left">
        {packages.map((pack) => {
          return <Package key={pack.id} pack={pack}></Package>;
        })}
      </div>
      <div className="action">
        <h3>Start Your Journy</h3>
      </div>
      <div className="arrow"></div>
      <div className="right-block"></div>
    </div>
  );
}

export default Hero;
