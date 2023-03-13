import React from "react";
import memeData from "./memeData";
import "./styles/Nav.css";

const Nav = (props) => {
  const { img } = props;

  return (
    <div className="nav">
        <nav>
          <div className="logo-div">
            <img src={img} alt="" className="logo" />
            <span>Meme Generator</span>
          </div>
          <div className="text-div">
            <p>React Course-Project 3</p>
          </div>
        </nav>
      </div>
      
  );
};

export default Nav;
