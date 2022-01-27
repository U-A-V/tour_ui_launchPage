import React, { useState, useEffect } from "react";
import Package from "../Package/Package";
import data from "../Package/packageData";

// import "./hero.css";
function Hero() {
  const [packages, setPackages] = useState(data);
  useEffect(() => {}, [data]);
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
      <div className="packages-left"></div>
    </div>
  );
}

export default Hero;
