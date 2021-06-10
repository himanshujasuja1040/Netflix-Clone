import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCaFV5fEo4ajEXc_oHO6MZFmxGEBotNX1IIg&usqp=CAU"
          alt="#"
        />
      </div>
      <div className="header_right">
        <ul>
          <li>HOME</li>
          <li>TV SHOW</li>
          <li>NEWS</li>
          <li>MOVIES</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
