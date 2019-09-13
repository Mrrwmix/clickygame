import React, { useContext } from "react";
import GameContext from "../context/gameContext";
import Image from "./Image";
import { animated } from "react-spring";

const ImageContainer = () => {
  const AnimatedImage = animated(Image);
  const gameContext = useContext(GameContext);
  const { images } = gameContext;
  return (
    <div className='flex-row mx-4 d-flex justify-content-between flex-wrap'>
      {images
        .sort((a, b) => (Math.random() >= 0.5 ? 1 : -1))
        .map(item => (
          <AnimatedImage image={item} key={item.id} />
        ))}
    </div>
  );
};

export default ImageContainer;
