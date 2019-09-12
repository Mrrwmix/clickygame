import React, { useContext } from "react";
import GameContext from "../context/gameContext";
import Image from "./Image";

const ImageContainer = () => {
  const gameContext = useContext(GameContext);
  const { images } = gameContext;
  return (
    <div className='flex-row mx-4 d-flex justify-content-between flex-wrap'>
      {images
        .sort((a, b) => (a.random >= b.random ? 1 : -1))
        .map(item => (
          <Image image={item} key={item.id} />
        ))}
    </div>
  );
};

export default ImageContainer;
