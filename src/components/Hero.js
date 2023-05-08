import React from "react";
import { memeData } from "./memeData";
import "./styles/Hero.css";

const Hero = (props) => {
  const { img2 } = props;
  const [imageState, setImageState] = React.useState({
    topText: "",
    bottomText: "",
    randomImg:
      "https://i.pinimg.com/originals/41/34/44/4134448ab2bdd84a8c52584c8026e767.jpg",
  });

  const [newState] = React.useState(memeData);

  function imageGenerator() {
    const memes = newState.data.memes;
    const randomNum = Math.floor(Math.random() * memes.length);
    const getUrl = memes[randomNum].url;

    setImageState((prevImageState) => {
      return {
        ...prevImageState,
        randomImg: getUrl,
      };
    });
  }

  function handleChange(event) {
    const { name, value} = event.target;
    setImageState((prevImageState) => {
      return {
        ...prevImageState,
        [name]: value,
      };
    });
  }

  return (
    <div className="hero-section">
      <form className="input-fields">
        <input
          type="text"
          placeholder="Shut up"
          name="topText"
          value={imageState.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="and take my money"
          name="bottomText"
          value={imageState.bottomText}
          onChange={handleChange}
        />
      </form>
      <div className="randomImg-div">
        <div className="second-input" onClick={imageGenerator}>
          <button>Get a new meme image</button>
          <img src={img2} alt="" />
        </div>
        <div className="text-imgContainer">
          <img src={imageState.randomImg} alt="" className="random-img" />
          <div className="text-container">
            <h2>{imageState.topText}</h2>
            <h2>{imageState.bottomText}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
