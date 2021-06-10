import React from "react";
import "./Details.css";
const Details = ({ img }) => {
  return (
    <div className="detail">
      <img src={img} alt="" />
    </div>
  );
};

export default Details;
