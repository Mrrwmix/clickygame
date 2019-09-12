import React, { useContext } from "react";
import PropTypes from "prop-types";
import GameContext from "../context/gameContext";
import "../App.css";

const imgStyle = {
  width: "10vw",
  height: "17vh",
  border: "2px solid slategray",
  boxShadow: "1vw 1vh 2vw black",
  cursor: "pointer"
};

const Image = ({ image }) => {
  const gameContext = useContext(GameContext);
  const { clickedCard } = gameContext;
  const { src, clicked, id, name } = image;
  return (
    <div className='col-sm-3 text-center my-1 cardo'>
      <img
        src={src}
        clicked={clicked}
        identity={id}
        alt={name}
        className='img-fluid'
        style={imgStyle}
      />
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.object.isRequired
};

export default Image;
