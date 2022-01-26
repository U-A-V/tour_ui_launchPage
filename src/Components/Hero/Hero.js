import React from "react";
// import "./hero.css";
function Hero() {
  return (
    <div>
      <div className="bg-hero">
        <img
          src={require("../../assets/michael-benz-IgWNxx7paz4-unsplash.jpg")}
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
