import React from "react";
function Package({ pack }) {
  const { id, title, desc } = pack;
  return (
    <div className="package">
      <div className="bar"></div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default Package;
