import React, { useContext } from "react";
import PropTypes from "prop-types";
import GameContext from "../context/gameContext";
import "../App.css";
import { useSpring, animated } from "react-spring";

const imgStyle = {
  width: "10vw",
  height: "17vh",
  border: "2px solid slategray",
  boxShadow: "1vw 1vh 2vw black",
  cursor: "pointer"
};

const Image = ({ image }) => {
  const gameContext = useContext(GameContext);
  const spring = useSpring({ opacity: 1, from: { opacity: 0 } });
  const { clickedCard } = gameContext;
  const { src, id, name } = image;

  return (
    <animated.div
      className='col-sm-3 text-center my-1 cardo d-flex justify-content-center'
      style={spring}
    >
      <img
        src={src}
        alt={name}
        className='rounded-circle my-1'
        style={imgStyle}
        onClick={clickedCard}
        identity={id}
      />
    </animated.div>
  );
};

Image.propTypes = {
  image: PropTypes.object.isRequired
};

export default Image;
