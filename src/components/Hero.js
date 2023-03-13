import React from "react";
import memeData from "./memeData";
import "./styles/Hero.css";

const Hero = (props) => {
  const { img2, img3 } = props;
  const [imageState, setImageState] = React.useState({
    topText: "",
    bottomText: "",
    randomImg:
      "https://i.pinimg.com/originals/41/34/44/4134448ab2bdd84a8c52584c8026e767.jpg",
  });

  const [newState, setNewState] = React.useState(memeData)
  

  function imageGenerator() {
    const memes = newState.data.memes;
    const randomNum = Math.floor(Math.random() * memes.length);
    const getUrl = memes[randomNum].url;

    setImageState(imageState => {
      return {
        ...imageState,
        randomImg: getUrl
      }
    })
    
  }

  return (
    <div className="hero-section">
      <div className="input-fields">
        <input type="text" placeholder="Shut up" />
        <input type="text" placeholder="and take my money" />
      </div>
      <div className="randomImg-div">
        <div className="second-input" onClick={imageGenerator}>
          <input type="text" placeholder="Get a new meme image" />
          <img src={img2} alt="" />
        </div>
        <img src={imageState.randomImg} alt="" className="random-img" />
      </div>
    </div>
  );
};

export default Hero;
